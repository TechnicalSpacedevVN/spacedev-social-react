import { cn } from '@utils';
import { Icon } from './Icon';
import { ButtonIconProps, IconProps } from './type';

interface IconVariant {
  circle?: boolean;
  off?: boolean;
}

export const ButtonIconUser: Atom<ButtonIconProps & IconVariant> = ({
  size,
  circle,
  off,
  ...props
}) => {
  return (
    <Icon {...props}>
      <IconUser size={size} circle={circle} off={off} />
    </Icon>
  );
};

export const IconUser: Atom<IconProps & IconVariant> = ({
  size = 17,
  off,
  circle,
  ...props
}) => {
  if (circle) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'icon icon-tabler icon-tabler-user-circle',
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
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
      </svg>
    );
  }
  if (off) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        className={cn('icon icon-tabler icon-tabler-user-off', props.className)}
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
        <path d="M8.18 8.189a4.01 4.01 0 0 0 2.616 2.627m3.507 -.545a4 4 0 1 0 -5.59 -5.552" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.412 0 .81 .062 1.183 .178m2.633 2.618c.12 .38 .184 .785 .184 1.204v2" />
        <path d="M3 3l18 18" />
      </svg>
    );
  }
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('icon icon-tabler icon-tabler-user', props.className)}
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
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
  );
};
