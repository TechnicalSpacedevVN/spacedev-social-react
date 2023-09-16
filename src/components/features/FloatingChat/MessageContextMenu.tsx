import angryGif from '@assets/icon/angry.gif';
import careGif from '@assets/icon/care.gif';
import hahaGif from '@assets/icon/haha.gif';
import likeGif from '@assets/icon/like.gif';
import loveGif from '@assets/icon/love.gif';
import sadGif from '@assets/icon/sad.gif';
import wowGif from '@assets/icon/wow.gif';
import { ContextMenu } from '@components/atoms/ContextMenu';
import { IconCopy } from '@components/atoms/Icon/IconCopy';
import { IconEraser } from '@components/atoms/Icon/IconEraser';
import { IconForward } from '@components/atoms/Icon/IconForward';
import { IconQuote } from '@components/atoms/Icon/IconQuote';
import { Menu } from '@components/atoms/Menu';
export const MessageContextMenu: Atom<{ children: any }> = ({
  children,
  ...props
}) => {
  return (
    <ContextMenu
      width={267}
      className={props.className}
      content={
        <>
          <div className="flex gap-1.5">
            <img
              className="w-8 cursor-pointer hover:scale-125 transition-all"
              src={likeGif}
            />
            <img
              className="w-8 cursor-pointer hover:scale-125 transition-all"
              src={loveGif}
            />
            <img
              className="w-8 cursor-pointer hover:scale-125 transition-all"
              src={careGif}
            />
            <img
              className="w-8 cursor-pointer hover:scale-125 transition-all"
              src={hahaGif}
            />
            <img
              className="w-8 cursor-pointer hover:scale-125 transition-all"
              src={wowGif}
            />
            <img
              className="w-8 cursor-pointer hover:scale-125 transition-all"
              src={sadGif}
            />
            <img
              className="w-8 cursor-pointer hover:scale-125 transition-all"
              src={angryGif}
            />
          </div>
          <Menu
            menus={[
              {
                label: 'Trả lời',
                icon: <IconQuote />,
              },
              {
                label: 'Xóa tin nhắn với tất cả mọi người',
                icon: <IconEraser />,
              },
              {
                label: 'Sao chép',
                icon: <IconCopy />,
              },
              {
                label: 'Chuyển tiếp',
                icon: <IconForward />,
              },
            ]}
          />
        </>
      }
    >
      {children}
    </ContextMenu>
  );
};
