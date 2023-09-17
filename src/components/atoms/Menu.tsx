import { cn } from '@utils';

export interface Menu {
  label?: JSX.Element | string;
  icon?: any;
  onClick?: () => void;
  key?: string | number;
  enabled?: boolean;
  line?: boolean;
  suffix?: any;
  className?: string;
  sub?: any;
}
export interface MenuProps {
  menus: Menu[];
  onChange?: (menu: Menu, index: number) => void;
}

export const Menu: Atom<MenuProps> = ({ menus, ...props }) => {
  return (
    <div className={cn('min-w-[200px] flex flex-col', props.className)}>
      {menus.map((e, i) => {
        if (e.line) {
          return (
            <hr
              key={i}
              className="border-gray-200 dark:border-slate-700 my-1"
            />
          );
        }

        if (e.enabled === false) return null;
        return (
          <div
            key={e.key || i}
            onClick={() => {
              e.onClick?.();
              props.onChange?.(e, i);
            }}
            className={cn(
              'select-none p-2 text-sm text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer rounded',
              e.className,
            )}
          >
            <div className="flex gap-2">
              {e.icon && <span className="leading-4">{e.icon}</span>}

              <div className="flex flex-col gap-1">
                <span className="leading-4">{e.label}</span>
                {e.sub && (
                  <span className="dark:text-white text-black !text-opacity-50 text-xs">
                    {e.sub}
                  </span>
                )}
              </div>
              {e.suffix}
            </div>
          </div>
        );
      })}
    </div>
  );
};
