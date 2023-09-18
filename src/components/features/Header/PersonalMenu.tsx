import { ButtonIconBug } from '@components/atoms/Icon/IconBug';
import { ButtonIconHelpCircle } from '@components/atoms/Icon/IconHelpCircle';
import { ButtonIconLock } from '@components/atoms/Icon/IconLock';
import { ButtonIconEmail } from '@components/atoms/Icon/IconMail';
import { ButtonIconMoon } from '@components/atoms/Icon/IconMoon';
import { ButtonIconNotebook } from '@components/atoms/Icon/IconNotebook';
import { ButtonIconUser } from '@components/atoms/Icon/IconUser';
import { ButtonIconWorld } from '@components/atoms/Icon/IconWorld';
import { GeneralInfo } from '@components/features/GeneralInfo';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../../constants/path';
import { Avatar } from '../../atoms/Avatar';
import { ButtonIconChevronLeft } from '../../atoms/Icon/IconChevronLeft';
import { IconChevronRight } from '../../atoms/Icon/IconChevronRight';
import { ButtonIconFeedback } from '../../atoms/Icon/IconFeedback';
import { ButtonIconLogout } from '../../atoms/Icon/IconLogout';
import { ButtonIconSetting } from '../../atoms/Icon/IconSetting';
import { Step } from '../../atoms/Step';
import { Switch } from '../../atoms/Switch';
import { useAuth } from '../AuthProvider';
import { useMode } from '../DarkModeProvider';

const menuClass =
  'cursor-pointer px-2 py-1 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white';

export const PersonalMenu = () => {
  const [stepActive, setTabActive] = useState(0);
  const { logout } = useAuth();
  const { mode, toggleMode } = useMode();

  return (
    <Step active={stepActive}>
      <div className="w-[300px]">
        <Link
          to={PATH.Profile}
          className="py-2 px-3 border-gray-300 rounded border-b border-solid text-gray-900 dark:text-white dark:border-slate-700 pb-3 hover:bg-black hover:bg-opacity-20 flex items-center gap-3"
        >
          <Avatar />
          <h3 className="text-lg font-semibold">Đặng Thuyền Vương</h3>
        </Link>
        <div className="mt-3">
          <a
            onClick={(ev) => {
              ev.preventDefault();
              toggleMode();
            }}
            href="#"
            className={menuClass}
          >
            <ButtonIconMoon size={25} />
            <p className="flex-1">Dark mode</p>
            <Switch checked={mode === 'dark'} />
          </a>

          <div className={menuClass} onClick={() => setTabActive(2)}>
            <ButtonIconUser size={25} />
            <p className="flex-1">Cài đặt cá nhân</p>
          </div>
          <div className={menuClass} onClick={() => setTabActive(2)}>
            <ButtonIconFeedback size={25} />
            <p className="flex-1">Để lại góp ý</p>
            <IconChevronRight />
          </div>
          <a
            href=""
            className={menuClass}
            onClick={(ev) => {
              ev.preventDefault();
              setTabActive(1);
            }}
          >
            <ButtonIconSetting size={25} />
            <p className="flex-1">Cài đặt website</p>
            <IconChevronRight />
          </a>
          <a
            href=""
            className={menuClass}
            onClick={(ev) => {
              ev.preventDefault();
              logout();
            }}
          >
            <ButtonIconLogout size={25} />
            <p>Đăng xuất</p>
          </a>
          <GeneralInfo />
        </div>
      </div>
      <div className="w-[300px]">
        <h3 className="pt-2 px-2 dark:text-white text-lg font-bold flex gap-2 items-center">
          <ButtonIconChevronLeft size={25} onClick={() => setTabActive(0)} />
          Cài đặt
        </h3>
        <div className="mt-3">
          <a href="#" className={menuClass}>
            <ButtonIconWorld size={25} />
            <p className="flex-1"> Ngôn ngữ</p>
          </a>

          <a href="#" className={menuClass}>
            <ButtonIconLock size={25} />
            <p className="flex-1"> Kiểm tra quyền riêng tư</p>
          </a>
          <a href="#" className={menuClass}>
            <ButtonIconNotebook size={25} />
            <p className="flex-1"> Nhật ký hoạt động</p>
          </a>
        </div>
      </div>
      <div className="w-[300px]">
        <h3 className="pt-2 px-2 dark:text-white text-lg font-bold flex gap-2 items-center">
          <ButtonIconChevronLeft size={25} onClick={() => setTabActive(0)} />
          Trợ giúp & hỗ trợ
        </h3>
        <div className="mt-3">
          <a href="#" className={menuClass}>
            <ButtonIconHelpCircle size={25} />
            <p className="flex-1"> Trung tâm trợ giúp</p>
          </a>
          <a href="#" className={menuClass}>
            <ButtonIconEmail size={25} />
            <p className="flex-1"> Hộp thư hỗ trợ</p>
          </a>
          <a href="#" className={menuClass}>
            <ButtonIconBug size={25} />
            <p className="flex-1"> Báo cáo sự cố</p>
          </a>
        </div>
      </div>
    </Step>
  );
};
