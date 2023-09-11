import { IconSpin } from "@components/atoms/Icon/IconSpin";
import { ButtonIconThreeDotAction } from "@components/atoms/Icon/IconThreeDotAction";
import { Avatar } from "@components/atoms/Avatar";
import { Button } from "@components/atoms/Button";
import { Card } from "@components/atoms/Card";
import { Dropdown } from "@components/atoms/Dropdown";
import { Menu } from "@components/atoms/Menu";
import { ButtonIconSetting } from "@components/atoms/Icon/IconSetting";

export const Notification = () => {
  return (
    <div className="w-[400px]  max-h-[calc(100vh-100px)] overflow-auto">
      <Card
        title="Thông báo"
        action={
          <Dropdown
            placement="bottomRight"
            content={
              <Menu
                menus={[
                  {
                    label: "Đánh dấu tất cả là đã đọc",
                  },
                  {
                    label: "Cài đặt nhận thông báo",
                  },
                  {
                    label: "Tạm thời tắt thông báo",
                  },
                ]}
              />
            }
          >
            <ButtonIconSetting />
          </Dropdown>
        }
        className="dark:!bg-slate-800"
      >
        <div className="mt-3 max-h-full flex-1">
          <NotificationItem
            content={
              <>
                <span className="font-semibold">Mark Ortega</span>
                &nbsp; Đã nhắc đến bạn trong một bài viết
              </>
            }
            time={"4 hours ago"}
          />
          <NotificationItem
            content={
              <>
                <span className="font-semibold">Mark Ortega</span>
                &nbsp; Đã nhắc đến bạn trong một bài viết
              </>
            }
            time={"4 hours ago"}
          />
          <NotificationItem
            content={
              <>
                <span className="font-semibold">Mark Ortega</span>
                &nbsp; đã gửi bạn một lời mời kết bạn
              </>
            }
            time={"4 hours ago"}
            action={
              <div className="flex gap-2 mt-2">
                <Button type="primary" className="min-w-[100px]">
                  Đồng ý
                </Button>
                <Button className="min-w-[100px]">Từ chối</Button>
              </div>
            }
          />
          <div className="flex justify-center my-3">
            <IconSpin />
          </div>
        </div>
      </Card>
    </div>
  );
};

const NotificationItem = (props: { content: any; time: any; action?: any }) => {
  return (
    <a
      href="#"
      className="[&:hover_.icon-action]:opacity-100 dark:text-white text-black rounded-lg flex gap-4 items-center hover:bg-black hover:bg-opacity-10 p-2 -ml-2"
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
                  { label: "Đánh dấu chưa đọc" },
                  { label: "Xóa" },
                  {
                    label: "Ẩn thông báo từ người này",
                  },
                  {
                    label: "Không nhận thông báo từ bài viết này",
                  },
                ]}
              />
            }
          >
            <ButtonIconThreeDotAction />
          </Dropdown>
        </div>
        <span className="rounded-full w-3 h-3 bg-blue-500"></span>
      </div>
    </a>
  );
};
