import { Modal, ModalProps } from '@components/atoms/Modal';
import { IMenu, Menu } from './Menu';
import React, { useState } from 'react';
import { cn } from '@utils';

export interface MenuModal {
  menus: (IMenu & {
    children?: React.ReactNode;
  })[];
  sidebarTop?: React.ReactNode;
  sidebarBottom?: React.ReactNode;
  modal?: ModalProps;
}
export const MenuModal: Atom<MenuModal> = (props) => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <Modal {...props.modal}>
      <div className="w-[1300px] max-w-[calc(100vw-40px)] flex h-[700px]">
        <div className="w-menu px-1 flex flex-col gap-0.5 bg-menu">
          {props.sidebarTop}
          <Menu
            className="gap-0.5"
            menus={props.menus.map((e, i) => ({
              ...e,
              className:
                tabActive === i ? 'bg-gray-200 dark:bg-slate-700' : undefined,
              onClick: () => setTabActive(i),
            }))}
          />
          {props.sidebarBottom}
        </div>
        <div className="flex-1 w-1">
          {props.menus.map((e, i) => (
            <React.Fragment key={i}>
              {tabActive === i && e.children}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export interface SettingItemProps {
  title?: React.ReactNode;
  sub?: React.ReactNode;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  disabled?: boolean;
}
export const SettingItem: Atom<SettingItemProps> = ({
  className,
  title,
  sub,
  suffix,
  disabled,
  prefix,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn('flex items-center mt-4 gap-2', className, {
        ['opacity-50 pointer-events-none select-none']: disabled,
      })}
    >
      {prefix}
      <div className="flex-1">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-sub">{sub}</p>
      </div>
      {suffix}
    </div>
  );
};
