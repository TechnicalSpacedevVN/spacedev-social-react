import { Avatar } from '@components/atoms/Avatar';
import { Button } from '@components/atoms/Button';
import { Dropdown } from '@components/atoms/Dropdown';
import { IconChevronDown } from '@components/atoms/Icon/IconChevronDown';
import { Menu } from '@components/atoms/Menu';
import { Tab } from '@components/atoms/Tab';
import { mockGroups } from '@utils/mock';
import { useState } from 'react';

export const MenuGroup = () => {
  const [groups] = useState(() => mockGroups(20));
  return (
    <div className="h-full px-10 flex flex-col">
      <Tab
        className=" pt-4 border-b border-base"
        itemClass="px-3"
        items={[
          {
            label: 'Danh sách nhóm',
            children: (
              <div className="flex flex-col flex-1 h-1">
                <div className="py-4 ">
                  <h3 className="text-title">Danh sách nhóm</h3>
                  <p className="text-sub">
                    Danh sách các nhóm mặc định khi một user được thêm vào hệ
                    thống, có thể cài đặt các thông tin mặc định trong nhóm
                  </p>
                </div>
                <div className="">
                  <Button type="primary" className="mt-4">
                    Tạo nhóm mới
                  </Button>
                </div>
                <div className="flex-1 pb-10 -mr-10 pr-10 overflow-auto">
                  <table className="w-full">
                    <thead className="text-left sticky top-0 bg-slate-900 z-10">
                      <tr>
                        <th className="text-sm font-semibold  py-4">Nhóm</th>
                        <th
                          className="text-sm font-semibold text-right  py-4"
                          style={{ width: 100 }}
                        >
                          Cài đặt
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&>tr:not(:last-child)]:last:border-b [&>tr:not(:last-child)]:border-base">
                      {groups.map((e) => (
                        <tr>
                          <td>
                            <div className="flex gap-2 py-2 items-center">
                              <Avatar size={40} src={e.avatar} />
                              <div>
                                <h3 className="text-sm font-semibold">
                                  {e.name}
                                </h3>
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
                                      label: 'Mặc định gia nhập',
                                    },
                                    {
                                      label: 'Không thể ',
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
                </div>
              </div>
            ),
          },
          {
            label: 'Cài đặt mặc định',
          },
        ]}
      />
    </div>
  );
};
