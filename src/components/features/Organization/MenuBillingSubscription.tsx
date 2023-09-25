import { Button } from '@components/atoms/Button';
import { IconCheck } from '@components/atoms/Icon/IconCheck';
import { Tab } from '@components/atoms/Tab';
import { Link } from 'react-router-dom';

export const MenuBillingSubscription = () => {
  return (
    <div className="py-4 px-10">
      <Tab
        className="border-b border-base"
        itemClass="px-20"
        items={[
          {
            label: 'Plan',
            children: (
              <div className="flex flex-col gap-4">
                <div className="border-b border-base py-4">
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-1 flex-1">
                      <div className="text-title text-lg">Bao gồm</div>
                      <div className="gap-x-2 gap-y-1.5 mt-2 grid grid-cols-2 ">
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Đa dạng các
                          loại bài viết
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Tối đa 200
                          thành viên tham gia
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" />
                          Kết nối với các hệ thống như trello, github
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Lưu trữ lịch
                          sử trong vòng 7 ngày gần nhất
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Một người
                          quản lý
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Không giới
                          hạn số lượng nhóm có thể tạo
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Giới hạn 3
                          Bot được hoạt động
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Tối đa 20GB
                          database và storage lưu trữ
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" />
                          Bảo vệ thông tin thành viên kể cả "Chủ tổ chức"{' '}
                          <Link className="text-link" to="#">
                            Tài liệu
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="w-[200px]">
                      <h3 className="font-bold text-2xl">Free plan</h3>
                      <p className="text-sub">0$ / user / month</p>
                      <div className="flex flex-col mt-4 gap-2">
                        <Button
                          disabled
                          className="flex-1 whitespace-nowrap"
                          type="primary"
                        >
                          Selected
                        </Button>
                        <Button className="flex-1 whitespace-nowrap">
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-base py-4">
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-1 flex-1">
                      <div className="text-title text-lg">Bao gồm</div>
                      <div className="gap-x-2 gap-y-1.5 mt-2 grid grid-cols-2 ">
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Tất cả các
                          chức năng của gói Free plan
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Không giới
                          hạn số lượng thành viên tham gia
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Kết nối thêm
                          các hệ thống bên ngoài như jira
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Lưu trữ lịch
                          sử 30 ngày gần nhất
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Thêm nhiều
                          quản lý với các vai trò khác nhau
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Sử dụng các
                          Bot bên ngoài và có sẵn không giới hạn
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Cài đặt
                          webhook đến các hệ thống ngoài
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Dung lượng
                          lưu trữ 5GB / user
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" /> Thay đổi giao
                          diện mặc định theo nhu cầu
                        </div>
                      </div>
                    </div>
                    <div className="w-[200px]">
                      <h3 className="font-bold text-2xl">Community plan</h3>
                      <p className="text-sub">1$ / user / month</p>
                      <p className="text-sub">(Min 100 user)</p>
                      <div className="flex flex-col mt-4 gap-2">
                        <Button
                          className="flex-1 whitespace-nowrap"
                          type="primary"
                        >
                          Upgrade to Business
                        </Button>
                        <Button className="flex-1 whitespace-nowrap">
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-base py-4">
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col gap-1 flex-1">
                      <div className="text-title text-lg">Bao gồm</div>
                      <div className="gap-x-2 gap-y-1.5 mt-2 grid grid-cols-2 ">
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" />
                          Tất cả các chức năng của gói Community plan
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" />
                          Thêm loại bài viết theo yêu cầu
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" />
                          Sử dụng database và storage riêng của doanh nghiệp
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" />
                          Có người Support 24/7 riêng
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" />
                          Hỗ trợ setup và cài đặt hệ thống
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" />
                          Thống kê và report tự động chuyên nghiệp
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" />
                          Bộ công cụ dành riêng cho các công ty công nghệ
                        </div>
                        <div className="flex gap-1 items-start text-sm text-sub">
                          <IconCheck size={15} className="mt-1" />
                          Không giới hạn thời gian lưu lịch sử
                        </div>
                      </div>
                    </div>
                    <div className="w-[200px]">
                      <h3 className="font-bold text-2xl">Enterprise plan</h3>
                      <p className="text-sub">Custom / year</p>
                      <div className="flex flex-col mt-4 gap-2">
                        <Button
                          className="flex-1 whitespace-nowrap"
                          type="primary"
                        >
                          Contact
                        </Button>
                        <Button className="flex-1 whitespace-nowrap">
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          { label: 'Billing' },
        ]}
      />
    </div>
  );
};
