import { Avatar } from '@components/atoms/Avatar';
import { Button } from '@components/atoms/Button';
import { setDropFileData } from '@components/atoms/DropFile';
import { Dropdown } from '@components/atoms/Dropdown';
import { IconArchive } from '@components/atoms/Icon/IconArchive';
import { IconBellOff } from '@components/atoms/Icon/IconBellOf';
import { IconBookmark } from '@components/atoms/Icon/IconBookmark';
import { ButtonIconClose } from '@components/atoms/Icon/IconClose';
import { IconComment } from '@components/atoms/Icon/IconComment';
import { IconExclamation } from '@components/atoms/Icon/IconExclamation';
import { IconEyeClose } from '@components/atoms/Icon/IconEyeClose';
import { ButtonIconHeart } from '@components/atoms/Icon/IconHeart';
import { ButtonIconHeartFill } from '@components/atoms/Icon/IconHeartFill';
import { IconPen } from '@components/atoms/Icon/IconPen';
import { IconShare } from '@components/atoms/Icon/IconShare';
import { IconSpin } from '@components/atoms/Icon/IconSpin';
import { ButtonIconThreeDotAction } from '@components/atoms/Icon/IconThreeDotAction';
import { IconTrash } from '@components/atoms/Icon/IconTrash';
import { Menu } from '@components/atoms/Menu';
import { MessageInput } from '@components/atoms/MessageInput';
import { Modal, ModalProps } from '@components/atoms/Modal';
import { Tag } from '@components/atoms/Tag';
import { PATH } from '@constants/path';
import { handleSelectEnd, scollToElement } from '@utils';
import { IComment, IPost, mockPost } from '@utils/mock';
import moment from 'moment';
import { FC, useMemo, useRef, useState } from 'react';
import { generatePath } from 'react-router-dom';

const PostMenu = () => {
  return (
    <Dropdown
      autoClose
      placement="bottomRight"
      content={
        <Menu
          menus={[
            { label: 'Đưa bài viết vào thùng rác', icon: <IconTrash /> },
            { label: 'Chỉnh sửa', icon: <IconPen /> },
            { label: 'Lưu trữ', icon: <IconArchive /> },
            { label: 'Báo cáo bài viết', icon: <IconExclamation /> },
            { label: 'Ẩn bài viết', icon: <IconEyeClose /> },
            { label: 'Tắt thông báo về bài viết này', icon: <IconBellOff /> },
          ]}
        />
      }
    >
      <ButtonIconThreeDotAction transparent />
    </Dropdown>
  );
};
export const Post = () => {
  const [open, setOpen] = useState(false);
  const [post] = useState(mockPost);
  const id = useMemo(() => Math.round(Math.random() * 10000000).toString(), []);
  return (
    <>
      <ModalDetail open={open} onCancel={() => setOpen(false)} post={post} />
      <div
        draggable
        onDragStart={(ev) => {
          const img = document.createElement('img');
          img.src = post.image;
          ev.dataTransfer.setDragImage(img, img.width / 2, img.height / 2);
          setDropFileData(ev, 'post', {
            content: post.content,
            id: id,
            url: {
              image: post.image,
              link: generatePath(PATH.PostDetail, { id }),
              title: post.content,
            },
            user: post.user.avatar,
          });
        }}
        className="rounded-lg bg-white pb-4 dark:bg-slate-900"
      >
        <div className="flex items-center gap-2 p-4">
          <Avatar src={post.user.avatar} />
          <div className="flex-1 -mt-1">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                {post.user.fullName}
              </h4>
              -
              <time className=" text-sm !text-opacity-70 text-black dark:text-white">
                {moment(post.createdAt).fromNow()}
              </time>
            </div>
            <p className="text-gray-500 text-xs">
              {post.city}, {post.country}
            </p>
          </div>
          <div>
            <PostMenu />
          </div>
        </div>
        <div className="p-1 overflow-hidden flex items-center">
          <a
            className="w-full select-none"
            href="#"
            onClick={(ev) => {
              ev.preventDefault();
              setOpen(true);
            }}
            onDragStart={(ev) => {
              setDropFileData(ev, 'img', post.image);
            }}
          >
            <img
              draggable
              className="w-full h-full object-cover"
              src={post.image}
            />
          </a>
        </div>
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-0.5 ">
            <Tag className="flex items-center text-sm">
              <IconComment />
              {post.commentCount}
            </Tag>
            <Tag className="flex items-center text-sm">
              <IconShare />
              {post.shareCount}
            </Tag>
            {post.like ? (
              <ButtonIconHeartFill transparent className="!text-red-600" />
            ) : (
              <ButtonIconHeart transparent />
            )}
            <div className="flex gap-2 items-center">
              <div>
                <Avatar
                  size={27}
                  className=" !shadow-[0_0_0_2px_white] !shadow-white dark:!shadow-slate-950"
                />
              </div>
              <div className="-ml-2.5">
                <Avatar
                  size={27}
                  className=" !shadow-[0_0_0_2px_white] !shadow-white dark:!shadow-slate-950"
                />
              </div>
              <div className="-ml-2.5">
                <Avatar
                  size={27}
                  className=" !shadow-[0_0_0_2px_white] !shadow-white dark:!shadow-slate-950"
                />
              </div>
              <p className="text-sm">
                Thả tim bởi{' '}
                <b>
                  <a href="#">Sue Franklin</a>
                </b>{' '}
                và{' '}
                <b>
                  <a href="#">{post.heartCount} người khác</a>
                </b>
              </p>
            </div>
          </div>
          <div>
            <IconBookmark />
          </div>
        </div>
        <p className="px-5 text-sm">
          <b>{post.user.fullName}</b>&nbsp;{post.content}
        </p>
      </div>
    </>
  );
};

