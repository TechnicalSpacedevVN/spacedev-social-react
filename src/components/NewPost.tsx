import { FC, useEffect, useRef, useState } from "react";
import { IconArrow } from "./atoms/Icon/IconArrow";
import { ButtonIconImage } from "./atoms/Icon/IconImage";
import { Avatar } from "./atoms/Avatar";
import { Button } from "./atoms/Button";
import { Dropdown } from "./atoms/Dropdown";
import { ImageGrid } from "./atoms/ImageGrid";
import { Menu } from "./atoms/Menu";
import { Modal, ModalProps } from "./atoms/Modal";

const upload2ImageClass = "grid-cols-2";
const upload3ImageClass =
  "grid-cols-3 [&>*:nth-child(1)]:col-span-2 [&>*:nth-child(1)]:row-span-2";
const upload4ImageClass =
  "h-[466px] relative [&>*]:absolute [&>*]:overflow-hidden [&>*:nth-child(1)]:inset-[calc(0%_+_0px)_calc(33.3333%_+_1.01px)_calc(0%_+_0px)_calc(0%_+_0px)] [&>*:nth-child(2)]:inset-[calc(0%_+_0px)_calc(0%_+_0px)_calc(66.6667%_+_1.01px)_calc(66.6667%_+_1.01px)] [&>*:nth-child(3)]:inset-[calc(33.3333%_+_1.01px)_calc(0%_+_0px)_calc(33.3333%_+_1.01px)_calc(66.6667%_+_1.01px)]  [&>*:nth-child(4)]:inset-[calc(66.6667%_+_1.01px)_calc(0%_+_0px)_calc(0%_+_0px)_calc(66.6667%_+_1.01px)]";

export const NewPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalCreate open={open} onCancel={() => setOpen(false)} width={608} />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-photo"
                  width={17}
                  height={17}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 8h.01" />
                  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                </svg>
              </div>
              Photo/video
            </div>
            <div
              onClick={() => setOpen(true)}
              className="whitespace-nowrap flex bg-gray-100 rounded-full text-sm text-gray-900 items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              <div className="text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-list"
                  width={17}
                  height={17}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l11 0" />
                  <path d="M9 12l11 0" />
                  <path d="M9 18l11 0" />
                  <path d="M5 6l0 .01" />
                  <path d="M5 12l0 .01" />
                  <path d="M5 18l0 .01" />
                </svg>
              </div>
              Poll
            </div>
            <div
              onClick={() => setOpen(true)}
              className="whitespace-nowrap flex bg-gray-100 rounded-full text-sm text-gray-900 items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              <div className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-calendar-due"
                  width={17}
                  height={17}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h16" />
                  <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
              </div>
              Schedule
            </div>
            <div
              onClick={() => setOpen(true)}
              className="whitespace-nowrap flex bg-gray-100 rounded-full text-sm text-gray-900 items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              <div className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-zoom"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17.011 9.385v5.128l3.989 3.487v-12z" />
                  <path d="M3.887 6h10.08c1.468 0 3.033 1.203 3.033 2.803v8.196a.991 .991 0 0 1 -.975 1h-10.373c-1.667 0 -2.652 -1.5 -2.652 -3l.01 -8a.882 .882 0 0 1 .208 -.71a.841 .841 0 0 1 .67 -.287z" />
                </svg>
              </div>
              Live video
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ModalCreate: FC<ModalProps> = (props) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (props.open) {
      inputRef.current?.focus();
    }
  }, [props.open]);
  return (
    <Modal {...props} title="Tạo bài viết">
      <div className="p-3">
        <div className="flex gap-3">
          <Avatar size={40} />
          <div className="flex-1">
            <h3 className="font-bold">Charles Schwartz</h3>
            <Dropdown
              getPopupContainer={(parentNode) => parentNode}
              content={
                <Menu
                  menus={[
                    { label: "Công khai" },
                    { label: "Chỉ mình tôi" },
                    { label: "Chỉ bạn bè tôi" },
                    { label: "Ẩn danh" },
                  ]}
                />
              }
            >
              <Button size="small" className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-eye"
                  width={17}
                  height={17}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                </svg>
                Only me{" "}
                <IconArrow
                  transparent
                  className="!w-3 h-fit !p-0 h-3 !bg-transparent"
                />
              </Button>
            </Dropdown>
          </div>
          <div>
            <Button>Viết nội dung với AI</Button>
          </div>
        </div>
        <div className="max-h-[500px] overflow-auto">
          <div
            ref={inputRef}
            placeholder="Bạn đang muốn nói điều gì với những người bạn quan tâm...."
            className="block overflow-hidden stext-xl mb-2 bg-transparent outline-none w-full resize-none placeholder:text-xl mt-3 after:empty:content-[attr(placeholder)] after:absolute after:-translate-y-1/2 after:top-1/2 relative"
            spellCheck={false}
            // onChange={(ev) => setValue(ev.target.value)}
            contentEditable
            onInput={(ev) => {
              if (!ev.currentTarget.innerText.trim()) {
                ev.currentTarget.innerHTML = "";
              }
              setValue(ev.currentTarget.innerHTML);
            }}
          ></div>
          <ImageGrid
            images={[
              "https://unsplash.it/600/700",
              "https://unsplash.it/600/701",
              "https://unsplash.it/600/702",
              "https://unsplash.it/600/703",
              "https://unsplash.it/600/704",
              "https://unsplash.it/600/705",
              "https://unsplash.it/600/706",
            ]}
          />
          {/* <div className={cn('', upload4ImageClass)}>
            <div>
              <img
                className="block grid- flex-1 w-full object-cover"
                src="https://unsplash.it/600/700"
              />
            </div>
            <div>
              <img
                className="block flex-1 w-full object-cover"
                src="https://unsplash.it/600/701"
              />
            </div>
            <div>
              <img
                className="block flex-1 w-full object-cover"
                src="https://unsplash.it/600/702"
              />
            </div>
            <div>
              <img
                className="block flex-1 w-full object-cover"
                src="https://unsplash.it/600/703"
              />
            </div>
          </div> */}
        </div>
        <div className="flex gap-2 px-2 items-center mt-2 mb-2">
          <p className="text-sm">Thêm nội dung cho bài viết?</p>
          <ButtonIconImage />
        </div>
        <div>
          <Button
            className="w-full"
            disabled={!value}
            type={value ? "primary" : "default"}
            loading
          >
            Post
          </Button>
        </div>
      </div>
    </Modal>
  );
};
