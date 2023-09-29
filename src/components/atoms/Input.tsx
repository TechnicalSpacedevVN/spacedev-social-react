import { forwardRef } from 'react';
import { cn } from '../../utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  error?: string;
  placeholder?: string;
  suffix?: any;
}

export const Input = forwardRef<HTMLLabelElement, InputProps>(
  ({ label, type = 'text', error, className, ...props }, ref) => {
    return (
      <label className={cn('block relative', className)} ref={ref}>
        {label && <p className="font-semibold text-sm mb-2">{label}</p>}
        <div
          className={cn(
            'flex text-sm h-full border-base border focus:!border-primary outline-none  w-full rounded dark:text-white dark:bg-slate-800 dark:border-slate-700',
            {
              '!border-red-500  dark:!border-red-500 ': error,
            },
          )}
        >
          <input className="p-2 bg-transparent w-full" type={type} {...props} />
          {props.suffix}
        </div>
        {error && (
          <p className="text-red-500 italic text-xs absolute -bottom-5">
            {error}
          </p>
        )}
      </label>
    );
  },
);
