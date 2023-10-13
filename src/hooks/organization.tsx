import {
  createOrgService,
  getOrgService,
  updateOrgService,
} from '@services/organization';
import {
  ORG_SELECT,
  setGlobalState,
  updateGlobalState,
  useGLobalState,
} from '@store/queryClient';
import { useMutation, useQuery } from '@tanstack/react-query';
import { orgStorage } from '@utils';
import _ from 'lodash';

export const useCreateOrg = () => {
  let { mutateAsync, ...res } = useMutation({ mutationFn: createOrgService });

  return { ...res, createOrgAction: mutateAsync };
};

export const useUpdateOrg = () => {
  let { mutateAsync, ...res } = useMutation({
    mutationFn: async (props: { id: string } & UpdateOrgDto) => {
      let data = _.omit(props, 'id');
      await updateOrgService(props.id, data);
      updateOrgSelect(data);
    },
  });
  return { ...res, updateOrgAction: mutateAsync };
};

export const useGetMyOrg = () => {
  let { data, ...res } = useQuery({
    queryKey: ['get-organization'],
    initialData: orgStorage.get() || [],
    queryFn: async () => {
      let data = await getOrgService();

      orgStorage.set(data.data.data);
      return data.data.data;
    },
  });

  return { ...res, organizations: data };
};

export const selectOrgAction = (org: IOrganization) => {
  setGlobalState(ORG_SELECT, org);
};

export const useOrgSelect = () => {
  return useGLobalState(ORG_SELECT);
};

export const updateOrgInput = (name: string, id?: string) => {
  if (id) {
    return {
      onBlur: async (ev: React.FocusEvent<HTMLInputElement, Element>) => {
        let dataUpdate = { [name]: ev.currentTarget.value };
        await updateOrgService(id, dataUpdate);
        updateOrgSelect(dataUpdate);
      },
    };
  }
};

const updateOrgSelect = (dataUpdate: Partial<IOrganization>) => {
  // let { ...orgSelect } = getGlobalState(ORG_SELECT);
  // if (orgSelect) {
  //   Object.assign(orgSelect, dataUpdate);
  //   setGlobalState(ORG_SELECT, orgSelect);
  // }
  updateGlobalState(ORG_SELECT, dataUpdate);
};
