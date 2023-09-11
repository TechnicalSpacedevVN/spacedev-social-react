import { FC, useEffect, useRef, useState } from "react";
import { ButtonIconArrowDown } from "@components/atoms/Icon/IconArrow";
import { ButtonIconImage, IconImage } from "@components/atoms/Icon/IconImage";
import { Avatar } from "@components/atoms/Avatar";
import { Button } from "@components/atoms/Button";
import { Dropdown } from "@components/atoms/Dropdown";
import { ImageGrid } from "@components/atoms/ImageGrid";
import { Menu } from "@components/atoms/Menu";
import { Modal, ModalProps } from "@components/atoms/Modal";
import { IconPoll } from "@components/atoms/Icon/IconPoll";
import { IconCalendar } from "@components/atoms/Icon/IconCalendar";
import { IconVideo } from "@components/atoms/Icon/IconVideo";

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
                <ButtonIconArrowDown
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
            Viết bài
          </Button>
        </div>
      </div>
    </Modal>
  );
};
