import { Icon } from "./Icon";
import { FC } from "react";
import { ButtonIconProps, IconProps } from "./type";

export const ButtonIconArrowDown: FC<ButtonIconProps> = (props) => {
  return (
    <Icon {...props}>
      <IconArrowDown {...props} />
    </Icon>
  );
};

export const IconArrowDown: Atom<IconProps> = ({ size = 17, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-chevron-down"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9l6 6l6 -6" />
    </svg>
  );
};
