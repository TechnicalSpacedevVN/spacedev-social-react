import { Avatar } from '@components/atoms/Avatar';
import { Button } from '@components/atoms/Button';
import { DropFile } from '@components/atoms/DropFile';
import { Dropdown } from '@components/atoms/Dropdown';
import { IconArrowDown } from '@components/atoms/Icon/IconArrow';
import { IconDropImage } from '@components/atoms/Icon/IconDropImage';
import { IconEye } from '@components/atoms/Icon/IconEye';
import { IconHacker } from '@components/atoms/Icon/IconHacker';
import { ButtonIconImage, IconImage } from '@components/atoms/Icon/IconImage';
import { ButtonIconListDetail } from '@components/atoms/Icon/IconListDetail';
import { IconLock } from '@components/atoms/Icon/IconLock';
import { IconPlus } from '@components/atoms/Icon/IconPlus';
import { ButtonIconPoll } from '@components/atoms/Icon/IconPoll';
import { ButtonIconTrash } from '@components/atoms/Icon/IconTrash';
import { IconUser } from '@components/atoms/Icon/IconUser';
import { ImageGrid } from '@components/atoms/ImageGrid';
import { Input } from '@components/atoms/Input';
import { Menu } from '@components/atoms/Menu';
import { SettingItem } from '@components/atoms/MenuModal';
import { Modal, ModalProps } from '@components/atoms/Modal';
import { Switch } from '@components/atoms/Switch';
import { useTranslate } from '@components/atoms/TranslateProvider';
import { UploadFile, UploadfileRef } from '@components/atoms/UploadFile';
import { Event } from '@utils/event';
import { IPost, mockUploadImage } from '@utils/mock';
import { uniqueId } from 'lodash';
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface ModalCreatePostProps extends ModalProps {
  post?: Partial<IPost>;
}

enum PopupEnum {
  Main,
  Poll,
}

export const ModalCreatePost: FC<ModalCreatePostProps> = ({
  post,
  ...props
}) => {
  const { t } = useTranslate();
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<string[]>([]);
  const uploadfileRef = useRef<UploadfileRef>(null);
  const [value, setValue] = useState('');
  const PostVisibility = useMemo(
    () => [
      { label: t('Public'), icon: <IconEye /> },
      { label: t('Just me only'), icon: <IconLock /> },
      { label: t('My friends only'), icon: <IconUser /> },
      { label: t('Anonymous'), icon: <IconHacker /> },
    ],
    [t],
  );
  const [popupOpen, setPopupOpen] = useState(PopupEnum.Main);

  const [visibility, setVisibility] = useState(PostVisibility[0]);
  useEffect(() => {
    if (post?.images) {
      setImages(post.images.map((e) => e.original) || []);
    }
  }, [post]);
  useEffect(() => {
    if (props.open) {
      inputRef.current?.focus();
    }
  }, [props.open]);

  useEffect(() => {
    const onCreatePost = (post: Partial<any>): void => {
      if (post?.images) {
        setImages([...images, ...post.images]);
      }
      setOpen(true);
    };
    Event.on('CreatePost', onCreatePost);
    return () => {
      Event.off('CreatePost', onCreatePost);
    };
  }, [images]);

  const openPopup = useCallback((type: PopupEnum, isOpen = true) => {
    setOpen(isOpen);
    setPopupOpen(type);
  }, []);

  const disableBtn = !value && images.length === 0;
  return (
    <>
      <ModalNewPoll
        open={open && popupOpen === PopupEnum.Poll}
        onCancel={() => openPopup(PopupEnum.Main)}
        onDone={() => openPopup(PopupEnum.Main)}
        keyboard={false}
        overlayCloseable={false}
      />
      <Modal
        {...props}
        open={open && popupOpen === PopupEnum.Main}
        onCancel={() => openPopup(PopupEnum.Main, false)}
        title={t('Create articles')}
        className="min-h-[600px]"
        keyboard={false}
        overlayCloseable={false}
      >
        <DropFile
          className="flex-1"
          backdropClassName="rounded-lg"
          includes={{
            files: async (files) => {
              uploadfileRef.current?.trigger(files);
            },
          }}
        >
          <div className="p-3 flex flex-col flex-1 w-main-content">
            <div className="flex gap-3">
              <Avatar size={40} />
              <div className="flex-1">
                <h3 className="font-bold">Charles Schwartz</h3>
                <Dropdown
                  getPopupContainer={(parentNode) => parentNode}
                  autoClose
                  content={
                    <Menu
                      onChange={(menu) =>
                        setVisibility(menu as (typeof PostVisibility)[0])
                      }
                      menus={PostVisibility}
                    />
                  }
                >
                  <Button
                    iconPrefix={visibility.icon}
                    iconSuffix={<IconArrowDown />}
                    size="small"
                    className="flex items-center"
                  >
                    {visibility.label}
                  </Button>
                </Dropdown>
              </div>
              <div>
                <Button>{t('Write content with AI')}</Button>
              </div>
            </div>

            <div className="max-h-[500px] overflow-auto ">
              <div
                ref={inputRef}
                placeholder={t(
                  'What do you want to say to the people you care about?..',
                )}
                className="block overflow-hidden stext-xl mb-2 bg-transparent outline-none w-full resize-none dark:after:text-white after:text-black after:!text-opacity-60 mt-3 after:empty:content-[attr(placeholder)] after:absolute after:-translate-y-1/2 after:top-1/2 relative"
                spellCheck={false}
                // onChange={(ev) => setValue(ev.target.value)}
                contentEditable
                onInput={(ev) => {
                  if (!ev.currentTarget.innerText.trim()) {
                    ev.currentTarget.innerHTML = '';
                  }
                  setValue(ev.currentTarget.innerHTML);
                }}
              ></div>
              <ImageGrid
                imgClassName="object-contain"
                images={images}
                onRemove={setImages}
              >
                {images.length > 0 && (
                  <Button
                    className="absolute z-10 top-2 left-2"
                    type="white"
                    iconPrefix={<IconImage className="text-black" />}
                    onClick={() => uploadfileRef.current?.trigger()}
                  >
                    {t('Add more Photo / Video')}
                  </Button>
                )}
              </ImageGrid>
              {images.length === 0 && (
                <UploadFile
                  onChange={async (files) => {
                    const imgs: string[] = [];
                    for (const i in files) {
                      const imgSrc = await mockUploadImage(files[i]);
                      imgs.push(imgSrc.path);
                    }
                    setImages([...images, ...imgs]);
                  }}
                >
                  <div className="p-3 rounded-lg border border-base mt-5">
                    <div className="w-full h-[300px] dark:bg-slate-800 dark:hover:bg-slate-700 cursor-pointer rounded-lg flex items-center justify-center">
                      <div className="flex flex-col items-center">
                        <IconDropImage />
                        <h3 className="text-title mt-4">
                          {t('Add more Photo / Video')}
                        </h3>
                        <p className="text-sub">{t('or drag and drop')}</p>
                      </div>
                    </div>
                  </div>
                </UploadFile>
              )}
            </div>

            <div className="flex gap-2 px-2 items-center mt-2 mb-2">
              <p className="text-sm">
                {t('Select content type you want to create?')}
              </p>
              <UploadFile
                onChange={async (files) => {
                  const imgs: string[] = [];

                  for (const i in files) {
                    const imgSrc = await mockUploadImage(files[i]);
                    imgs.push(imgSrc.path);
                  }
                  setImages([...images, ...imgs]);
                }}
                ref={uploadfileRef}
              >
                <ButtonIconImage />
              </UploadFile>
              <ButtonIconPoll onClick={() => openPopup(PopupEnum.Poll)} />
              <ButtonIconListDetail />
            </div>
            <div>
              <Button
                className="w-full"
                disabled={disableBtn}
                type={!disableBtn ? 'primary' : 'default'}
                loading
              >
                {t('Create articles')}
              </Button>
            </div>
          </div>
        </DropFile>
      </Modal>
    </>
  );
};

