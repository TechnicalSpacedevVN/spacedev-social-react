import { useClassNames } from '@hooks/useClassNames';
import { cn } from '@utils';
import { handleSelectEnd } from '@utils/element';
import { getFileFromPaste } from '@utils/file';
import { forwardRef } from 'react';

export interface MessageInput extends DefaultProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
  clearWhenEnter?: boolean;
  allowShiftEnter?: boolean;
  onPasteFile?: (file: File[]) => void;
}
export const MessageInput = forwardRef<HTMLParagraphElement, MessageInput>(
  ({ allowShiftEnter = true, clearWhenEnter = true, ...props }, inputRef) => {
    const classNames = useClassNames(
      'flex-1 w-full  px-3 py-2 max-h-[150px] overflow-auto bg-gray-200 rounded dark:bg-slate-700 text-sm',
      props.className,
    );

    return (
      <div
        className={cn(
          'py-1 min-h-[30px] outline-none after:text-gray-500 dark:after:text-slate-400 after:empty:content-[attr(placeholder)] after:absolute after:-translate-y-1/2 after:top-1/2 relative',
          classNames,
        )}
        spellCheck={false}
        ref={inputRef}
        onPaste={(pasteEvent) => {
          props.onPasteFile?.(getFileFromPaste(pasteEvent));
        }}
        onInput={(ev) => {
          if (!ev.currentTarget.innerText.trim()) {
            ev.currentTarget.innerHTML = '';
          }
          ev.currentTarget.innerText = ev.currentTarget.innerText;
          handleSelectEnd(ev.currentTarget);
          props.onChange?.(ev.currentTarget.innerHTML);
        }}
        onKeyDown={(ev) => {
          if (!ev.shiftKey && ev.key === 'Enter') {
            ev.preventDefault();

            props.onEnter?.(ev.currentTarget.innerHTML);

            if (clearWhenEnter) {
              ev.currentTarget.innerHTML = '';
            }
          }
          if (ev.shiftKey && ev.key === 'Enter') {
            ev.preventDefault();
            if (allowShiftEnter) {
              ev.currentTarget.innerHTML += '<div><br></div>';
              handleSelectEnd(ev.currentTarget);
            }
          }
        }}
        contentEditable
        suppressContentEditableWarning={true}
        placeholder={props.placeholder}
      ></div>
    );
  },
);
