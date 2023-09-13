import { useShortcut } from '@hooks/useShortcut';
import { Observable } from '@utils/Observable';
import { FC, startTransition, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils';

const observable = new Observable();

document.body.addEventListener('click', (...args) => {
  observable.emit(args);
});

const container = document.createElement('div');
interface Position {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export interface DropdownProps {
  children?: any;
  className?: string;
  content?: any;
  arrow?: boolean;
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';
  getPopupContainer?: (parentNode: HTMLDivElement) => HTMLElement;
  popupClassName?: string;
  allowToggle?: boolean;
  onClose?: () => void;
  autoClose?: boolean;
  keyboard?: boolean;
}

const Arrow = () => {
  return (
    <svg
      height={12}
      viewBox="0 0 21 12"
      width={21}
      fill="currentColor"
      style={{ transform: 'scale(-1, -1) translate(0px, 0px)' }}
    >
      <path d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z" />
    </svg>
  );
};

export const Dropdown: FC<DropdownProps> = ({
  arrow = false,
  placement = 'bottomLeft',
  allowToggle = true,
  autoClose = false,
  keyboard = true,
  ...props
}) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const clickChildrenRef = useRef(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Position>({
    top: -99999,
    left: -99999,
  });
  useShortcut(
    `Escape`,
    () => {
      if (keyboard) {
        setOpen(false);
      }
    },
    [keyboard],
    open,
  );

  useEffect(() => {
    if (childrenRef.current) {
      const container = props?.getPopupContainer?.(childrenRef.current);

      const { top, left, height, right } =
        container?.getBoundingClientRect() ||
        childrenRef.current.getBoundingClientRect();

      const contentRect = contentRef.current?.getBoundingClientRect() || null;

      let pos: Position = {};
      if (placement === 'bottomLeft') {
        pos = {
          top: top + height,
          left,
        };
      } else if (placement === 'bottomRight') {
        pos = {
          top: top + height,
          right: window.innerWidth - right,
        };
      } else if (placement === 'topRight') {
        pos = {
          top: top - (contentRect?.height || 0),
          right: window.innerWidth - right,
        };
      }

      if (!props.getPopupContainer && typeof pos.top !== 'undefined') {
        pos.top += window.scrollY;
      }

      setPosition(pos);
    }
  }, [open, placement]);

  useEffect(() => {
    if (!open) props.onClose?.();
  }, [open]);

  useEffect(() => {
    const onClickBody = () => {
      if (!clickChildrenRef.current) {
        setOpen(false);
      }

      clickChildrenRef.current = false;
    };
    window.addEventListener('click', onClickBody);
    return () => {
      window.removeEventListener('click', onClickBody);
    };
  }, []);

  const _onClick = () => {
    clickChildrenRef.current = true;
    if (allowToggle) {
      startTransition(() => {
        setOpen(!open);
      });
    } else {
      startTransition(() => {
        setOpen(true);
      });
    }
  };

  return (
    <>
      <div
        onClick={_onClick}
        ref={childrenRef}
        className={cn('inline-flex gap-1 items-center', props.className)}
      >
        {props.children}
      </div>
      {open &&
        createPortal(
          <>
            {/* <div
              className="fixed top-0 left-0 w-screen h-screen z-[1000]"
              onClick={_onClose}
            ></div> */}
            <div
              onClick={(ev) => {
                if (autoClose) {
                  setOpen(false);
                } else {
                  ev.stopPropagation();
                }
              }}
              ref={contentRef}
              // onClick={(ev) => ev.stopPropagation()}
              style={{ ...position }}
              className={cn(
                'absolute p-2 dark:bg-slate-800 bg-white rounded-lg z-[1000] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]',
                props.popupClassName,
              )}
            >
              {arrow && (
                <div className="text-white dark:text-slate-800 top-[-6px] right-0 absolute">
                  <Arrow />
                </div>
              )}

              {props.content}
            </div>
          </>,
          props?.getPopupContainer?.(childrenRef.current || container) ||
            document.body,
        )}

      {/* {open && (
        <div
          className=" top-0 left-0 w-screen h-screen"
          onClick={() => setOpen(false)}
        >
          <div
            ref={contentRef}
            onClick={(ev) => ev.stopPropagation()}
            style={{ ...position }}
            className={cn(
              "absolute p-2 dark:bg-slate-800 bg-white rounded-lg z-1 shadow-[5px_5px_15px_rgba(0,0,0,0.5)]",
              props.popupClassName
            )}
          >
            {props.content}
          </div>
        </div>
      )} */}
    </>
  );
};
