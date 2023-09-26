import { Avatar } from '@components/atoms/Avatar';
import { Button } from '@components/atoms/Button';
import { Dropdown } from '@components/atoms/Dropdown';
import { IconApplication } from '@components/atoms/Icon/IconApplication';
import { IconArticle } from '@components/atoms/Icon/IconArticle';
import { IconAutomation } from '@components/atoms/Icon/IconAutomation';
import { IconChevronDown } from '@components/atoms/Icon/IconChevronDown';
import { IconEye } from '@components/atoms/Icon/IconEye';
import { IconLock } from '@components/atoms/Icon/IconLock';
import { IconMoney } from '@components/atoms/Icon/IconMoney';
import { IconUser } from '@components/atoms/Icon/IconUser';
import { IconUserGroup } from '@components/atoms/Icon/IconUserGroup';
import { Menu } from '@components/atoms/Menu';
import { MenuModal } from '@components/atoms/MenuModal';
import { ModalProps } from '@components/atoms/Modal';
import { useTranslate } from '@components/atoms/TranslateProvider';
import { MenuBillingSubscription } from './MenuBillingSubscription';
import { MenuBot } from './MenuBot';
import { MenuConnection } from './MenuConnection';
import { MenuGeneral } from './MenuGeneral';
import { MenuGroup } from './MenuGroup';
import { MenuMember } from './MenuMember';
import { MenuSecurity } from './MenuSecurity';
import { IconSetting } from '@components/atoms/Icon/IconSetting';

export interface ModalCreateNewOrganizationProps extends ModalProps {}

export const ModalCreateNewOrganization: Atom<
  ModalCreateNewOrganizationProps
> = ({ ...props }) => {
  const { t } = useTranslate();

  return (
    <MenuModal
      modal={{
        ...props,
        title: t('Create new organization'),
        overlayCloseable: false,
        keyboard: false,
      }}
      sidebarBottom={
        <div className="mt-auto p-2">
          <div>
            <h3 className="font-semibold py-3 !text-opacity-50 dark:text-white text-black text-xs uppercase">
              {t('Disk usage')}
            </h3>
            <div className="group ">
              <div className="flex justify-between mb-1 ">
                <span className="text-xs font-medium text-green-700 dark:text-white">
                  {t('Database')}
                </span>
                <span className="text-xs font-medium text-green-700 dark:text-white">
                  <span className="group-hover:inline-block hidden">300MB</span>
                  <span className="group-hover:hidden inline-block">30%</span> /
                  1GB
                </span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <div
                  className="bg-green-600 h-1.5 rounded-full"
                  style={{ width: '30%' }}
                />
              </div>
            </div>
            <div className="group mt-2">
              <div className="flex justify-between ">
                <span className="text-xs font-medium text-orange-700 dark:text-white">
                  {t('Storage')}
                </span>
                <span className="text-xs font-medium text-orange-700 dark:text-white">
                  <span className="group-hover:inline-block hidden text-orange-600">
                    17GB
                  </span>
                  <span className="group-hover:hidden inline-block text-orange-600">
                    70%
                  </span>{' '}
                  / 19GB
                </span>
              </div>
              <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <div
                  className="bg-orange-600 h-1.5 rounded-full"
                  style={{ width: '70%' }}
                />
              </div>
            </div>
          </div>
        </div>
      }
      sidebarTop={
        <div className="mb-4">
          <h2 className="font-semibold p-3 !text-opacity-50 dark:text-white text-black text-xs uppercase">
            {t('Organization')}
          </h2>
          <div className="px-3">
            <div className="flex gap-2 items-center">
              <Avatar size={50} />
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-sm font-bold ">Đặng Thuyền Vương</h3>
                <Dropdown
                  content={
                    <Menu
                      menus={[
                        {
                          label: t('Public'),
                          icon: <IconEye />,
                          description: t(
                            `Anyone can see who's in the group and what they post.`,
                          ),
                        },
                        {
                          label: t('Private'),
                          icon: <IconLock />,
                          description: t(
                            `Only members can see who's in the group and what they post.`,
                          ),
                        },
                      ]}
                    />
                  }
                >
                  <Button size="small" iconSuffix={<IconChevronDown />}>
                    Công khai
                  </Button>
                </Dropdown>
              </div>
            </div>
            <p className="text-sub mt-2">
              Nền tảng học lập trình online kết hợp mạng xã hội quản lý học viên
              chuyên nghiệp
            </p>
          </div>
        </div>
      }
      menus={[
        {
          label: t('General'),
          icon: <IconSetting />,
          children: <MenuGeneral />,
        },
        {
          label: t('Security'),
          icon: <IconLock />,
          children: <MenuSecurity />,
        },
        {
          label: t('Content'),
          icon: <IconArticle />,
        },
        {
          label: t('Member'),
          icon: <IconUser circle />,
          children: <MenuMember />,
        },
        {
          label: t('Group management'),
          icon: <IconUserGroup />,
          children: <MenuGroup />,
        },
        { group: 'System' },
        {
          label: t('Bot Automation'),
          icon: <IconAutomation />,
          children: <MenuBot />,
        },
        {
          label: t('Connection'),
          icon: <IconApplication />,
          children: <MenuConnection />,
        },
        {
          label: t('Billing & Subscription'),
          icon: <IconMoney />,
          children: <MenuBillingSubscription />,
        },
      ]}
    />
  );
};
