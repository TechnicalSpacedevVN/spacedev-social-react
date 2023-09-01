import { FC } from 'react';
import { IconSpin } from './Icon/IconSpin';
import { Avatar } from './atoms/Avatar';
import { BorderGradient } from './atoms/BorderGradient';
import { Button } from './atoms/Button';
import { Modal } from './atoms/Modal';
import { Tab } from './atoms/Tab';

export const ModalFriends: FC<{ open?: boolean; onCancel?: () => void }> = (
  props,
) => {
  return (
    <Modal
      title="Friends"
      onCancel={props.onCancel}
      open={props.open}
      overlayCloseable
      width={500}
    >
      <Tab
        className="border-b dark:border-slate-700 w-full"
        itemClass="pb-4 pt-4"
        menus={[{ label: 'Bạn bè' }, { label: 'Đang theo dõi' }]}
      />
      <div className="px-3 flex flex-col gap-3 py-3 max-h-[400px] overflow-auto">
        {Array.from(new Array(10)).map((_, i) => (
          <div key={i} className="flex gap-2 items-center">
            <BorderGradient className="rounded-full">
              <div className="border-2 border-solid border-white rounded-full">
                <Avatar size={40} />
              </div>
            </BorderGradient>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Bertie Chapman
              </h3>
              <p className="text-xs text-gray-500">Shawn Flowers</p>
            </div>
            <Button className="ml-auto">Remove</Button>
          </div>
        ))}
        <div className="flex justify-center my-3">
          <IconSpin />
        </div>
      </div>
    </Modal>
  );
};
