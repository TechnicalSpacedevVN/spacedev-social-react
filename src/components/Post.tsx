import { FC, useState } from "react";
import { Avatar } from "./Avatar";
import { IconBookmark } from "./Icon/IconBookmark";
import { IconComment } from "./Icon/IconComment";
import { ButtonIconHeart } from "./Icon/IconHeart";
import { IconShare } from "./Icon/IconShare";
import {
  ButtonIconThreeDotAction,
  IconThreeDotAction,
} from "./Icon/IconThreeDotAction";
import { Modal, ModalProps } from "./Modal";
import { Button } from "./Button";
import moment from "moment";
import { Link, generatePath } from "react-router-dom";
import { PATH } from "../constants/path";
import { Dropdown } from "./Dropdown";
import { ModalCreateEditPost } from "./ModalCreateEditPost";
import { USER_LOGIN, useGlobalState } from "../store/queryClient";
import { postService } from "../services/post";
import { reportService } from "../services/report";
import { ReporType } from "../@types/report";

export interface PostProps extends Post {
  onDeleteSuccess?: () => void;
  onEditSuccess?: () => void;
  onReportSuccess?: () => void;
  onHidePostSuccess?: () => void;
}

export const Post: FC<PostProps> = (props) => {
  const { content, image, author, createdAt, _id } = props;
  const user = useGlobalState(USER_LOGIN);
  const [open, setOpen] = useState(false);
  const userPath = generatePath(PATH.User, { _id: author._id });
  const [openModalCreate, setOpenModalCreate] = useState(false);

  return (
    <>
      <ModalDetail
        overlayCloseable
        open={open}
        onCancel={() => setOpen(false)}
        {...props}
      />
      <ModalCreateEditPost
        open={openModalCreate}
        onCancel={() => setOpenModalCreate(false)}
        width={608}
        post={props}
        onEditSuccess={props.onEditSuccess}
        edit
      />

      <div className="rounded-lg bg-white pb-4 dark:bg-slate-900">
        <div className="flex items-center gap-2 p-4">
          <Link to={userPath}>
            <Avatar src={author.avatar} />
          </Link>
          <div className="flex-1 -mt-1">
            <div className="flex gap-2 items-baseline">
              <Link to={userPath}>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {author.name}
                </h4>
              </Link>
              - <span className="text-sm">{moment(createdAt).fromNow()}</span>
            </div>
            <p className="text-gray-500 text-xs">New York City, NY</p>
          </div>
          <div>
            <Dropdown
              placement="bottomRight"
              content={
                <div className="w-[200px]">
                  {author._id === user?._id && (
                    <div
                      onClick={() => setOpenModalCreate(true)}
                      className="p-2 text-sm text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer rounded"
                    >
                      Chỉnh sửa bài viết
                    </div>
                  )}
                  {author._id === user?._id && (
                    <div
                      onClick={async () => {
                        await postService.deletePost(_id);
                        props?.onDeleteSuccess?.();
                      }}
                      className="p-2 text-sm text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer rounded"
                    >
                      Xóa bài viết
                    </div>
                  )}
                  {author._id !== user?._id && (
                    <div
                      onClick={async () => {
                        await postService.hidePost(_id);
                        props.onHidePostSuccess?.();
                      }}
                      className="p-2 text-sm text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer rounded"
                    >
                      Ẩn bài viết
                    </div>
                  )}

                  {author._id !== user?._id && (
                    <div
                      onClick={async () => {
                        await reportService.createReport(_id, ReporType.Post);
                        props.onReportSuccess?.();
                      }}
                      className="p-2 text-sm text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer rounded"
                    >
                      Báo cáo bài viết
                    </div>
                  )}
                </div>
              }
            >
              <ButtonIconThreeDotAction transparent />
            </Dropdown>
          </div>
        </div>
        <div className="p-1 overflow-hidden flex items-center max-h-[400px]">
          <a
            className="w-full"
            href="#"
            onClick={(ev) => {
              ev.preventDefault();
              setOpen(true);
            }}
          >
            <img className="w-full h-full object-cover" src={image} />
          </a>
        </div>
        <div className="flex items-center justify-between p-3">
          <div className="flex gap-0.5 ">
            <ButtonIconHeart />
            <IconComment />
            <IconShare />
          </div>
          <div>
            <IconBookmark />
          </div>
        </div>
        <div className="flex px-5 gap-2 items-center">
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
            Liked by <b>Sue Franklin</b> and <b>1,993 others</b>
          </p>
        </div>
        {content && (
          <p className="px-5 mt-4 text-sm">
            <b>{author.name}</b>&nbsp;
            {content}
          </p>
        )}
      </div>
    </>
  );
};

export interface ModalPostDetail extends Post, ModalProps {}

const ModalDetail: FC<ModalPostDetail> = (props) => {
  let { content, image, author, _id, createdAt } = props;
  const [value, setValue] = useState("");
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
              <h3 className="text-sm font-bold">{author.name}</h3>
              <time className="text-gray-500 text-xs">
                {moment(createdAt).fromNow()}
              </time>
            </div>
            <div className="flex">
              <ButtonIconHeart />
              <IconShare />
              <IconBookmark />

              <ButtonIconThreeDotAction transparent />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex gap-3 p-3 items-center [&_.icon-action]:hover:opacity-100">
              <Avatar />
              <div className="flex-1">
                <h3 className="text-sm font-bold">Nelle Pena</h3>
                <div className="flex gap-2 text-xs">
                  <time className="">3 phút trước</time>
                  <a href="#" className="font-bold">
                    2 Like
                  </a>
                  <a href="#" className="font-bold">
                    Reply
                  </a>
                  <IconThreeDotAction className="ml-4 cursor-pointer icon-action opacity-0" />
                </div>
              </div>
              <ButtonIconHeart className="icon-action opacity-0" />
            </div>
            <div className="flex gap-3 p-3 [&_.icon-action]:hover:opacity-100">
              <Avatar />
              <div className="flex-1">
                <h3 className="text-sm font-bold">Nelle Pena</h3>
                <div className="flex gap-2 text-xs ">
                  <time className="">3 phút trước</time>
                  <a href="#" className="font-bold">
                    2 Like
                  </a>
                  <a href="#" className="font-bold">
                    Reply
                  </a>
                  <IconThreeDotAction className="ml-4 cursor-pointer icon-action opacity-0" />
                </div>
                <div className="text-gray-400 flex items-baseline gap-2 cursor-pointer text-xs font-bold mt-4 before:content-normal before:block before:w-8 before:h-[1px] before:bg-gray-400">
                  View replies (10)
                </div>
              </div>
              <ButtonIconHeart className="icon-action opacity-0" />
            </div>
          </div>
          <div className="">
            <div className="border-t border-solid border-gray-300 flex dark:border-slate-700">
              <input
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
                placeholder="Add a comment..."
                className="outline-0 text-sm px-2 py-3 flex-1 bg-transparent"
              />
              <Button
                type={value ? "primary" : "default"}
                disabled={!value}
                className="rounded-none !px-10"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
