import { Avatar } from '@components/atoms/Avatar';
import { Button } from '@components/atoms/Button';
import { Dropdown } from '@components/atoms/Dropdown';
import { IconApplication } from '@components/atoms/Icon/IconApplication';
import { IconArticle } from '@components/atoms/Icon/IconArticle';
import { IconAutomation } from '@components/atoms/Icon/IconAutomation';
import { IconChevronDown } from '@components/atoms/Icon/IconChevronDown';
import { IconEye } from '@components/atoms/Icon/IconEye';
import { IconLock } from '@components/atoms/Icon/IconLock';
import { IconLogin } from '@components/atoms/Icon/IconLogin';
import { IconMoney } from '@components/atoms/Icon/IconMoney';
import { IconUser } from '@components/atoms/Icon/IconUser';
import { IconUserGroup } from '@components/atoms/Icon/IconUserGroup';
import { Menu } from '@components/atoms/Menu';
import { Modal, ModalProps } from '@components/atoms/Modal';
import { useTranslate } from '@components/atoms/TranslateProvider';
import { useState } from 'react';
import { MenuBillingSubscription } from './MenuBillingSubscription';
import { MenuBot } from './MenuBot';
import { MenuConnection } from './MenuConnection';
import { MenuGeneral } from './MenuGeneral';
import { MenuMember } from './MenuMember';
import { MenuSecurity } from './MenuSecurity';

export interface ModalCreateNewOrganizationProps extends ModalProps {}

export const ModalCreateNewOrganization: Atom<
  ModalCreateNewOrganizationProps
> = ({ ...props }) => {
  const { t } = useTranslate();
  const [tabActive, setTabActive] = useState(0);
  return (
    <Modal
      {...props}
      title={t('Create new organization')}
      overlayCloseable={false}
      keyboard={false}
    >
      <div className="w-[1300px] max-w-[calc(100vw-40px)] flex h-[700px]">
        <div className="w-menu px-1 flex flex-col gap-0.5 bg-menu">
          <h2 className="font-semibold text-md p-3">{t('Organization')}</h2>
          <div className="px-3">
            <div className="flex gap-2 items-center">
              <Avatar size={40} />
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
          <Menu
            className="gap-0.5 mt-4"
            menus={[
              {
                label: t('General'),
                icon: <IconUser />,
                className:
                  tabActive === 0 ? 'bg-gray-200 dark:bg-slate-700' : undefined,
                onClick: () => setTabActive(0),
              },
              {
                label: t('Security'),
                icon: <IconLock />,
                className:
                  tabActive === 1 ? 'bg-gray-200 dark:bg-slate-700' : undefined,
                onClick: () => setTabActive(1),
              },
              {
                label: t('Content'),
                icon: <IconArticle />,
                className:
                  tabActive === 7 ? 'bg-gray-200 dark:bg-slate-700' : undefined,
                onClick: () => setTabActive(7),
              },
              {
                label: t('Member'),
                icon: <IconUserGroup />,
                className:
                  tabActive === 2 ? 'bg-gray-200 dark:bg-slate-700' : undefined,
                onClick: () => setTabActive(2),
              },
              {
                label: t('Billing & Subscription'),
                icon: <IconMoney />,
                className:
                  tabActive === 3 ? 'bg-gray-200 dark:bg-slate-700' : undefined,
                onClick: () => setTabActive(3),
              },
              {
                label: t('Bot Automation'),
                icon: <IconAutomation />,
                className:
                  tabActive === 4 ? 'bg-gray-200 dark:bg-slate-700' : undefined,
                onClick: () => setTabActive(4),
              },
              {
                label: t('Connection'),
                icon: <IconApplication />,
                className:
                  tabActive === 5 ? 'bg-gray-200 dark:bg-slate-700' : undefined,
                onClick: () => setTabActive(5),
              },
              {
                label: t('Phương thức đăng nhập'),
                icon: <IconLogin />,
                className:
                  tabActive === 6 ? 'bg-gray-200 dark:bg-slate-700' : undefined,
                onClick: () => setTabActive(6),
              },
            ]}
          />
        </div>
        <div className="flex-1 ">
          {tabActive === 0 && <MenuGeneral />}
          {tabActive === 1 && <MenuSecurity />}
          {tabActive === 2 && <MenuMember />}
          {tabActive === 3 && <MenuBillingSubscription />}
          {tabActive === 4 && <MenuBot />}
          {tabActive === 5 && <MenuConnection />}
        </div>
      </div>
    </Modal>
  );
};
