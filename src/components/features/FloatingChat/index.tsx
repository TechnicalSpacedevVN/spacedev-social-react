import { IconSpin } from '@components/Icon/IconSpin';
import { Badge } from '@components/atoms/Badge';
import { Dropdown } from '@components/atoms/Dropdown';
import { Menu } from '@components/atoms/Menu';
import { MessageInput } from '@components/atoms/MessageInput';
import { Modal, ModalProps } from '@components/atoms/Modal';
import { Tab } from '@components/atoms/Tab';
import { Tooltip } from '@components/atoms/Tooltip';
import { UserItem } from '@components/atoms/UserItem';
import { handleSelectEnd } from '@utils/handleSelectEnd';
import { FC, useEffect, useRef, useState } from 'react';
import { cn } from '../../../utils';
import { Icon } from '../../Icon/Icon';
import { IconClose } from '../../Icon/IconClose';
import { ButtoniconEmotion } from '../../Icon/IconEmotion';
import { ButtoniconGIF } from '../../Icon/IconGIF';
import { IconMaximize } from '../../Icon/IconMaximize';
import { IconMinimize } from '../../Icon/IconMinimize';
import { IconMinus } from '../../Icon/IconMinus';
import { IconPlus } from '../../Icon/IconPlus';
import { ButtonIconThreeDotAction } from '../../Icon/IconThreeDotAction';
import { ButtonIconUploadImage } from '../../Icon/IconUploadImage';
import { Avatar } from '../../atoms/Avatar';
import { Button } from '../../atoms/Button';

export const FloatingChat = () => {
  return (
    <div className="fixed bottom-0 right-3 flex gap-3 items-end">
      <ChatScreen />
      <ChatScreen />
    </div>
  );
};

const fullScreenClass = 'h-[600px] w-[550px]';
const isHideClass =
  'h-[49px] w-[200px] [&_.main]:hidden [&_.footer]:hidden cursor-pointer';
const anotherMessageclass =
  '[&_.message]:bg-gray-700 [&_.message]:rounded-l [&_.message]:rounded-r-2xl [&_.wrap]:items-start';
const myMessageClass =
  'flex-row-reverse text-right [&_.message]:bg-blue-700 [&_.avatar]:hidden [&_.message]:rounded-r [&_.message]:rounded-l-2xl [&_.wrap]:items-end';

