import { cn } from '@utils';
import { Icon } from './Icon';
import { ButtonIconProps, IconProps } from './type';

export const ButtonIconAutomation: Atom<ButtonIconProps> = ({
  size,
  ...props
}) => {
  return (
    <Icon {...props}>
      <IconAutomation size={size} />
    </Icon>
  );
};

export const IconAutomation: Atom<IconProps> = ({ size = 17, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'icon icon-tabler icon-tabler-automatic-gearbox',
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
      <path d="M17 17v4h1a2 2 0 1 0 0 -4h-1z" />
      <path d="M17 11h1.5a1.5 1.5 0 0 0 0 -3h-1.5v5" />
      <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3" />
      <path d="M9 11h4" />
    </svg>
  );
};
