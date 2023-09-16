import { cn } from '@utils';
import { getFileFromPaste } from '@utils/file';
import { forwardRef, useRef, useState } from 'react';
import { ButtoniconEmotion } from './Icon/IconEmotion';
import { ButtoniconGIF } from './Icon/IconGIF';
import { ButtonIconUploadImage } from './Icon/IconUploadImage';
import { UploadFile, UploadfileRef } from './UploadFile';

export interface MessageInput extends DefaultProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
  clearWhenEnter?: boolean;
  allowShiftEnter?: boolean;
  onPasteFile?: (file: File[]) => void;
  onUploadImage?: (file: File[]) => void;
  includes?: ('gif' | 'emoji')[];
}
export const MessageInput = forwardRef<HTMLParagraphElement, MessageInput>(
  (
    { allowShiftEnter = true, clearWhenEnter = true, includes, ...props },
    inputRef,
  ) => {
    const uploadFileRef = useRef<UploadfileRef>(null);
    let [value, setValue] = useState('');
    return (
      <div
        className={cn(
          'flex gap-1 bg-gray-200 dark:bg-slate-700',
          props.className,
        )}
      >
        <div
          className={cn(
            'flex-1 w-full focus:caret-primary-500 focus:border-blue-500 focus:border-solid border-transparent border px-3 max-h-[150px] overflow-auto  rounded  text-sm py-1 min-h-[30px] outline-none relative',
            {
              'after:empty:text-gray-500 dark:after:empty:text-slate-400 after:empty:content-[attr(placeholder)] after:empty:absolute after:-translate-y-1/2 after:empty:top-1/2':
                !value,
            },
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
            // ev.currentTarget.innerText = ev.currentTarget.innerText;
            // handleSelectEnd(ev.currentTarget);
            props.onChange?.(ev.currentTarget.innerHTML);
            setValue(ev.currentTarget.innerText);
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
              // if (ev.currentTarget.innerHTML.endsWith('<br><br>')) {
              //   ev.currentTarget.innerHTML = ev.currentTarget.innerHTML.replace(
              //     /\<br\>\<br\>$/,
              //     '',
              //   );
              //   handleSelectEnd(ev.currentTarget);
              // }
              // if (allowShiftEnter) {
              //   ev.currentTarget.innerHTML += '<div><br></div>';
              //   handleSelectEnd(ev.currentTarget);
              // }
            }
            setValue(ev.currentTarget.innerText);
          }}
          contentEditable
          suppressContentEditableWarning={true}
          placeholder={props.placeholder}
        ></div>
        {props.onUploadImage && (
          <UploadFile
            className="rounded-full"
            ref={uploadFileRef}
            multiple
            onChange={props.onUploadImage}
          >
            <ButtonIconUploadImage transparent />
          </UploadFile>
        )}
        {includes?.includes('gif') && <ButtoniconGIF transparent />}
        {includes?.includes('emoji') && <ButtoniconEmotion transparent />}
      </div>
    );
  },
);
