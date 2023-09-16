import { Badge } from '@components/atoms/Badge';
import { DropFile } from '@components/atoms/DropFile';
import { Dropdown } from '@components/atoms/Dropdown';
import { IconCircleCheck } from '@components/atoms/Icon/IconCircleCheck';
import { IconImage } from '@components/atoms/Icon/IconImage';
import { ButtonIconNarrowDown } from '@components/atoms/Icon/IconNarrowDown';
import { InfinityLoading } from '@components/atoms/InfinityLoading';
import { Menu } from '@components/atoms/Menu';
import { MessageInput } from '@components/atoms/MessageInput';
import { UploadFile, UploadfileRef } from '@components/atoms/UploadFile';
import { Emoji } from '@components/features/Emoji';
import { handleSelectEnd } from '@utils/element';
import { convertImageUrlToFile } from '@utils/file';
import { fakeApi, mockMessages, mockUploadImage } from '@utils/mock';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../../utils';
import { Avatar } from '../../atoms/Avatar';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon/Icon';
import { ButtonIconClose, IconClose } from '../../atoms/Icon/IconClose';
import { ButtoniconEmotion } from '../../atoms/Icon/IconEmotion';
import { ButtoniconGIF } from '../../atoms/Icon/IconGIF';
import { IconMaximize } from '../../atoms/Icon/IconMaximize';
import { IconMinimize } from '../../atoms/Icon/IconMinimize';
import { IconMinus } from '../../atoms/Icon/IconMinus';
import { IconPlus } from '../../atoms/Icon/IconPlus';
import { ButtonIconThreeDotAction } from '../../atoms/Icon/IconThreeDotAction';
import { ButtonIconUploadImage } from '../../atoms/Icon/IconUploadImage';
import { Gif } from '../Gif';
import { MessageItem } from './MessageItem';
import { ModalGroupChat } from './ModalGroupChat';

export const FloatingChat = () => {
  return createPortal(
    <div className="fixed bottom-0 right-3 flex gap-3 items-end pr-[var(--body-padding-right)]">
      <ChatScreen />
      {/* <ChatScreen /> */}
    </div>,
    document.body,
  );
};

const fullScreenClass = 'h-[700px] w-[600px]';
const isHideClass =
  '!h-[49px] !w-[400px] [&_.main]:hidden [&_.footer]:hidden cursor-pointer';

