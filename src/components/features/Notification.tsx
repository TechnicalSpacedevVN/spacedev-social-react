import { Avatar } from '@components/atoms/Avatar';
import { Button } from '@components/atoms/Button';
import { Card } from '@components/atoms/Card';
import { Dropdown } from '@components/atoms/Dropdown';
import { ButtonIconSetting } from '@components/atoms/Icon/IconSetting';
import { ButtonIconThreeDotAction } from '@components/atoms/Icon/IconThreeDotAction';
import { InfinityLoading } from '@components/atoms/InfinityLoading';
import { Menu } from '@components/atoms/Menu';
import { cn } from '@utils';
import { INotification, fakeApi, mockNotifications } from '@utils/mock';
import moment from 'moment';
import { useState } from 'react';

interface RenderFunc {
  content(data: INotification): JSX.Element | undefined;
  action?(data: INotification): JSX.Element | undefined;
}
const NotificationType: { [k: string]: RenderFunc } = {
  AddFriend: {
    content: (noti) => (
      <>
        <b>{noti.user.fullName}</b> đã gửi cho bạn một lời mời kết bạn
      </>
    ),
    action: () => (
      <div className="flex gap-2 mt-2">
        <Button type="primary" className="min-w-[100px]">
          Đồng ý
        </Button>
        <Button className="min-w-[100px]">Từ chối</Button>
      </div>
    ),
  },
  Tag: {
    content: (noti) => (
      <>
        <b>{noti.user.fullName}</b> đã nhắc đến bạn trong một bài viết
      </>
    ),
  },
  Follow: {
    content: (noti) => (
      <>
        <b>{noti.user.fullName}</b> đã bắt đầu theo dõi bạn
      </>
    ),
  },
  Like: {
    content: (noti) => (
      <>
        <b>{noti.user.fullName}</b> đã thích bài viết của bạn
      </>
    ),
  },
  TagStory: {
    content: (noti) => (
      <>
        <b>{noti.user.fullName}</b> đã nhắc đến bạn trong một story
      </>
    ),
  },
};

export const Notification = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [loading, setLoading] = useState(false);
  return (
    <InfinityLoading
      haveNext
      loading={loading}
      onNext={async () => {
        setLoading(true);
        setNotifications([
          ...notifications,
          ...(await fakeApi(mockNotifications)),
        ]);
        setLoading(false);
      }}
      className="w-[400px] max-h-[calc(100vh-100px)] overflow-auto"
    >
      <Card
        title="Thông báo"
        titleClassName="pl-2"
        action={
          <Dropdown
            placement="bottomRight"
            content={
              <Menu
                menus={[
                  {
                    label: 'Đánh dấu tất cả là đã đọc',
                  },
                  {
                    label: 'Cài đặt nhận thông báo',
                  },
                  {
                    label: 'Tạm thời tắt thông báo',
                  },
                ]}
              />
            }
          >
            <ButtonIconSetting />
          </Dropdown>
        }
        className="dark:!bg-transparent max-h-full !px-0"
      >
        <div className="mt-3 max-h-fit flex-1 overflow-auto">
          {notifications.map((e) => (
            <NotificationItem
              isRead={e.isRead}
              key={e.id}
              content={NotificationType?.[e.type]?.content?.(e)}
              action={NotificationType?.[e.type].action?.(e)}
              time={moment(e.createdAt).fromNow()}
            />
          ))}
        </div>
      </Card>
    </InfinityLoading>
  );
};

const NotificationItem = (props: {
  content: any;
  time: any;
  action?: any;
  isRead?: boolean;
}) => {
  return (
    <a
      href="#"
      className="pl-4 [&:hover_.icon-action]:opacity-100 dark:text-white text-black rounded-lg flex gap-4 items-center hover:bg-black hover:bg-opacity-10 p-2 -ml-2"
    >
      <Avatar size={40} />
      <div className="flex flex-col flex-1">
        <p className="text-sm">{props.content}</p>
        <time className="text-sm text-blue-400">{props.time}</time>
        {props.action}
      </div>
      <div className="flex gap-1 items-center">
        <div className="icon-action opacity-0">
          <Dropdown
            placement="bottomRight"
            content={
              <Menu
                menus={[
                  { label: 'Đánh dấu chưa đọc' },
                  { label: 'Xóa' },
                  {
                    label: 'Ẩn thông báo từ người này',
                  },
                  {
                    label: 'Không nhận thông báo từ bài viết này',
                  },
                ]}
              />
            }
          >
            <ButtonIconThreeDotAction />
          </Dropdown>
        </div>
        <span
          className={cn('rounded-full w-3 h-3 bg-blue-500', {
            'opacity-0': props.isRead,
          })}
        ></span>
      </div>
    </a>
  );
};
