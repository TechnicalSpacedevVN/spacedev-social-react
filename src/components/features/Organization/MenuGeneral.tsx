import { Button } from '@components/atoms/Button';
import { Dropdown } from '@components/atoms/Dropdown';
import { ButtonIconCamera } from '@components/atoms/Icon/IconCamera';
import { IconChevronDown } from '@components/atoms/Icon/IconChevronDown';
import { Input } from '@components/atoms/Input';
import { Menu } from '@components/atoms/Menu';
import { SettingItem } from '@components/atoms/MenuModal';
import { Tab } from '@components/atoms/Tab';
import { Tag } from '@components/atoms/Tag';
import { useTranslate } from '@components/atoms/TranslateProvider';
import { UploadFile } from '@components/atoms/UploadFile';
import { LANGUAGES } from '@constants/config';
import { useUploadFile } from '@hooks/file';
import {
  updateOrgInput,
  useCreateOrg,
  useOrgSelect,
  useUpdateOrg,
} from '@hooks/organization';
import { useForm } from 'react-hook-form';

export const MenuGeneral = () => {
  const organization = useOrgSelect();
  const { uploadFileAction } = useUploadFile();
  const { t } = useTranslate();
  // const [img, setImg] = useState(organization?.logo);
  const { createOrgAction } = useCreateOrg();
  const { register, handleSubmit } = useForm<CreateOrgDto & UpdateOrgDto>({
    defaultValues: organization,
  });
  const submit = (values: CreateOrgDto) => {
    createOrgAction(values);
  };
  const { updateOrgAction } = useUpdateOrg();

  return (
    <div className="py-4 px-10">
      <Tab
        className="border-b border-base"
        itemClass="px-3"
        items={[
          {
            label: t('Basic information'),
            children: (
              <div className="flex gap-4 items-start pt-4">
                <div className="flex justify-center px-20 py-10">
                  <UploadFile
                    onChange={async ([file]) => {
                      // setImg(await convertFileToImage(file));
                      let files = await uploadFileAction([file]);
                      let fileRes = files.data.data?.[0];
                      if (fileRes && organization) {
                        updateOrgAction({
                          id: organization._id,
                          logo: fileRes.urlPublic,
                        });
                      }
                    }}
                    className="flex flex-col gap-2 items-center justify-center"
                  >
                    <div className="relative">
                      <div className="cursor-pointer rounded-full overflow-hidden border border-base w-20 h-20 relative">
                        {organization?.logo ? (
                          <img src={organization.logo} />
                        ) : (
                          <img
                            className="!rounded-full overflow-hidden w-full h-full object-cover"
                            src="/default-img.jpg"
                          />
                        )}
                      </div>
                      <ButtonIconCamera className="absolute -bottom-2 -right-2" />
                    </div>
                    <span className="text-sm font-bold">{t('Icon')}</span>
                  </UploadFile>
                </div>
                <form
                  onSubmit={handleSubmit(submit)}
                  className="flex flex-col gap-4 w-[500px]"
                >
                  <Input
                    label={t('Organization name')}
                    placeholder={t('Organization name')}
                    maxLength={20}
                    {...register('name', { required: true })}
                    {...updateOrgInput('name', organization?._id)}
                  />
                  <Input
                    label={t('Description')}
                    placeholder={t('Description')}
                    maxLength={50}
                    {...register('description', { required: true })}
                    {...updateOrgInput('description', organization?._id)}
                  />

                  <SettingItem
                    title={
                      <>
                        Domain &nbsp;<Tag>Enterprise</Tag>
                      </>
                    }
                    sub="Thời gian cập nhật domain có thể mất 15-30 phút"
                  />
                  <Input
                    placeholder={t('Domain')}
                    {...register('domain')}
                    {...updateOrgInput('domain', organization?._id)}
                  />
                  {!organization && (
                    <div className="mt-4">
                      <Button className="w-full" type="primary">
                        {t('Create')}
                      </Button>
                    </div>
                  )}
                </form>
              </div>
            ),
          },
          {
            label: t('Language & Design'),
            children: (
              <div>
                <SettingItem
                  title={t('Default language')}
                  sub={t('Users can choose their own website display language')}
                  suffix={
                    <Dropdown
                      placement="bottomRight"
                      content={<Menu menus={LANGUAGES} />}
                    >
                      <Button size="small" iconSuffix={<IconChevronDown />}>
                        English
                      </Button>
                    </Dropdown>
                  }
                />
                <SettingItem
                  title={
                    <>
                      {t('Interface settings')} &nbsp;
                      <Tag>Enterprise plan</Tag>
                    </>
                  }
                  sub={t('Customize your social network interface')}
                />
              </div>
            ),
          },

          {
            label: t('System'),
          },
        ]}
      />
    </div>
  );
};
