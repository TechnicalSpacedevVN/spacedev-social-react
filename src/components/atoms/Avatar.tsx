import { useId } from "react";
import { cn } from "../../utils";
import { BorderGradient, BorderGradientProps } from "./BorderGradient";

export interface AvatarProps {
  size?: number;
  online?: boolean;
  showStatus?: boolean;
  link?: string;
  src?: string;
  border?: Partial<BorderGradientProps>;
  onClick?: () => void;
}
export const Avatar: Atom<AvatarProps> = ({
  size = 32,
  online,
  link = "#",
  ...props
}) => {
  const id = useId();
  let _w = size;
  let _h = size;

  if (props.border) {
    _w -= props.border.size || 8;
    _h -= props.border.size || 8;
  }

  let child = (
    <a
      href={link}
      className={cn(
        "relative w-8 cursor-pointer rounded-full block shadow-[0_0_0_1px_gray] shadow-slate-300 dark:shadow-slate-700",
        props.className
      )}
      style={{ width: _w, height: _h }}
    >
      <div className={cn("rounded-full overflow-hidden w-full h-full")}>
        <img
          className="w-full h-full"
          src={props.src || `https://unsplash.it/${_w}/${_h}?t=${id}`}
        />
      </div>
      {props.showStatus && (
        <span
          className={cn(
            "block w-2 h-2 rounded-full  absolute bottom-0 right-0 shadow-[0_0_0_2px_white] dark:shadow-slate-900",
            { "bg-green-500": online, "bg-gray-500": !online }
          )}
        ></span>
      )}
    </a>
  );

  if (typeof props.border === "object") {
    return (
      <BorderGradient
        className="border-solid border-white rounded-full "
        size={["boolean", "undefined"].includes(typeof props.border) ? 0 : 2}
      >
        <div className="border-2 border-solid border-white dark:border-slate-950 rounded-full">
          {child}
        </div>
      </BorderGradient>
    );
  }

  return child;
};
