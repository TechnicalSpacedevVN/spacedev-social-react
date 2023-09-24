import { cn } from '@utils';
import { Icon } from './Icon';
import { ButtonIconProps, IconProps } from './type';

export const ButtonIconLogin: Atom<ButtonIconProps> = ({ size, ...props }) => {
  return (
    <Icon {...props}>
      <IconLogin size={size} />
    </Icon>
  );
};

export const IconLogin: Atom<IconProps> = ({ size = 17, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('icon icon-tabler icon-tabler-login', props.className)}
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
      <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
      <path d="M21 12h-13l3 -3" />
      <path d="M11 15l-3 -3" />
    </svg>
  );
};
