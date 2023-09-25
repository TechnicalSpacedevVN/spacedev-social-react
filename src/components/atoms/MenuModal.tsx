import { Modal, ModalProps } from '@components/atoms/Modal';
import { IMenu, Menu } from './Menu';
import React, { useState } from 'react';

export interface MenuModal {
  menus: (IMenu & {
    children?: React.ReactNode;
  })[];
  menuTop?: React.ReactNode;
  modal?: ModalProps;
}
export const MenuModal: Atom<MenuModal> = (props) => {
  const [tabActive, setTabActive] = useState(0);

  return (
    <Modal {...props.modal}>
      <div className="w-[1300px] max-w-[calc(100vw-40px)] flex h-[700px]">
        <div className="w-menu px-1 flex flex-col gap-0.5 bg-menu">
          {props.menuTop}
          <Menu
            className="gap-0.5"
            menus={props.menus.map((e, i) => ({
              ...e,
              className:
                tabActive === i ? 'bg-gray-200 dark:bg-slate-700' : undefined,
              onClick: () => setTabActive(i),
            }))}
          />
        </div>
        <div className="flex-1 ">
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
