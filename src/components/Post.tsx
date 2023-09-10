import { handleSelectEnd, scollToElement } from "@utils";
import { FC, useRef, useState, useMemo } from "react";
import { IconArchive } from "./atoms/Icon/IconArchive";
import { IconBellOff } from "./atoms/Icon/IconBellOf";
import { IconBookmark } from "./atoms/Icon/IconBookmark";
import { IconComment } from "./atoms/Icon/IconComment";
import { IconExclamation } from "./atoms/Icon/IconExclamation";
import { IconEyeClose } from "./atoms/Icon/IconEyeClose";
import { ButtonIconHeart } from "./atoms/Icon/IconHeart";
import { ButtonIconHeartFill } from "./atoms/Icon/IconHeartFill";
import { IconPen } from "./atoms/Icon/IconPen";
import { IconShare } from "./atoms/Icon/IconShare";
import { IconSpin } from "./atoms/Icon/IconSpin";
import { ButtonIconThreeDotAction } from "./atoms/Icon/IconThreeDotAction";
import { IconTrash } from "./atoms/Icon/IconTrash";
import { Avatar } from "./atoms/Avatar";
import { Button } from "./atoms/Button";
import { Dropdown } from "./atoms/Dropdown";
import { Menu } from "./atoms/Menu";
import { MessageInput } from "./atoms/MessageInput";
import { Modal, ModalProps } from "./atoms/Modal";
import { Tag } from "./atoms/Tag";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { setDropFileData } from "./atoms/DropFile";
import { generatePath } from "react-router-dom";
import { PATH } from "@constants/path";

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
  const [name, setName] = useState(faker.person.fullName);
  const [avatar, setAvatar] = useState(faker.internet.avatar);
  const [country, setCountry] = useState(faker.location.country);
  const [city, seCity] = useState(faker.location.city);
  const [content, setContent] = useState(faker.lorem.paragraph);
  const [createdAt, setCreatedAt] = useState(faker.date.past);
  const [heartCount, setHeartCount] = useState(() =>
    faker.number.int({ min: 0, max: 10000 })
  );
  const [commentCount, setCommentCount] = useState(() =>
    faker.number.int({ min: 0, max: 100 })
  );
  const [shareCount, setShareCount] = useState(() =>
    faker.number.int({ min: 0, max: 100 })
  );
  const [image, setImage] = useState(faker.image.url);
  let id = useMemo(() => Math.round(Math.random() * 10000000).toString(), []);
  return (
    <>
      <ModalDetail
        overlayCloseable
        open={open}
        onCancel={() => setOpen(false)}
      />
      <div
        draggable
        onDragStart={(ev) => {
          let img = document.createElement("img");
          img.src = image;
          ev.dataTransfer.setDragImage(img, img.width / 2, img.height / 2);
          setDropFileData(ev, "post", {
            content: content,
            id: id,
            url: {
              image: image,
              link: generatePath(PATH.PostDetail, { id }),
              title: content,
            },
            user: avatar,
          });
        }}
        className="rounded-lg bg-white pb-4 dark:bg-slate-900"
      >
        <div className="flex items-center gap-2 p-4">
          <Avatar src={avatar} />
          <div className="flex-1 -mt-1">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                {name}
              </h4>
              -
              <time className=" text-sm !text-opacity-70 text-black dark:text-white">
                {moment(createdAt).fromNow()}
              </time>
            </div>
            <p className="text-gray-500 text-xs">
              {city}, {country}
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
              setDropFileData(ev, "img", image);
            }}
          >
            <img draggable className="w-full h-full object-cover" src={image} />
          </a>
        </div>
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-0.5 ">
            <Tag className="flex items-center text-sm">
              <IconComment />
              {commentCount}
            </Tag>
            <Tag className="flex items-center text-sm">
              <IconShare />
              {shareCount}
            </Tag>
            {Math.random() > 0.5 ? (
              <ButtonIconHeart transparent />
            ) : (
              <ButtonIconHeartFill transparent className="!text-red-600" />
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
                Thả tim bởi{" "}
                <b>
                  <a href="#">Sue Franklin</a>
                </b>{" "}
                và{" "}
                <b>
                  <a href="#">{heartCount} người khác</a>
                </b>
              </p>
            </div>
          </div>
          <div>
            <IconBookmark />
          </div>
        </div>
        <p className="px-5 text-sm">
          <b>{name}</b>&nbsp;{content}
        </p>
      </div>
    </>
  );
};

const ModalDetail: FC<ModalProps> = (props) => {
  const [value, setValue] = useState("");
  const [image, setImage] = useState(faker.image.url);
  return (
    <Modal
      {...props}
      className="w-full max-h-[500px] h-full max-w-[900px] m-3"
      hideIconClose
    >
      <div className="flex h-full">
        <div className="flex-1 w-1 bg-black items-center flex">
          <img className="object-contain" src={image} />
        </div>
        <div className="flex-1 w-1 flex flex-col">
          <div className="flex gap-2 p-3 border-b border-solid border-gray-300 dark:border-slate-700">
            <Avatar size={40} />
            <div className="flex flex-col flex-1">
              <h3 className="text-sm font-bold">Augusta Romero</h3>
              <time className="text-gray-500 text-xs ">3 tháng trước</time>
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
  const inputRef = useRef<HTMLParagraphElement>(null);
  const [content, setContent] = useState(() =>
    faker.lorem.paragraph({ min: 1, max: 2 })
  );

  // const onSendMessage = () => {
  //   if (inputRef.current) {
  //     inputRef.current.innerHTML = '';
  //   }
  //   setValue('');
  // };

  return (
    <>
      <div className="flex gap-3 px-3 py-1 [&_.icon-action]:hover:opacity-100">
        <Avatar />
        <div className="flex-1">
          <div className="text-sm">
            <b> Nelle Pena</b> <span>{content}</span>
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
          <div className="ml-3 flex gap-3 items-center">
            <Avatar />
            <MessageInput
              onChange={(val) => {
                console.log(val);
              }}
              ref={inputRef}
              placeholder="Thêm bình luận...."
              onEnter={() => {
                console.log("send reply");
              }}
              clearWhenEnter={false}
              allowShiftEnter={false}
            />
            {/* <Input
              placeholder="Thêm bình luận...."
              className="flex-1 text-xs"
            /> */}
          </div>
        )}
      </div>
    </>
  );
};
