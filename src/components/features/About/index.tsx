import { IconLock } from '@components/atoms/Icon/IconLock';
import { IconSetting } from '@components/atoms/Icon/IconSetting';
import { IconUserGroup } from '@components/atoms/Icon/IconUserGroup';
import { Input } from '@components/atoms/Input';
import { Menu } from '@components/atoms/Menu';
import { useTranslate } from '@components/atoms/TranslateProvider';
import { FC } from 'react';
import { Avatar } from '../../atoms/Avatar';
import { IconApp } from '../../atoms/Icon/IconApp';
import { ButtonIconCamera } from '../../atoms/Icon/IconCamera';
import { IconNotification } from '../../atoms/Icon/IconNotification';
import { IconUser } from '../../atoms/Icon/IconUser';
import { IconWorld } from '../../atoms/Icon/IconWorld';
import { Modal, ModalProps } from '../../atoms/Modal';

export const ModalAbout: FC<ModalProps> = (props) => {
  const { t } = useTranslate();
  return (
    <Modal {...props} overlayCloseable title={t('Account')}>
      <div className="w-[900px] flex min-h-[700px]">
        <div className="bg-menu w-menu">
          <h2 className="font-semibold text-md p-3">{t('Account')}</h2>
          <div className="px-3">
            <div className="flex gap-2 items-center">
              <Avatar />
              <div>
                <h3 className="text-sm font-bold ">Đặng Thuyền Vương</h3>
                <p className="text-xs text-gray-500">
                  dangthuyenvuong@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="px-1 flex flex-col gap-0.5 mt-3 ">
            <Menu
              className="gap-0.5"
              menus={[
                {
                  label: t('Tài khoản'),
                  icon: <IconUser />,
                  className: 'bg-gray-200 dark:bg-slate-700',
                },
                { label: t('Security'), icon: <IconLock /> },
                { label: t('Settings & privacy'), icon: <IconSetting /> },
                {
                  label: t('Notification settings'),
                  icon: <IconNotification />,
                },
                { label: t('Friends and followers'), icon: <IconUserGroup /> },
                { label: t('Content'), icon: <IconApp /> },
                { label: t('Language and country'), icon: <IconWorld /> },
              ]}
            />
          </div>
        </div>
        <div className="flex-1 px-10">
          <h2 className="font-bold py-5 border-b border-solid border-gray-300 dark:border-slate-700">
            Tài khoản của tôi
          </h2>
          <div className="flex gap-4 mt-3">
            <div className="relative">
              <Avatar size={70} />
              <div className="absolute -right-1 -bottom-1">
                <ButtonIconCamera />
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              Họ và tên
              <Input
                type="text"
                placeholder="Họ và tên"
                defaultValue="Đặng Thuyền Vương"
                className="w-[300px]"
                // className="outline-none bg-gray-100 px-2 rounded border border-solid border-gray-300 text-sm py-1 w-60 dark:bg-slate-800 dark:border-slate-700"
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
