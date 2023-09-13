import { Avatar } from '@components/atoms/Avatar';
import { Button } from '@components/atoms/Button';
import { DropFile } from '@components/atoms/DropFile';
import { Dropdown } from '@components/atoms/Dropdown';
import { IconArrowDown } from '@components/atoms/Icon/IconArrow';
import { IconEye } from '@components/atoms/Icon/IconEye';
import { IconHacker } from '@components/atoms/Icon/IconHacker';
import { ButtonIconImage, IconImage } from '@components/atoms/Icon/IconImage';
import { IconLock } from '@components/atoms/Icon/IconLock';
import { IconPoll } from '@components/atoms/Icon/IconPoll';
import { IconUser } from '@components/atoms/Icon/IconUser';
import { ImageGrid } from '@components/atoms/ImageGrid';
import { Menu } from '@components/atoms/Menu';
import { Modal, ModalProps } from '@components/atoms/Modal';
import { UploadFile, UploadfileRef } from '@components/atoms/UploadFile';
import { EventName } from '@constants/eventName';
import { Event } from '@utils/event';
import { IPost, mockUploadImage } from '@utils/mock';
import { FC, useEffect, useRef, useState } from 'react';

export const NewPost = () => {
  const [open, setOpen] = useState(false);
  let [post, setPost] = useState<Partial<IPost>>({});

  useEffect(() => {
    let event = (newPost: EventHandlerType['CreatePost']) => {
      setPost((post: any) => ({
        ...post,
        ...newPost,
        images: [...(post?.images || []), ...(newPost?.images || [])],
      }));
      setOpen(true);
    };
    Event.on(EventName.CreatePost, event);

    return () => {
      Event.off(EventName.CreatePost, event);
    };
  }, []);
  return (
    <>
      <ModalCreate
        open={open}
        onCancel={() => setOpen(false)}
        width={608}
        post={post}
      />
      <div className="bg-white rounded-lg px-3 py-4 flex gap-4 dark:bg-slate-900">
        <Avatar />
        <div className="flex-1">
          <div className="bg-gray-100 rounded-full overflow-hidden dark:bg-slate-800">
            <input
              className="cursor-pointer dark:hover:bg-white hover:!bg-opacity-10 hover:bg-black bg-transparent outline-none text-sm px-3 leading-8 w-full"
              placeholder="Tell your friends about your thoughts..."
              onFocus={() => setOpen(true)}
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <div
              onClick={() => setOpen(true)}
              className="whitespace-nowrap flex bg-gray-100 rounded-full text-sm text-gray-900 items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              <div className="text-emerald-500">
                <IconImage />
              </div>
              Photo/video
            </div>
            <div
              onClick={() => setOpen(true)}
              className="whitespace-nowrap flex bg-gray-100 rounded-full text-sm text-gray-900 items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              <div className="text-orange-500">
                <IconPoll />
              </div>
              Poll
            </div>
            {/* <div
              onClick={() => setOpen(true)}
              className="whitespace-nowrap flex bg-gray-100 rounded-full text-sm text-gray-900 items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              <div className="text-blue-500">
                <IconCalendar />
              </div>
              Schedule
            </div>
            <div
              onClick={() => setOpen(true)}
              className="whitespace-nowrap flex bg-gray-100 rounded-full text-sm text-gray-900 items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              <div className="text-red-500">
                <IconVideo />
              </div>
              Live video
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
const PostVisibility = [
  { label: 'Công khai', icon: <IconEye /> },
  { label: 'Chỉ mình tôi', icon: <IconLock /> },
  { label: 'Chỉ bạn bè tôi', icon: <IconUser /> },
  { label: 'Ẩn danh', icon: <IconHacker /> },
];

export interface ModalCreateProps extends ModalProps {
  post?: Partial<IPost>;
}

const ModalCreate: FC<ModalCreateProps> = ({ post, ...props }) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<string[]>([]);
  const uploadfileRef = useRef<UploadfileRef>(null);
  const [value, setValue] = useState('');
  const [visibility, setVisibility] = useState(PostVisibility[0]);
  useEffect(() => {
    if (post?.images) {
      setImages(post.images || []);
    }
  }, [post]);
  useEffect(() => {
    if (props.open) {
      inputRef.current?.focus();
    }
  }, [props.open]);
  const disableBtn = !value && images.length === 0;
  return (
    <Modal
      {...props}
      title="Tạo bài viết"
      className="min-h-[500px]"
      keyboard={false}
      overlayCloseable={false}
    >
      <div className="p-3 flex flex-col flex-1">
        <div className="flex gap-3">
          <Avatar size={40} />
          <div className="flex-1">
            <h3 className="font-bold">Charles Schwartz</h3>
            <Dropdown
              getPopupContainer={(parentNode) => parentNode}
              autoClose
              content={
                <Menu
                  onChange={(menu) =>
                    setVisibility(menu as (typeof PostVisibility)[0])
                  }
                  menus={PostVisibility}
                />
              }
            >
              <Button
                iconPrefix={visibility.icon}
                iconSuffix={<IconArrowDown />}
                size="small"
                className="flex items-center"
              >
                {visibility.label}
              </Button>
            </Dropdown>
          </div>
          <div>
            <Button>Viết nội dung với AI</Button>
          </div>
        </div>
        <DropFile
          className="flex-1"
          backdropClassName="bg-transparent"
          includes={{
            files: async (files) => {
              uploadfileRef.current?.trigger(files);
            },
          }}
        >
          <div className="max-h-[500px] overflow-auto ">
            <div
              ref={inputRef}
              placeholder="Bạn đang muốn nói điều gì với những người bạn quan tâm...."
              className="block overflow-hidden stext-xl mb-2 bg-transparent outline-none w-full resize-none dark:after:text-white after:text-black after:!text-opacity-60 mt-3 after:empty:content-[attr(placeholder)] after:absolute after:-translate-y-1/2 after:top-1/2 relative"
              spellCheck={false}
              // onChange={(ev) => setValue(ev.target.value)}
              contentEditable
              onInput={(ev) => {
                if (!ev.currentTarget.innerText.trim()) {
                  ev.currentTarget.innerHTML = '';
                }
                setValue(ev.currentTarget.innerHTML);
              }}
            ></div>
            <ImageGrid
              imgClassName="object-contain"
              images={images}
              onRemove={setImages}
            />
          </div>
        </DropFile>
        <div className="flex gap-2 px-2 items-center mt-2 mb-2">
          <p className="text-sm">Thêm nội dung cho bài viết?</p>
          <UploadFile
            onChange={async (files) => {
              const imgs: string[] = [];

              for (const i in files) {
                const imgSrc = await mockUploadImage(files[i]);
                imgs.push(imgSrc.path);
              }
              setImages([...images, ...imgs]);
            }}
            ref={uploadfileRef}
          >
            <ButtonIconImage />
          </UploadFile>
        </div>
        <div>
          <Button
            className="w-full"
            disabled={disableBtn}
            type={!disableBtn ? 'primary' : 'default'}
            loading
          >
            Viết bài
          </Button>
        </div>
      </div>
    </Modal>
  );
};
