import { FC, useState } from "react";
import { IconArchive } from "./Icon/IconArchive";
import { IconBellOff } from "./Icon/IconBellOf";
import { IconBookmark } from "./Icon/IconBookmark";
import { IconComment } from "./Icon/IconComment";
import { IconExclamation } from "./Icon/IconExclamation";
import { IconEyeClose } from "./Icon/IconEyeClose";
import { ButtonIconHeart } from "./Icon/IconHeart";
import { IconPen } from "./Icon/IconPen";
import { IconShare } from "./Icon/IconShare";
import { IconSpin } from "./Icon/IconSpin";
import { ButtonIconThreeDotAction } from "./Icon/IconThreeDotAction";
import { IconTrash } from "./Icon/IconTrash";
import { Avatar } from "./atoms/Avatar";
import { Button } from "./atoms/Button";
import { Dropdown } from "./atoms/Dropdown";
import { Input } from "./atoms/Input";
import { Menu } from "./atoms/Menu";
import { Modal, ModalProps } from "./atoms/Modal";
import { Tag } from "./atoms/Tag";
import { ButtonIconHeartFill } from "./Icon/IconHeartFill";

const PostMenu = () => {
  return (
    <Dropdown
      placement="bottomRight"
      content={
        <Menu
          menus={[
            { label: "Đưa bài viết vào thùng rác", icon: <IconTrash /> },
            { label: "Chỉnh sửa", icon: <IconPen /> },
            { label: "Lưu trữ", icon: <IconArchive /> },
            { label: "Báo cáo bài viết", icon: <IconExclamation /> },
            { label: "Ẩn bài viết", icon: <IconEyeClose /> },
            { label: "Tắt thông báo về bài viết này", icon: <IconBellOff /> },
          ]}
        />
      }
    >
      <ButtonIconThreeDotAction className="bg-transparent" />
    </Dropdown>
  );
};

export const Post = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalDetail
        overlayCloseable
        open={open}
        onCancel={() => setOpen(false)}
      />
      <div className="rounded-lg bg-white pb-4 dark:bg-slate-900">
        <div className="flex items-center gap-2 p-4">
          <Avatar />
          <div className="flex-1 -mt-1">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              Lucas Nash
            </h4>
            <p className="text-gray-500 text-xs">New York City, NY</p>
          </div>
          <div>
            <PostMenu />
          </div>
        </div>
        <div className="p-1 overflow-hidden flex items-center">
          <a
            className="w-full"
            href="#"
            onClick={(ev) => {
              ev.preventDefault();
              setOpen(true);
            }}
          >
            <img
              className="w-full h-full object-cover"
              src={`https://unsplash.it/1000/500?t=${Math.random()}`}
            />
          </a>
        </div>
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-0.5 ">
            <Tag className="flex items-center text-sm">
              <IconComment />
              60
            </Tag>
            <Tag className="flex items-center text-sm">
              <IconShare />
              20
            </Tag>
            {Math.random() > 0.5 ? (
              <ButtonIconHeart transparent />
            ) : (
              <ButtonIconHeartFill transparent className="text-red-600" />
            )}
            <div className="flex gap-2 items-center">
              <div>
                <Avatar size={27} border />
              </div>
              <div className="-ml-2">
                <Avatar size={27} border />
              </div>
              <div className="-ml-2">
                <Avatar size={27} border />
              </div>
              <p className="text-sm">
                Thả tim bởi{" "}
                <b>
                  <a href="#">Sue Franklin</a>
                </b>{" "}
                và{" "}
                <b>
                  <a href="#">1,993 người khác</a>
                </b>
              </p>
            </div>
          </div>
          <div>
            <IconBookmark />
          </div>
        </div>
        <p className="px-5 text-sm">
          <b>Dean Atkins</b>&nbsp;We know the voices in our heads aren't real,
          but sometimes their ideas are just too good to ignore.
        </p>
      </div>
    </>
  );
};

const ModalDetail: FC<ModalProps> = (props) => {
  const [value, setValue] = useState("");
  return (
    <Modal
      {...props}
      className="w-full max-h-[500px] h-full max-w-[900px] m-3"
      hideIconClose
    >
      <div className="flex h-full">
        <div className="flex-1 w-1 bg-black items-center flex">
          <img
            className="object-contain"
            src={`https://unsplash.it/1000/500?t=${Math.random()}`}
          />
        </div>
        <div className="flex-1 w-1 flex flex-col">
          <div className="flex gap-2 p-3 border-b border-solid border-gray-300 dark:border-slate-700">
            <Avatar size={40} />
            <div className="flex flex-col flex-1">
              <h3 className="text-sm font-bold">Augusta Romero</h3>
              <time className="text-gray-500 text-xs">3 tháng trước</time>
            </div>
            <div className="flex">
              <ButtonIconHeart />
              <IconShare />
              <IconBookmark />
              <PostMenu />
            </div>
          </div>
          <div className="flex-1 py-2 overflow-auto">
            <UserComment replies={[{}, {}]} loadMore />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
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
                type={value ? "primary" : "default"}
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
  replies?: any[];
  loadMore?: boolean;
  isReply?: boolean;
}
const UserComment: Atom<UserCommentProps> = ({
  replies,
  loadMore,
  isReply = true,
}) => {
  const [openReply, setOpenReply] = useState(false);
  return (
    <>
      <div className="flex gap-3 px-3 py-1 [&_.icon-action]:hover:opacity-100">
        <Avatar />
        <div className="flex-1">
          <div className="text-sm">
            <b> Nelle Pena</b>{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui
              atque quidem consectetur accusamus sint. Ducimus inventore sequi,
              labore suscipit neque rem maiores aperiam enim velit praesentium
              at ullam? Nostrum?
            </span>
          </div>
          <div className="flex gap-2 text-xs items-center">
            <time className="">3 phút trước</time>
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
              }}
            >
              Trả lời
            </a>

            <Dropdown
              placement="bottomRight"
              content={
                <Menu
                  menus={[
                    { label: "Xóa" },
                    { label: "Chỉnh sửa" },
                    { label: "Báo cáo" },
                    { label: "Ẩn bình luận" },
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
              Bình luận (10)
            </div>
          )}
        </div>
        <ButtonIconHeart className="icon-action opacity-0" />
      </div>
      <div className="px-2 pl-10">
        {replies?.map((e, i) => (
          <UserComment isReply={false} key={i} />
        ))}
        {isReply && openReply && (
          <div className="ml-3 flex gap-2 items-center">
            <Avatar />
            <Input
              placeholder="Thêm bình luận...."
              className="flex-1 text-xs"
            />
          </div>
        )}
      </div>
    </>
  );
};
