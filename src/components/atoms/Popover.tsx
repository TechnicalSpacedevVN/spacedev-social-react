import { cn } from '@utils';
import { useEffect, useRef, useState } from 'react';
export interface PopoverProps {
  children?: any;
  content?: any;
  placement?: 'bottom' | 'top';
  open?: boolean;
}
export const Popover: Atom<PopoverProps> = ({
  children,
  content,
  className,
  open,
}) => {
  const localRef = useRef<HTMLDivElement>(null);
  const [_open, setOpen] = useState(false);
  const checkRef = useRef(false);
  useEffect(() => {
    const onWindowClick = (): void => {
      if (!checkRef.current) {
        setOpen(false);
      }

      checkRef.current = false;
    };
    window.addEventListener('click', onWindowClick);
    return () => {
      window.removeEventListener('click', onWindowClick);
    };
  }, [checkRef]);
  //   const [position, setPosition] = useState();

  let $content = (
    <div
      onClick={(ev) => {
        ev.stopPropagation();
      }}
      className="absolute z-50 bottom-10 left-1/2 -translate-x-1/2 dark:bg-slate-900 bg-white shadow-2xl px-2 py-2 rounded-lg"
    >
      {content}
    </div>
  );
  return (
    <div ref={localRef} className={cn('relative', className)}>
      <div
        onClick={(ev) => {
          ev.stopPropagation();
          setOpen(!_open);
        }}
      >
        {children}
      </div>
      {typeof open !== 'undefined' ? open && $content : _open && $content}
    </div>
  );
};
