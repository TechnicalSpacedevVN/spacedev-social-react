import { cn } from '@utils';
import { Icon } from './Icon';
import { ButtonIconProps, IconProps } from './type';

export const ButtonIconCamera: Atom<ButtonIconProps> = ({ size, ...props }) => {
  return (
    <Icon {...props}>
      <IconCamera size={size} />
    </Icon>
  );
};

export const IconCamera: Atom<IconProps> = ({ size = 17, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'icon icon-tabler icon-tabler-antenna-bars-5',
        props.className,
      )}
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
      <path d="M6 18l0 -3" />
      <path d="M10 18l0 -6" />
      <path d="M14 18l0 -9" />
      <path d="M18 18l0 -12" />
    </svg>
  );
};
