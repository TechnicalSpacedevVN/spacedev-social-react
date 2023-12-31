import { cn } from '@utils';
import { Icon } from './Icon';
import { ButtonIconProps, IconProps } from './type';

export const ButtonIconMinus: Atom<ButtonIconProps> = ({ size, ...props }) => {
  return (
    <Icon {...props}>
      <IconMinus size={size} />
    </Icon>
  );
};

export const IconMinus: Atom<IconProps> = ({ size = 17, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('icon icon-tabler icon-tabler-minus', props.className)}
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
      <path d="M5 12l14 0" />
    </svg>
  );
};
