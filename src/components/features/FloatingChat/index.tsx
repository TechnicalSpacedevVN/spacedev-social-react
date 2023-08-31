import { FC, useRef, useState } from "react";
import { Avatar } from "../../atoms/Avatar";
import { Button } from "../../atoms/Button";
import { IconClose } from "../../Icon/IconClose";
import { ButtoniconEmotion } from "../../Icon/IconEmotion";
import { ButtoniconGIF } from "../../Icon/IconGIF";
import { ButtoniconMaximize, IconMaximize } from "../../Icon/IconMaximize";
import {
  ButtonIconThreeDotAction,
  IconThreeDotAction,
} from "../../Icon/IconThreeDotAction";
import { ButtonIconUploadImage } from "../../Icon/IconUploadImage";
import { cn } from "../../../utils";
import { Icon } from "../../Icon/Icon";
import { IconMinimize } from "../../Icon/IconMinimize";
import { ButtonIconMinus, IconMinus } from "../../Icon/IconMinus";
import { IconPlus } from "../../Icon/IconPlus";

export const FloatingChat = () => {
  return (
    <div className="fixed bottom-0 right-3 flex gap-3 items-end">
      <ChatScreen />
      <ChatScreen />
    </div>
  );
};

const fullScreenClass = "h-[600px] w-[550px]";
const isHideClass =
  "h-[49px] w-[200px] [&_.main]:hidden [&_.footer]:hidden cursor-pointer";

export const ChatScreen: FC = (props) => {
  const [value, setValue] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div
      className={cn(
        "transition-all duration-200 rounded-b-none shadow-[0_4px_5px_rgba(0,0,0,.5)] flex flex-col border border-solid border-b-0 border-gray-300 bg-white dark:bg-slate-900 dark:border-slate-700 text-gray-900 dark:text-white h-[400px] w-[350px] rounded-lg overflow-hidden",
        {
          [fullScreenClass]: isFullScreen,
          [isHideClass]: isHide,
        }
      )}
    >
      <div
        onClick={() => setIsHide(false)}
        className="[&_.actions]:hover:opacity-100 flex gap-3 items-center p-2 border-b border-solid border-gray-300 dark:border-slate-700"
      >
        <Avatar />
        <h3 className="flex-1 font-bold text-sm">Katherine Jordan</h3>
        <div className="flex gap-0.5 items-center">
          <ButtonIconThreeDotAction transparent className="actions opacity-0" />
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
      <div className="flex flex-col gap-2 flex-1 main overflow-auto py-2">
        <div className="flex flex-col items-center text-center gap-2 items-center px-2">
          <Avatar size={50} />
          <div className="">
            <h3 className="font-bold text-sm">Hunter Gonzales</h3>
            <p className="text-sm text-black dark:text-white text-opacity-70">
              Lập trình viên
            </p>
          </div>
        </div>
        <div className="text-center text-sm my-4 dark:text-slate-300 text-gray-500 text-sm font-semibold text-opacity-90">
          Thứ sáu, 11/05/2023
        </div>
        <div className="px-2 flex gap-2">
          <Avatar size={32} />
          <div className="flex-1 flex flex-col gap-[1px] max-w-[70%]">
            <p className="text-sm bg-blue-500 text-white px-3 py-2 first-of-type:rounded-t-2xl last-of-type:rounded-b-2xl rounded-l rounded-r-2xl">
              Xin chào! Tôi đang tìm một chiếc áo thể thao mới. Bạn có thể giúp
              tôi không?
            </p>
            <p className="text-sm bg-blue-500 text-white px-3 py-2 first-of-type:rounded-t-2xl last-of-type:rounded-b-2xl rounded-l rounded-r-2xl">
              Chào bạn! Tất nhiên, tôi rất vui được giúp bạn. Bạn có một số sở
              thích cụ thể về mẫu mã, màu sắc hoặc thương hiệu nào không?
            </p>
            <p className="text-sm bg-blue-500 text-white px-3 py-2 first-of-type:rounded-t-2xl last-of-type:rounded-b-2xl rounded-l rounded-r-2xl">
              Tôi thích màu đen và thường mặc size S. Tôi cũng muốn có một áo
              thoáng mát cho mùa hè này.
            </p>
          </div>
        </div>
        <div className="px-2 flex gap-2">
          <Avatar size={32} />
          <div className="flex-1 flex flex-col gap-[1px] max-w-[70%]">
            <p className="text-sm bg-blue-500 text-white px-3 py-2 first-of-type:rounded-t-2xl last-of-type:rounded-b-2xl rounded-l rounded-r-2xl">
              Xin chào! Tôi đang tìm một
            </p>
            <p className="text-sm bg-blue-500 text-white px-3 py-2 first-of-type:rounded-t-2xl last-of-type:rounded-b-2xl rounded-l rounded-r-2xl">
              Tôi cũng muốn có một áo
            </p>
          </div>
        </div>
        <div className="px-2 flex gap-2 my-message">
          <Avatar size={32} />
          <div className="flex-1 flex flex-col gap-[1px] max-w-[70%]">
            <p className="text-sm bg-blue-500 text-white px-3 py-2 first-of-type:rounded-t-2xl last-of-type:rounded-b-2xl rounded-l rounded-r-2xl">
              Xin chào! Tôi đang tìm một
            </p>
          </div>
        </div>
      </div>
      <div className="footer border-t border-solid border-gray-300 dark:border-slate-700 p-1">
        <div className="px-3 py-1 max-h-[150px] overflow-auto bg-gray-200 rounded dark:bg-slate-700 text-sm">
          <p
            onInput={(ev) => {
              if (!ev.currentTarget.innerText.trim()) {
                ev.currentTarget.innerHTML = "";
              }
              setValue(ev.currentTarget.innerHTML);
            }}
            contentEditable
            placeholder="Viết tin nhắn..."
            className=" py-1 min-h-[30px] outline-none after:text-gray-500 dark:after:text-slate-400 after:empty:content-[attr(placeholder)] after:absolute after:-translate-y-1/2 after:top-1/2 relative"
          ></p>
        </div>
      </div>
      <div className="flex items-center border-t dark:border-slate-700 border-gray-300 py-1 px-2">
        <div className="flex items-center">
          <ButtonIconUploadImage transparent />
          <ButtoniconGIF transparent />
          <ButtoniconEmotion transparent />
        </div>
        <div className="ml-auto flex items-center">
          <Button
            type={value ? "primary" : "default"}
            disabled={!value}
            className="rounded-full px-5"
            size="small"
          >
            Send
          </Button>
          <ButtonIconThreeDotAction transparent />
        </div>
      </div>
    </div>
  );
};
