import { Button } from '@components/atoms/Button';
import { IconCheck } from '@components/atoms/Icon/IconCheck';

export const MenuBillingSubscription = () => {
  return (
    <div className="py-4 px-10 flex flex-col gap-4">
      <div className="border-b border-base p-4">
        <div className="flex gap-4 w-full">
          <div className="flex flex-col gap-1 flex-1">
            <div className="text-title text-lg">Bao gồm</div>
            <div className="gap-x-2 gap-y-1.5 mt-2 grid grid-cols-2 ">
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Đa dạng các loại bài
                viết
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Tối đa 200 thành viên
                tham gia
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" />
                Kết nối với các hệ thống như trello, github
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Lưu trữ lịch sử trong
                vòng 7 ngày gần nhất
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Một người quản lý
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Không giới hạn số lượng
                nhóm có thể tạo
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Cài đặt 3 Bot từ bên
                ngoài
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
                Upgrade to Business
              </Button>
              <Button className="flex-1 whitespace-nowrap">Learn more</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-base p-4">
        <div className="flex gap-4 w-full">
          <div className="flex flex-col gap-1 flex-1">
            <div className="text-title text-lg">Bao gồm</div>
            <div className="gap-x-2 gap-y-1.5 mt-2 grid grid-cols-2 ">
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Tất cả các chức năng
                của gói Free plan
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Không giới hạn số lượng
                thành viên tham gia
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Kết nối thêm các hệ
                thống bên ngoài như jira
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Lưu trữ lịch sử 30 ngày
                gần nhất
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Thêm nhiều quản lý với
                các vai trò khác nhau
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Cài đặt hoặc sử dụng
                các Bot có sẵn của chúng tôi không giới hạn
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Cho phép cài đặt các
                webhook đến các hệ thống bên ngoài
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Bộ công cụ dành riêng
                cho các công ty công nghệ
              </div>
            </div>
          </div>
          <div className="w-[200px]">
            <h3 className="font-bold text-2xl">Enterprise plan</h3>
            <p className="text-sub">3$ / user / month</p>
            <div className="flex flex-col mt-4 gap-2">
              <Button className="flex-1 whitespace-nowrap" type="primary">
                Upgrade to Business
              </Button>
              <Button className="flex-1 whitespace-nowrap">Learn more</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-base p-4">
        <div className="flex gap-4 w-full">
          <div className="flex flex-col gap-1 flex-1">
            <div className="text-title text-lg">Bao gồm</div>
            <div className="gap-x-2 gap-y-1.5 mt-2 grid grid-cols-2 ">
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Tất cả các chức năng
                của gói Enterprise plan
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Thêm loại bài viết theo
                ý muốn
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Liên kết với database
                riêng của doanh nghiệp
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Liên kết storage lưu
                trữ file riêng
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Được support liên tục
                từ chúng tôi
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Thống kê, report hệ
                thống
              </div>
              <div className="flex gap-1 items-start text-sm text-sub">
                <IconCheck size={15} className="mt-1" /> Giá phù hợp cho nhu cầu
                của bạn
              </div>
            </div>
          </div>
          <div className="w-[200px]">
            <h3 className="font-bold text-2xl">Master plan</h3>
            <p className="text-sub">custom / year</p>
            <div className="flex flex-col mt-4 gap-2">
              <Button className="flex-1 whitespace-nowrap" type="primary">
                Upgrade to Business
              </Button>
              <Button className="flex-1 whitespace-nowrap">Learn more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
