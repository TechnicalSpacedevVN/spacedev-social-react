import { fakeApi, mockUsers } from "@utils/mock";
import { useState } from "react";
import { Avatar } from "@components/atoms/Avatar";
import { Badge } from "@components/atoms/Badge";
import { Card } from "@components/atoms/Card";
import { Dropdown } from "@components/atoms/Dropdown";
import { IconSearch } from "@components/atoms/Icon/IconSearch";
import { ButtonIconThreeDotAction } from "@components/atoms/Icon/IconThreeDotAction";
import { InfinityLoading } from "@components/atoms/InfinityLoading";
import { Menu } from "@components/atoms/Menu";
import { Tab } from "@components/atoms/Tab";

export const Message = () => {
  const [users, setUsers] = useState(() => mockUsers(20));
  const [loading, setLoading] = useState(false);
  return (
    <Card
      title="Tin nhắn"
      action={
        <Dropdown
          placement="bottomRight"
          content={
            <Menu
              menus={[
                { label: "Âm thanh khi có người gọi" },
                { label: "Âm thanh khi có tin nhắn tới" },
                { label: "Tự động mở khi có tin nhắn mới" },
                { line: true },
                { label: "Trạng thái hoạt động" },
                { label: "Tin nhắn chờ" },
                { label: "Tin nhắn chờ" },
              ]}
            />
          }
        >
          <ButtonIconThreeDotAction transparent />
        </Dropdown>
      }
      className="h-[calc(100vh-130px)] flex flex-col"
    >
      <div className="flex flex-col flex-1 h-1">
        <div className="dark:bg-slate-800 flex mt-4 bg-gray-100 rounded-full items-center gap-2 px-2 text-gray-600 min-h-7 h-7">
          <IconSearch />

          <input
            placeholder="Search messages...."
            className="text-xs flex-1 placeholder:text-xs outline-none bg-transparent"
          />
        </div>
        <div className="flex-1 flex flex-col h-1">
          <Tab
            className="mt-3 gap-3 [&>a:last-child]:ml-auto"
            itemClass="whitespace-nowrap"
            items={[
              {
                label: "Cá nhân",
                children: (
                  <InfinityLoading
                    loading={loading}
                    className="mt-4 flex flex-col gap-4 overflow-auto pt-2 flex-1 h-1"
                    haveNext={true}
                    offset={200}
                    onNext={async () => {
                      setLoading(true);
                      const res = await fakeApi(mockUsers);
                      setUsers([...users, ...res]);
                      setLoading(false);
                    }}
                  >
                    <div className="flex flex-col gap-4">
                      {users.map((user, i) => (
                        <div
                          key={i}
                          className="flex gap-2 items-center px-[1px]"
                        >
                          <Badge count={user.messageCount}>
                            <Avatar
                              showStatus
                              size={36}
                              src={user.avatar}
                              online={user.online}
                              border={user.story ? {} : undefined}
                            />
                          </Badge>
                          <div className="flex-1 ">
                            <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                              {user.fullName}
                            </h4>
                            <p className="text-xs text-gray-500">
                              Active 30m ago
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </InfinityLoading>
                ),
              },
              { label: "Nhóm", children: "Nhóm" },
              {
                label: (
                  <div className="ml-auto">
                    <span className="dark:text-purple-400 text-purple-800 text-xs font-semibold">
                      Yêu cầu (2)
                    </span>
                  </div>
                ),
                children: "Request",
              },
            ]}
          />
          {/* <div className="flex justify-between items-baseline"></div> */}
        </div>
      </div>
    </Card>
  );
};
