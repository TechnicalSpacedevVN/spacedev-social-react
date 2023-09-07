import { Icon } from './Icon';
import { ButtonIconProps } from './type';

export const ButtonIconTrash: Atom<any> = (props) => {
  return (
    <Icon {...props}>
      <IconEyeClose />
    </Icon>
  );
};

export const IconEyeClose: Atom<ButtonIconProps> = ({
  size = 17,
  ...props
}) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-eye-closed"
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
      <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
      <path d="M3 15l2.5 -3.8" />
      <path d="M21 14.976l-2.492 -3.776" />
      <path d="M9 17l.5 -4" />
      <path d="M15 17l-.5 -4" />
    </svg>
  );
};