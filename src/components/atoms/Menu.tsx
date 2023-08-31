import { Atom } from "@@types/type";
import { cn } from "@utils";
export interface MenuProps {
  menus: {
    label?: JSX.Element | string;
    onClick?: () => void;
    key?: string | number;
    enabled?: boolean;
  }[];
}

export const Menu: Atom<MenuProps> = ({ menus, ...props }) => {
  return (
    <div className={cn("min-w-[200px]", props.className)}>
      {menus.map((e, i) => {
        if (e.enabled === false) return null;
        return (
          <div
            key={e.key || i}
            onClick={e.onClick}
            className="p-2 text-sm text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer rounded"
          >
            {e.label}
          </div>
        );
      })}
    </div>
  );
};
