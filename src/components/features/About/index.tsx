import { IconLock } from "@components/atoms/Icon/IconLock";
import { IconSetting } from "@components/atoms/Icon/IconSetting";
import { IconUserGroup } from "@components/atoms/Icon/IconUserGroup";
import { FC } from "react";
import { IconApp } from "../../atoms/Icon/IconApp";
import { ButtonIconCamera } from "../../atoms/Icon/IconCamera";
import { IconNotification } from "../../atoms/Icon/IconNotification";
import { IconUser } from "../../atoms/Icon/IconUser";
import { IconWorld } from "../../atoms/Icon/IconWorld";
import { Avatar } from "../../atoms/Avatar";
import { Modal, ModalProps } from "../../atoms/Modal";

export const ModalAbout: FC<ModalProps> = (props) => {
  return (
    <Modal {...props} overlayCloseable title="Tài khoản">
      <div className="w-[900px] flex min-h-[700px]">
        <div className="bg-gray-50 w-[250px] dark:bg-slate-800 dark:bg-opacity-50">
          <h2 className="font-semibold text-md p-3">Tài khoản</h2>
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
          <div className="px-0.5 flex flex-col gap-0.5 mt-3">
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-black hover:bg-opacity-10 py-1.5 rounded px-2.5"
            >
              <IconUser />
              <span className="text-sm">Tài khoản</span>
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-black hover:bg-opacity-10 py-1.5 rounded px-2.5"
            >
              <IconLock />
              <span className="text-sm">Bảo mật</span>
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-black hover:bg-opacity-10 py-1.5 rounded px-2.5"
            >
              <IconSetting />
              <span className="text-sm">Cài đặt & quyền riêng tư</span>
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-black hover:bg-opacity-10 py-1.5 rounded px-2.5"
            >
              <IconNotification />
              <span className="text-sm">Cài đặt thông báo</span>
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-black hover:bg-opacity-10 py-1.5 rounded px-2.5"
            >
              <IconUserGroup />
              <span className="text-sm">Bạn bè và theo dõi</span>
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-black hover:bg-opacity-10 py-1.5 rounded px-2.5"
            >
              <IconApp />
              <span className="text-sm">Nội dung</span>
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-black hover:bg-opacity-10 py-1.5 rounded px-2.5"
            >
              <IconWorld />
              <span className="text-sm">Ngôn ngữ và quốc gia</span>
            </a>
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
              <input
                type="text"
                placeholder="Họ và tên"
                value="Đặng Thuyền Vương"
                className="outline-none bg-gray-100 px-2 rounded border border-solid border-gray-300 text-sm py-1 w-60 dark:bg-slate-800 dark:border-slate-700"
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
