import { Button } from '@components/atoms/Button';
import { ButtonIconCamera } from '@components/atoms/Icon/IconCamera';
import { Input } from '@components/atoms/Input';
import { Tab } from '@components/atoms/Tab';
import { useTranslate } from '@components/atoms/TranslateProvider';
import { UploadFile } from '@components/atoms/UploadFile';
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
            label: 'Thông tin chung',
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
            label: 'Ngôn ngữ & Giao diện',
          },

          {
            label: 'System',
          },
        ]}
      />
    </div>
  );
};
