import { Icon } from './Icon';
import { ButtonIconProps, IconProps } from './type';

export const ButtonIconEmail: Atom<ButtonIconProps> = ({ size, ...props }) => {
  return (
    <Icon {...props}>
      <IconEmail size={size} />
    </Icon>
  );
};

export const IconEmail: Atom<IconProps> = ({ size = 17, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-mail-opened"
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
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
      <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
      <path d="M3 19l6 -6" />
      <path d="M15 13l6 6" />
    </svg>
  );
};
