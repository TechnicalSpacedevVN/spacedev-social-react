import { cn } from '@utils';

export interface IMenu {
  label?: JSX.Element | string;
  icon?: any;
  onClick?: () => void;
  key?: string | number;
  enabled?: boolean;
  line?: boolean;
  group?: React.ReactNode;
  suffix?: any;
  className?: string;
  description?: any;
}
export interface MenuProps {
  menus: IMenu[];
  itemClass?: string;
  onChange?: (menu: IMenu, index: number) => void;
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

        if (e.group) {
          return (
            <div
              className={cn(
                'select-none p-2 text-xs uppercase text-gray-900 dark:text-white cursor-pointer rounded !text-opacity-50 mt-4 font-semibold',
                e.className,
              )}
            >
              {e.group}
            </div>
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
              props.itemClass,
              e.className,
            )}
          >
            <div className="flex gap-2 items-center">
              {e.icon && <span className="">{e.icon}</span>}

              <div className="flex flex-col gap-1 flex-1">{e.label}</div>
              {e.suffix}
            </div>
            {e.description && (
              <div className="flex gap-2 items-center">
                {e.icon && <span className="opacity-0">{e.icon}</span>}
                <div className="dark:text-white text-black !text-opacity-50 text-xs">
                  {e.description}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
