import { cn } from '@utils';
import { Icon } from './Icon';
import { ButtonIconProps, IconProps } from './type';

export const ButtonIconMessage: Atom<ButtonIconProps> = ({
  size,
  ...props
}) => {
  return (
    <Icon {...props}>
      <IconMessage size={size} />
    </Icon>
  );
};

export const IconMessage: Atom<IconProps> = ({ size = 17, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'icon icon-tabler icon-tabler-message-circle',
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
      <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
    </svg>
  );
};
