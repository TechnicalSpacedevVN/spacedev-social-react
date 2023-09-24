import { cn } from '@utils';
import { Icon } from './Icon';
import { ButtonIconProps, IconProps } from './type';

export interface IconCheckVariant {
  circle?: boolean;
}

export const ButtonIconCheck: Atom<ButtonIconProps & IconCheckVariant> = ({
  circle,
  size,
  ...props
}) => {
  return (
    <Icon {...props}>
      <IconCheck size={size} circle={circle} />
    </Icon>
  );
};

export const IconCheck: Atom<IconProps & IconCheckVariant> = ({
  size = 17,
  circle,
  ...props
}) => {
  if (circle)
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          'icon icon-tabler icon-tabler-circle-check-filled',
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
        <path
          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
          strokeWidth={0}
          fill="currentColor"
        />
      </svg>
    );
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('icon icon-tabler icon-tabler-check', props.className)}
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
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
};
