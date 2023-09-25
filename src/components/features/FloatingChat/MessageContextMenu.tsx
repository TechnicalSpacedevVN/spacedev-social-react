import { ContextMenu } from '@components/atoms/ContextMenu';
import { IconCopy } from '@components/atoms/Icon/IconCopy';
import { IconEraser } from '@components/atoms/Icon/IconEraser';
import { IconForward } from '@components/atoms/Icon/IconForward';
import { IconQuote } from '@components/atoms/Icon/IconQuote';
import { MessageEmoji } from './MessageEmoji';
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
      <MessageEmoji>{children}</MessageEmoji>
    </ContextMenu>
  );
};
