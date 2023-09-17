import { cn } from '@utils';
import { useRef } from 'react';
import { ButtonIconChevronDown } from './Icon/IconChevronDown';
import { ButtonIconChevronUp } from './Icon/IconChevronUp';
export interface SliderProps {
  children?: any;
}

export const Slider: Atom<SliderProps> = ({ children, ...props }) => {
  const localRef = useRef<HTMLDivElement>(null);
  return (
    <div className="h-full relative">
      <div
        ref={localRef}
        className={cn(
          'flex flex-col gap-1 max-h-full w-full overflow-auto',
          props.className,
        )}
      >
        {children}
      </div>
      <ButtonIconChevronUp
        size={35}
        onClick={() => {
          localRef.current?.scrollBy({ top: -100, behavior: 'smooth' });
        }}
        className="!w-11 !h-11 z-10 absolute left-1/2 -translate-x-1/2 top-3"
      />
      <ButtonIconChevronDown
        size={35}
        onClick={() => {
          localRef.current?.scrollBy({ top: 100, behavior: 'smooth' });
        }}
        className="!w-11 !h-11 z-10 absolute left-1/2 -translate-x-1/2 bottom-3"
      />
    </div>
  );
};