export const ChatScreen: FC = () => {
  const chatScreenRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLParagraphElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [openMember, setOpenMember] = useState(false);

  useEffect(() => {
    chatScreenRef.current?.scrollTo({
      top: chatScreenRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <ModalGroupChat open={openMember} onCancel={() => setOpenMember(false)} />
      <div
        className={cn(
          'transition-all duration-200 rounded-b-none shadow-[0_4px_5px_rgba(0,0,0,.5)] flex flex-col border border-solid border-b-0 border-gray-300 bg-white dark:bg-slate-900 dark:border-slate-700 text-gray-900 dark:text-white h-[400px] w-[350px] rounded-lg overflow-hidden',
          {
            [fullScreenClass]: isFullScreen,
            [isHideClass]: isHide,
          },
        )}
      >
        <div
          onClick={() => setIsHide(false)}
          className="[&_.actions]:hover:opacity-100 flex gap-3 items-center p-2 border-b border-solid border-gray-300 dark:border-slate-700"
        >
          <Badge count={10}>
            <Avatar />
          </Badge>
          <h3 className="flex-1 font-bold text-sm">Katherine Jordan</h3>
          <div className="flex gap-0.5 items-center">
            <Dropdown
              placement="bottomRight"
              content={
                <Menu
                  menus={[
                    {
                      label: 'Mở trong màn hình lớn',
                    },
                    {
                      label: 'Xem trang cá nhân',
                    },
                    {
                      label: 'Thay đổi chủ đề',
                    },
                    {
                      line: true,
                    },
                    {
                      label: 'Nickname',
                    },
                    {
                      label: 'Mã hóa tin nhắn',
                    },
                    {
                      label: 'Thành viên nhóm',
                      onClick: () => setOpenMember(true),
                    },
                    {
                      label: 'Rời khỏi nhóm',
                    },
                    {
                      label: 'Cài đặt',
                    },
                  ]}
                />
              }
            >
              <ButtonIconThreeDotAction transparent />
            </Dropdown>
            <Icon transparent onClick={() => setIsFullScreen(!isFullScreen)}>
              {isFullScreen ? <IconMinimize /> : <IconMaximize />}
            </Icon>
            <Icon
              transparent
              onClick={(ev: any) => {
                ev.stopPropagation();
                setIsFullScreen(false);
                setIsHide(!isHide);
              }}
            >
              {isHide ? <IconPlus /> : <IconMinus />}
            </Icon>

            <IconClose size={17} transparent />
          </div>
        </div>
        <div
          ref={chatScreenRef}
          className="flex flex-col py-2 gap-2 flex-1 main overflow-auto"
        >
          <div className="flex flex-col text-center gap-2 items-center px-2">
            <Avatar size={50} />
            <div className="">
              <h3 className="font-bold text-sm">
                <Tooltip title="demo">Hunter Gonzales</Tooltip>
              </h3>
              <p className="text-sm text-black dark:text-white text-opacity-70">
                Lập trình viên
              </p>
            </div>
          </div>
          <div className="text-center my-4 dark:text-slate-300 text-gray-500 text-sm font-semibold text-opacity-90">
            Thứ sáu, 11/05/2023
          </div>
          <div className="flex justify-center my-3">
            <IconSpin />
          </div>
          <div
            className={cn('px-2 flex gap-2', {
              [myMessageClass]: false,
              [anotherMessageclass]: true,
            })}
          >
            <Avatar size={32} className="avatar" />
            <div className="wrap flex-1 inline-flex flex-col gap-[1px] max-w-[60%]">
              <p className="message text-sm text-white px-3 py-2 first-of-type:!rounded-t-2xl last-of-type:!rounded-b-2xl ">
                Xin chào! Tôi đang tìm
              </p>
              <p className="message text-sm text-white px-3 py-2 first-of-type:!rounded-t-2xl last-of-type:!rounded-b-2xl ">
                Chào bạn! Tất nhiên, tôi rất vui được giúp bạn. Bạn có một số sở
                thích cụ thể về mẫu mã, màu sắc hoặc thương hiệu nào không?
              </p>
              <p className="message text-sm text-white px-3 py-2 first-of-type:!rounded-t-2xl last-of-type:!rounded-b-2xl ">
                Tôi thích màu đen và thường mặc size S. Tôi cũng muốn có một áo
                thoáng mát cho mùa hè này.
              </p>
            </div>
          </div>
          <div
            className={cn('px-2 flex gap-2', {
              [myMessageClass]: true,
              [anotherMessageclass]: false,
            })}
          >
            <Avatar size={32} className="avatar" />
            <div className="wrap flex-1 inline-flex flex-col gap-[1px] max-w-[60%]">
              <p className="message text-sm text-white px-3 py-2 first-of-type:!rounded-t-2xl last-of-type:!rounded-b-2xl">
                Xin chào! Tôi đang tìm một
              </p>
              <p className="message text-sm text-white px-3 py-2 first-of-type:!rounded-t-2xl last-of-type:!rounded-b-2xl">
                Tôi cũng muốn có một áo
              </p>
            </div>
          </div>
          <div
            className={cn('px-2 flex gap-2', {
              [myMessageClass]: true,
              [anotherMessageclass]: false,
            })}
          >
            <Avatar size={32} className="avatar" />
            <div className="wrap flex-1 inline-flex flex-col gap-[1px] max-w-[60%]">
              <p className="message text-sm text-white px-3 py-2 first-of-type:!rounded-t-2xl last-of-type:!rounded-b-2xl">
                Xin chào! Tôi đang tìm một
              </p>
              <time className="mt-1 text-xs text-black text-opacity-80 dark:text-slate-400">
                Gửi 1 ngày trước
              </time>
            </div>
          </div>
        </div>
        <div className="footer border-t border-solid border-gray-300 dark:border-slate-700 p-1">
          <MessageInput
            onChange={(val) => setValue(val)}
            ref={inputRef}
            onEnter={(val) => {
              console.log(val);
              setValue('');
            }}
            placeholder="Viết tin nhắn..."
          />
        </div>
        <div className="flex items-center border-t dark:border-slate-700 border-gray-300 py-1 px-2">
          <div className="flex items-center">
            <ButtonIconUploadImage transparent />
            <ButtoniconGIF transparent />
            <ButtoniconEmotion transparent />
          </div>
          <div className="ml-auto flex items-center">
            <Button
              type={value ? 'primary' : 'default'}
              disabled={!value}
              className="rounded-full px-5"
              size="small"
              onClick={() => {
                console.log('send message');
                handleSelectEnd(inputRef.current as Node);
                setValue('');
                if (inputRef.current) {
                  inputRef.current.innerHTML = '';
                }
              }}
            >
              Gửi
            </Button>
            <Dropdown
              placement="topRight"
              content={
                <Menu
                  menus={[
                    {
                      label: 'Nhấn Enter để gửi tin nhắn',
                    },
                    {
                      label: 'Nhấn nút để gửi tin nhắn',
                    },
                  ]}
                />
              }
            >
              <ButtonIconThreeDotAction transparent />
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

interface ModalGroupChatProps extends ModalProps {}

const ModalGroupChat: Atom<ModalGroupChatProps> = ({ ...props }) => {
  return (
    <Modal
      {...props}
      overlayCloseable
      width={400}
      height={400}
      title="Thành viên nhóm"
    >
      <Tab
        className="pt-3 justify-around border-b dark:border-slate-700"
        itemClass="pb-3 flex-1"
        items={[
          {
            label: 'Thành viên',
            children: (
              <div className="flex flex-col gap-4 px-4 py-5 max-h-[400px] overflow-auto">
                {Array.from(new Array(10)).map((_, i) => (
                  <UserItem
                    key={i}
                    action={
                      <>
                        <Dropdown
                          placement="bottomRight"
                          content={
                            <Menu
                              menus={[
                                {
                                  label: 'Xem trang cá nhân',
                                },
                                {
                                  label: 'Nhắn tin',
                                },
                                {
                                  label: 'Mời khỏi nhóm',
                                },
                              ]}
                            />
                          }
                        >
                          <ButtonIconThreeDotAction transparent />
                        </Dropdown>
                      </>
                    }
                  />
                ))}
              </div>
            ),
          },
          { label: 'Ban quản trị' },
        ]}
      />
    </Modal>
  );
};
