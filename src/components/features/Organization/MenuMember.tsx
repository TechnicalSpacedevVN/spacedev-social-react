import { Avatar } from '@components/atoms/Avatar';
import { Button } from '@components/atoms/Button';
import { Dropdown } from '@components/atoms/Dropdown';
import { IconChevronDown } from '@components/atoms/Icon/IconChevronDown';
import { Input } from '@components/atoms/Input';
import { Menu } from '@components/atoms/Menu';
import { Switch } from '@components/atoms/Switch';
import { Tab } from '@components/atoms/Tab';
import { mockUsers } from '@utils/mock';
import { useState } from 'react';
export const MenuMember = () => {
  const [manager] = useState(() => mockUsers(3));

  return (
    <div className="py-4 px-10">
      <Tab
        className="border-b border-base"
        itemClass="px-3"
        items={[
          {
            label: 'Cài đặt chung',
            children: (
              <div>
                <div className=" flex items-center mt-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">
                      Mở cho tất cả mọi người
                    </h3>
                    <p className="text-sub">
                      Disable the Share to web option in the Share menu on every
                      page in this workspace.
                    </p>
                  </div>
                  <Switch size="small" />
                </div>
                <div>
                  <div className=" flex items-center mt-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">
                        Link gia nhập tổ chức
                      </h3>
                      <p className="text-sub">
                        Mọi người khi có link sẽ không cần phải chờ xác nhận từ
                        chủ tổ chức
                      </p>
                    </div>
                  </div>
                  <Input
                    className="flex-1 mt-2"
                    disabled
                    value={
                      'https://spacedev.vn/join?rel=982734598374598347598374938457983475983475'
                    }
                    suffix={<Button type="primary">Copy</Button>}
                  />
                </div>
                <div className=" flex items-center mt-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">
                      Cho phép user tự thêm thành viên
                    </h3>
                    <p className="text-sub">
                      Disable the Share to web option in the Share menu on every
                      page in this workspace.
                    </p>
                  </div>
                  <Switch size="small" />
                </div>
                <div className=" flex items-center mt-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">
                      Cho phép sử dụng chức năng ẩn danh
                    </h3>
                    <p className="text-sub">
                      Disable the Share to web option in the Share menu on every
                      page in this workspace.
                    </p>
                  </div>
                  <Switch size="small" />
                </div>
                <div className="mt-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">
                      Danh sách quản trị viên
                    </h3>
                    <p className="text-sub">
                      Disable the Share to web option in the Share menu on every
                      page in this workspace.
                    </p>
                  </div>
                  <div className="mt-4">
                    <table className="w-full">
                      <thead className="text-left">
                        <tr>
                          <th className="text-sm font-semibold">
                            Quản trị viên
                          </th>
                          <th
                            className="text-sm font-semibold text-right"
                            style={{ width: 100 }}
                          >
                            Loại tài khoản
                          </th>
                        </tr>
                      </thead>
                      <tbody className="[&>tr:not(:last-child)]:last:border-b [&>tr:not(:last-child)]:border-base">
                        {manager.map((e) => (
                          <tr>
                            <td>
                              <div className="flex gap-2 py-2 items-center">
                                <Avatar size={40} src={e.avatar} />
                                <div>
                                  <h3 className="text-sm font-semibold">
                                    {e.fullName}
                                  </h3>
                                  <p className="text-black dark:text-white !text-opacity-60 text-sm">
                                    {e.email}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="text-right">
                              <Dropdown
                                arrow
                                placement="bottomRight"
                                content={
                                  <Menu
                                    menus={[
                                      {
                                        label: 'Owner',
                                      },
                                      {
                                        label: 'Manager',
                                      },
                                      {
                                        label: 'Editor',
                                      },
                                    ]}
                                  />
                                }
                              >
                                <Button
                                  size="small"
                                  iconSuffix={<IconChevronDown />}
                                >
                                  Owner
                                </Button>
                              </Dropdown>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <Button type="primary" className="mt-4">
                      Thêm người quản trị
                    </Button>
                  </div>
                </div>
              </div>
            ),
          },
          {
            label: 'Tất cả thành viên',
          },
          {
            label: 'Phương thức đăng nhập',
          },
          {
            label: 'Danh sách hạn chế',
          },
        ]}
      />
    </div>
  );
};
