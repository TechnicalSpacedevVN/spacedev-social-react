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
      menuTop={
        <div className="mb-4">
          <h2 className="font-semibold p-3 !text-opacity-50 dark:text-white text-black text-xs uppercase">
            {t('Organization')}
          </h2>
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
            <p className="text-sub mt-2 !text-xs">
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
          label: t('Group'),
          icon: <IconUserGroup />,
          children: <MenuGroup />,
        },
        { group: 'Hệ thống' },
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
        // {
        //   label: t('Phương thức đăng nhập'),
        //   icon: <IconLogin />,
        //   children: (
        //     <div className="py-4 px-10">
        //       <Tab
        //         className="border-b border-base"
        //         itemClass="px-2"
        //         items={[{ label: 'Provider' }, { label: 'Email template' }]}
        //       />
        //     </div>
        //   ),
        // },
      ]}
    />
  );

  // return (
  //   <Modal
  //     {...props}
  //     title={t('Create new organization')}
  //     overlayCloseable={false}
  //     keyboard={false}
  //   >
  //     <div className="w-[1300px] max-w-[calc(100vw-40px)] flex h-[700px]">
  //       <div className="w-menu px-1 flex flex-col gap-0.5 bg-menu">
  //         <h2 className="font-semibold text-md p-3">{t('Organization')}</h2>
  //         <div className="px-3">
  //           <div className="flex gap-2 items-center">
  //             <Avatar size={40} />
  //             <div className="flex-1 flex flex-col gap-1">
  //               <h3 className="text-sm font-bold ">Đặng Thuyền Vương</h3>
  //               <Dropdown
  //                 content={
  //                   <Menu
  //                     menus={[
  //                       {
  //                         label: t('Public'),
  //                         icon: <IconEye />,
  //                         description: t(
  //                           `Anyone can see who's in the group and what they post.`,
  //                         ),
  //                       },
  //                       {
  //                         label: t('Private'),
  //                         icon: <IconLock />,
  //                         description: t(
  //                           `Only members can see who's in the group and what they post.`,
  //                         ),
  //                       },
  //                     ]}
  //                   />
  //                 }
  //               >
  //                 <Button size="small" iconSuffix={<IconChevronDown />}>
  //                   Công khai
  //                 </Button>
  //               </Dropdown>
  //             </div>
  //           </div>
  //           <p className="text-sub mt-2">
  //             Nền tảng học lập trình online kết hợp mạng xã hội quản lý học viên
  //             chuyên nghiệp
  //           </p>
  //         </div>
  //         <OrgMenu onChange={setTabActive} />
  //       </div>
  //       <div className="flex-1 ">
  //         {tabActive === 0 && <MenuGeneral />}
  //         {tabActive === 1 && <MenuSecurity />}
  //         {tabActive === 2 && <MenuMember />}
  //         {tabActive === 3 && <MenuBillingSubscription />}
  //         {tabActive === 4 && <MenuBot />}
  //         {tabActive === 5 && <MenuConnection />}
  //       </div>
  //     </div>
  //   </Modal>
  // );
};