export interface ModalNewPollProps extends ModalProps {
  onDone?: (options: string[]) => void;
}
export const ModalNewPoll: Atom<ModalNewPollProps> = ({ ...props }) => {
  const { t } = useTranslate();
  const [options, setOptions] = useState([
    { id: uniqueId(), value: '' },
    { id: uniqueId(), value: '' },
  ]);
  return (
    <Modal
      {...props}
      title={t('Create new Poll')}
      footer={
        <div className="flex justify-end gap-3">
          <Button className="w-[100px]" onClick={props.onCancel}>
            {t('Back')}
          </Button>
          <Button
            className="w-[100px]"
            onClick={() => props.onDone?.(options.map((e) => e.value))}
            type="primary"
          >
            {t('Done')}
          </Button>
        </div>
      }
    >
      <div className="p-4 w-main-content flex flex-col gap-4 max-h-[500px] overflow-auto">
        <Input label={t('Your question')} />
        {options.map((e, i) => (
          <div key={e.id} className="flex  gap-2">
            <div className="flex-1">
              <Input label={`${t('Option')} ${i + 1}`} />
            </div>
            {i > 1 && (
              <ButtonIconTrash
                onClick={() =>
                  setOptions(options.filter((op) => op.id !== e.id))
                }
                className="mt-7 h-fit"
              />
            )}
          </div>
        ))}
        <div>
          <Button
            type="primary"
            iconPrefix={<IconPlus />}
            onClick={() =>
              setOptions([...options, { id: uniqueId(), value: '' }])
            }
          >
            {t('Add option')}
          </Button>
        </div>
        <div>
          <SettingItem
            title="Cho phép mọi người đóng góp ý kiến khác"
            prefix={<Switch />}
          />
          <SettingItem
            title="Đặt giới hạn thời gian cho Poll này"
            prefix={<Switch />}
          />
        </div>
      </div>
    </Modal>
  );
};
