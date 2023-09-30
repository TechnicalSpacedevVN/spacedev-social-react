import { api } from '@constants/api';

export const createOrgService = (data: CreateOrgDto) => {
  return api.post('/organization', data);
};

export const updateOrgService = (id: string, data: UpdateOrgDto) => {
  return api.patch(`/organization/${id}`, data);
};

export const getOrgService = () => {
  return api.get<GetOgRes>(`/organization`);
};
