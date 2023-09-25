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
import { convertFileToImage } from '@utils';
import { useState } from 'react';

export const MenuGeneral = () => {
  const { t } = useTranslate();
  const [img, setImg] = useState('');

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
                    onChange={async ([file]) =>
                      setImg(await convertFileToImage(file))
                    }
                    className="flex flex-col gap-2 items-center justify-center"
                  >
                    <div className="relative">
                      <div className="cursor-pointer rounded-full overflow-hidden border border-base w-20 h-20 relative">
                        {img ? (
                          <img src={img} />
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
                <div className="flex flex-col gap-4 w-[500px]">
                  <Input
                    label={t('Organization name')}
                    placeholder={t('Organization name')}
                    maxLength={20}
                  />
                  <Input
                    label={t('Description')}
                    placeholder={t('Description')}
                    maxLength={50}
                  />

                  <SettingItem
                    title={
                      <>
                        Domain &nbsp;<Tag>Enterprise</Tag>
                      </>
                    }
                    sub="Thời gian cập nhật domain có thể mất 15-30 phút"
                  />
                  <Input placeholder={t('Domain')} />
                  <div className="mt-4">
                    <Button className="w-full" type="primary">
                      {t('Create')}
                    </Button>
                  </div>
                </div>
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