export const ChatScreen: FC = () => {
  const uploadFileRef = useRef<UploadfileRef>(null);
  const chatScreenRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLParagraphElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [openMember, setOpenMember] = useState(false);
  const [messages, setMessages] = useState(() => mockMessages(10));
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<{ path: string; id: string }[]>([]);
  const [openBackToBottom, setOpenBackToBottom] = useState(false);
  const imageWraperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatScreenRef.current?.scrollTo({
      top: chatScreenRef.current.scrollHeight,
    });
  }, []);
  useEffect(() => {
    imageWraperRef.current?.scrollBy({
      left: imageWraperRef.current.scrollWidth,
      behavior: 'smooth',
    });
  }, [images]);

  const uploadFile = useCallback(
    async (files: File[]) => {
      const imgs = [];
      for (const i in files) {
        const imgSrc = await mockUploadImage(files[i]);
        imgs.push(imgSrc);
      }

      setImages([...images, ...imgs]);
    },
    [images],
  );

  return (
    <>
      <ModalGroupChat open={openMember} onCancel={() => setOpenMember(false)} />
      <div
        className={cn(
          'transition-all duration-200 rounded-b-none shadow-[0_4px_5px_rgba(0,0,0,.5)] flex flex-col border border-solid border-b-0 border-gray-300 bg-white dark:bg-slate-900 dark:border-slate-700 text-gray-900 dark:text-white h-[500px] w-[400px] rounded-lg',
          {
            [fullScreenClass]: isFullScreen,
            [isHideClass]: isHide,
          },
        )}
        onClick={() => {
          if (!window?.getSelection()?.toString()) {
            inputRef.current?.focus();
          }
        }}
      >
        <div
          onClick={() => setIsHide(false)}
          className="[&_.actions]:hover:opacity-100 flex gap-3 items-center p-2 border-b border-solid border-gray-300 dark:border-slate-700"
        >
          <Badge count={10}>
            <Avatar border={{}} />
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
              onClick={(ev) => {
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

        <DropFile
          className="flex flex-col flex-1 h-1"
          title={{
            post: 'Thả bài viết vào đây',
            img: 'Thả link hình ảnh vào đây',
          }}
          includes={{
            img: async (value) => {
              const file = await convertImageUrlToFile(value);
              uploadFileRef.current?.trigger([file]);
            },
            post(value) {
              setMessages([
                ...messages,
                {
                  avatar: value.user,
                  content: value.content,
                  id: value.id,
                  myMessage: true,
                  url: value.url,
                } as any,
              ]);
            },
            files: (files) => {
              uploadFileRef.current?.trigger(files);
            },
            text: (text) => {
              console.log(inputRef.current, text);
              if (inputRef.current) {
                inputRef.current.innerHTML = text;
              }
            },
            url: (url) => {
              console.log(inputRef.current, url);
              if (inputRef.current) {
                inputRef.current.innerHTML = url;
              }
            },
          }}
        >
          <InfinityLoading
            ref={chatScreenRef}
            offset={50}
            haveNext
            placement="top"
            loading={loading}
            className="flex flex-col py-2 gap-2 flex-1 main overflow-auto"
            onScroll={(ev) => {
              let ele = ev.currentTarget;

              if (ele.scrollTop + ele.offsetHeight < ele.scrollHeight - 40) {
                setOpenBackToBottom(true);
              } else {
                setOpenBackToBottom(false);
              }
            }}
            onNext={async () => {
              setLoading(true);
              const res = await fakeApi(mockMessages);
              setMessages([...res, ...messages]);
              setLoading(false);
            }}
          >
            {/* <div className="flex flex-col text-center gap-2 items-center px-2">
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
          </div> */}
            {messages.map((e) => (
              <MessageItem
                key={e.id}
                content={e.content}
                myMessage={e.myMessage}
                img={e.img}
                url={e.url}
              />
            ))}
          </InfinityLoading>

          <div className="relative footer border-t border-solid border-gray-300 dark:border-slate-700 p-1">
            <ButtonIconNarrowDown
              onClick={() =>
                chatScreenRef.current?.scrollBy({
                  top: chatScreenRef.current.scrollHeight,
                  behavior: 'smooth',
                })
              }
              className={cn(
                'opacity-0 transition-all duration-200 absolute left-1/2 -top-10 -translate-x-1/2 dark:!bg-primary dark:hover:!bg-primary-700 animate-bounce',
                { 'opacity-100': openBackToBottom },
              )}
            />
            {images.length > 0 && (
              <div
                ref={imageWraperRef}
                className="overflow-x-auto mb-0.5 pb-0.5"
              >
                <div className="flex gap-1  w-fit">
                  <div
                    onClick={() => {
                      uploadFileRef.current?.trigger();
                    }}
                    className="border-base border dark:hover:bg-slate-800 select-none w-20 h-20 rounded overflow-hidden flex flex-col !text-opacity-60 text-black dark:text-white text-sm font-semibold gap-1 hover:bg-gray-100 items-center justify-center cursor-pointer"
                  >
                    <IconImage /> Thêm
                  </div>
                  {images.map((img) => (
                    <div
                      key={img.id}
                      className="border-base border relative select-none w-20 h-20 rounded overflow-hidden"
                    >
                      <img
                        src={img.path}
                        className="pointer-events-none w-full h-full object-cover"
                      />
                      <ButtonIconClose
                        size={14}
                        width={30}
                        height={30}
                        className="absolute top-1 right-1"
                        onClick={() =>
                          setImages(images.filter((e) => e.id !== img.id))
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <MessageInput
              onChange={(val) => setValue(val)}
              ref={inputRef}
              onEnter={() => {
                setValue('');
              }}
              onPasteFile={async (files) => {
                uploadFileRef.current?.trigger(files);
              }}
              placeholder="Viết tin nhắn..."
            />
          </div>
          <div className="flex items-center border-t dark:border-slate-700 border-gray-300 py-1 px-2">
            <div className="flex items-center">
              <UploadFile
                className="rounded-full"
                ref={uploadFileRef}
                multiple
                onChange={uploadFile}
              >
                <ButtonIconUploadImage transparent />
              </UploadFile>
              <Gif>
                <ButtoniconGIF transparent />
              </Gif>
              <Emoji>
                <ButtoniconEmotion transparent />
              </Emoji>
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
                autoClose
                content={
                  <Menu
                    menus={[
                      {
                        className: '[&_.icon]:!text-primary-500',
                        label: 'Nhấn Enter để gửi tin nhắn',
                        icon: <IconCircleCheck />,
                      },
                      {
                        label: 'Nhấn nút để gửi tin nhắn',
                        className: '[&:hover_.icon]:!text-primary-500',
                        icon: <IconCircleCheck />,
                      },
                    ]}
                  />
                }
              >
                <ButtonIconThreeDotAction transparent />
              </Dropdown>
            </div>
          </div>
        </DropFile>
      </div>
    </>
  );
};
