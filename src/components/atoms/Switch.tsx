import { cn } from '@utils';
const emptyfn = () => {};
export interface SwitchProps {
  size?: 'small' | 'default' | 'large';
  checked?: any;
  onChange?: () => void;
}

const sizeClass = {
  small: 'w-9 h-5 after:h-4 after:w-4',
  default: 'w-11 h-6 after:h-5 after:w-5',
  large: 'w-16 h- 8',
};

export const Switch: Atom<SwitchProps> = ({ size = 'default', ...props }) => {
  return (
    <label className="active:scale-[0.97] relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={props.checked}
        className="sr-only peer"
        onChange={props.onChange || emptyfn}
        {...props}
      />
      <div
        className={cn(
          "bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-primary-600",
          sizeClass[size],
        )}
      />
      {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Toggle me
      </span> */}
    </label>
  );
};