export interface ModelDetailProps extends ModalProps {
  post: IPost;
}

const ModalDetail: FC<ModelDetailProps> = ({ post, ...props }) => {
  const [value, setValue] = useState('');
  return (
    <Modal
      {...props}
      className="w-full h-full  m-3"
      hideIconClose
      overlayCloseable={false}
      height={700}
      width={1000}
      keyboard={false}
    >
      <div className="flex h-full">
        <div className="flex-1 w-1 bg-black items-center flex">
          <img className="object-contain" src={post.image} />
        </div>
        <div className="flex-1 w-1 flex flex-col">
          <div className="flex gap-2 p-3 border-b border-solid border-gray-300 dark:border-slate-700">
            <Avatar size={40} src={post.user.avatar} />
            <div className="flex flex-col flex-1">
              <h3 className="text-sm font-bold">{post.user.fullName}</h3>
              <time className="text-gray-500 text-xs ">
                {moment(post.createdAt).fromNow()}
              </time>
            </div>
            <div className="flex items-center">
              {post.like ? (
                <ButtonIconHeartFill transparent className="!text-red-600" />
              ) : (
                <ButtonIconHeart />
              )}
              <IconShare />
              <IconBookmark />
              <PostMenu />
              <ButtonIconClose transparent onClick={props.onCancel} />
            </div>
          </div>
          <div className="flex-1 py-2 overflow-auto">
            {post.comments.map((comment) => (
              <UserComment key={comment.id} loadMore comment={comment} />
            ))}

            <div className="flex justify-center my-3">
              <IconSpin />
            </div>
          </div>
          <div className="">
            <div className="border-t border-solid border-gray-300 flex dark:border-slate-700">
              <input
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
                placeholder="Thêm bình luận..."
                className="outline-0 text-sm px-2 py-3 flex-1 bg-transparent"
              />
              <Button
                type={value ? 'primary' : 'default'}
                disabled={!value}
                className="rounded-none !px-10"
              >
                Gửi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export interface UserCommentProps {
  loadMore?: boolean;
  isReply?: boolean;
  comment: IComment;
}
const UserComment: Atom<UserCommentProps> = ({
  loadMore,
  isReply = true,
  comment,
}) => {
  const [openReply, setOpenReply] = useState(false);
  const inputRef = useRef<HTMLParagraphElement>(null);

  // const onSendMessage = () => {
  //   if (inputRef.current) {
  //     inputRef.current.innerHTML = '';
  //   }
  //   setValue('');
  // };

  return (
    <>
      <div className="flex gap-3 px-3 py-2 [&_.icon-action]:hover:opacity-100">
        <Avatar />
        <div className="flex-1">
          <div className="text-sm">
            <b> {comment.user.fullName}</b> <span>{comment.content}</span>
          </div>
          <div className="flex gap-2 text-xs items-center">
            <time className="">{moment(comment.createdAt).fromNow()}</time>
            <a
              href="#"
              className="font-bold text-opacity-50 text-black hover:text-opacity-100 dark:text-white"
            >
              2 Thích
            </a>
            <a
              href="#"
              className="font-bold text-opacity-50 text-black hover:text-opacity-100 dark:text-white"
              onClick={(ev) => {
                ev.preventDefault();
                setOpenReply(!openReply);
                setTimeout(() => {
                  if (inputRef.current) {
                    scollToElement(inputRef.current);
                    handleSelectEnd(inputRef.current);
                  }
                }, 0);
              }}
            >
              Trả lời
            </a>

            <Dropdown
              autoClose
              placement="bottomRight"
              content={
                <Menu
                  menus={[
                    { label: 'Xóa' },
                    { label: 'Chỉnh sửa' },
                    { label: 'Báo cáo' },
                    { label: 'Ẩn bình luận' },
                  ]}
                />
              }
            >
              <ButtonIconThreeDotAction
                transparent
                className="ml-4 cursor-pointer icon-action opacity-0"
              />
            </Dropdown>
          </div>
          {loadMore && (
            <div className="text-gray-400 flex items-baseline gap-2 cursor-pointer text-xs font-bold mt-1 before:content-normal before:block before:w-8 before:h-[1px] before:bg-gray-400">
              Bình luận ({comment.replyCount})
            </div>
          )}
        </div>
        <ButtonIconHeart className="icon-action opacity-0" />
      </div>
      <div className="px-2 pl-10">
        {comment.replies?.map((co, i) => (
          <UserComment isReply={false} key={i} comment={co as IComment} />
        ))}
        {isReply && openReply && (
          <div className="ml-3 flex gap-3 items-center">
            <Avatar />
            <MessageInput
              className="border-transparent border focus:border-blue-500 focus:border-solid focus:caret-primary-500"
              onChange={(val) => {
                console.log(val);
              }}
              ref={inputRef}
              placeholder="Thêm bình luận...."
              onEnter={() => {
                console.log('send reply');
              }}
              clearWhenEnter={false}
              allowShiftEnter={false}
            />
          </div>
        )}
      </div>
    </>
  );
};
