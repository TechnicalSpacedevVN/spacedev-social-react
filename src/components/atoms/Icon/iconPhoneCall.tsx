import { cn } from '../../../utils';
import { Icon } from './Icon';
import { ButtonIconProps, IconProps } from './type';

export const ButtonIconPhoneCall: Atom<ButtonIconProps> = ({
  size,
  ...props
}) => {
  return (
    <Icon {...props}>
      <IconPhoneCall size={size} />
    </Icon>
  );
};

export const IconPhoneCall: Atom<IconProps> = ({ size = 17, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('icon icon-tabler icon-tabler-phone-call', props.className)}
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
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
      <path d="M15 7a2 2 0 0 1 2 2" />
      <path d="M15 3a6 6 0 0 1 6 6" />
    </svg>
  );
};
