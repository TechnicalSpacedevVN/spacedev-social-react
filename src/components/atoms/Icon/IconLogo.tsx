import { Icon } from './Icon';
import { ButtonIconProps, IconProps } from './type';

export const ButtonIconLogo: Atom<ButtonIconProps> = ({ size, ...props }) => {
  return (
    <Icon {...props}>
      <IconLogo size={size} />
    </Icon>
  );
};

export const IconLogo: Atom<IconProps> = ({ size = 17, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1981.32 1981.32"
      width={size}
      height={size}
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '.cls-1{fill:#ffd530;}.cls-2{fill:#31a990;}.cls-3{fill:#db3244;}.cls-4{fill:#4156a6;}',
          }}
        />
      </defs>
      <g id="AVATAR">
        <path
          className="cls-1"
          d="M990.73,1320.88H660.44c-244.36,0-457.74-132.8-571.91-330.15A656.1,656.1,0,0,1,0,660.44C0,295.75,295.75,0,660.44,0V990.73a330.39,330.39,0,0,0,330.29,330.15Z"
        />
        <path
          className="cls-2"
          d="M1981.32,660.44H990.73A330.39,330.39,0,0,0,660.44,990.73V660.44c0-244.36,132.8-457.88,330.29-572A657.58,657.58,0,0,1,1320.88,0C1685.57,0,1981.32,295.75,1981.32,660.44Z"
        />
        <path
          className="cls-3"
          d="M1981.32,1320.88c0,364.69-295.75,660.44-660.44,660.44V990.73A330.39,330.39,0,0,0,990.73,660.44h330.15c244.36,0,457.88,132.8,572,330.29A657.48,657.48,0,0,1,1981.32,1320.88Z"
        />
        <path
          className="cls-4"
          d="M1320.88,990.73v330.15c0,244.36-132.8,457.88-330.15,572a657.71,657.71,0,0,1-330.29,88.4C295.75,1981.32,0,1685.57,0,1320.88H990.73a330.39,330.39,0,0,0,330.15-330.15Z"
        />
        <path d="M1184.93,990.73c0,107.21-86.92,194.12-194.13,194.12s-194.13-86.91-194.13-194.12S883.59,796.6,990.8,796.6a193.6,193.6,0,0,1,66.84,11.82,102.93,102.93,0,0,0,126.29,162.47A197,197,0,0,1,1184.93,990.73Z" />
      </g>
    </svg>
  );
};
