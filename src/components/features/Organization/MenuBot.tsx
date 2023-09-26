import { Button } from '@components/atoms/Button';
import { Input } from '@components/atoms/Input';
import { SettingItem } from '@components/atoms/MenuModal';
import { Tab } from '@components/atoms/Tab';
import { Link } from 'react-router-dom';

export const MenuBot = () => {
  return (
    <div className="overflow-auto h-full px-10 py-4">
      <Tab
        items={[
          {
            label: 'Danh sách Bot',
            children: (
              <>
                <SettingItem
                  title="Cách sử dụng Bot"
                  sub={
                    <ul className="list-decimal list-inside">
                      <li>
                        Bạn có thể sử dụng Bot automation để gắn vào các group,
                        tin nhắn giúp tự động hóa công việc hằng ngày của bạn
                      </li>
                      <li>
                        Một Bot có thể gắn cho nhiều group, tin nhắn trả lời tự
                        động và có cài đặt riêng nếu có
                      </li>
                      <li>
                        Sử dụng các Bot có sẵn của chúng tôi hoặc Bot từ một bên
                        thứ 3 (có thể có phí). Bạn cũng có thể tự tạo một Bot
                        của riêng mình theo hướng dẫn{' '}
                        <Link
                          className="text-primary-500 dark:text-primary-400"
                          to="#"
                        >
                          Hướng dẫn tạo Bot
                        </Link>
                      </li>
                      <li>
                        Để gắn Bot vào group, tín nhắn,.. Vui lòng di chuyển đến
                        nơi cần gắn và vào phần "Cài đặt → Bot" và cài đặt theo
                        hướng dẫn
                      </li>
                    </ul>
                  }
                />
                <div className="mt-4">
                  <Button type="primary">Thêm Bot mới</Button>
                  <div className="border border-base rounded-lg p-4 mt-4 w-[400px] flex flex-col gap-2">
                    <Input label="Tên Bot" />
                    <Input label="Giới thiệu" />
                    {/* <Input label=''/> */}
                  </div>
                </div>
                <div className="py-4 gap-4 grid grid-cols-2">
                  <div className="border border-base rounded-lg p-4 hover:border-primary flex flex-col">
                    <h3 className="font-bold text-md">Đăng bài tự động</h3>
                    <p className="text-sub">
                      Bạn có các nguồn lấy tin tự động, bạn có danh sách bài
                      viết cần được lặp lịch đăngb bài. Nhiều cài đặt giúp bạn
                      đa dạng nội dung và thời gian đăng là điều mà Bot cung cấp
                      cho bạn
                    </p>
                    <div className="flex mt-auto gap-4 pt-4">
                      <Button className="flex-1" type="primary">
                        Cài đặt
                      </Button>
                      <Button className="flex-1">Document</Button>
                    </div>
                  </div>

                  <div className="border border-base rounded-lg p-4 hover:border-primary flex flex-col">
                    <h3 className="font-bold text-md">
                      Trả lời tin nhắn tự động
                    </h3>
                    <p className="text-sub">
                      Bạn muốn tài khoản của bạn trở nên tự động trả lời tin
                      nhắn với các kịch bản trả lời thông minh thì đây chính là
                      Bot mà bạn cần
                    </p>
                    <div className="flex mt-auto gap-4 pt-4">
                      <Button className="flex-1" type="primary">
                        Cài đặt
                      </Button>
                      <Button className="flex-1">Document</Button>
                    </div>
                  </div>
                  <div className="border border-base rounded-lg p-4 hover:border-primary flex flex-col">
                    <h3 className="font-bold text-md">
                      Thông báo deploy tự động
                    </h3>
                    <p className="text-sub">
                      Bạn có nhiều hệ thông đang deploy và bạn cần một nơi để
                      tra cứu thông tin, nhận thông báo deploy hoàn thành, thông
                      báo quá trình testing,... Thì đây chính là công cụ bạn cần
                    </p>
                    <div className="flex mt-auto gap-4 pt-4">
                      <Button className="flex-1" type="primary">
                        Cài đặt
                      </Button>
                      <Button className="flex-1">Document</Button>
                    </div>
                  </div>
                  <div className="border border-base rounded-lg p-4 hover:border-primary flex flex-col">
                    <h3 className="font-bold text-md">
                      Tự động lọc user không tương tác
                    </h3>
                    <p className="text-sub">
                      Bạn muốn quản lý nhóm chỉ gồm những thành viên tương tác
                      tích cực, quy định điều kiện lọc thành viên linh động, cài
                      đặt thời gian chạy tự động các thao tác trên một cách tự
                      động.
                    </p>
                    <div className="flex mt-auto gap-4 pt-4">
                      <Button className="flex-1" type="primary">
                        Cài đặt
                      </Button>
                      <Button className="flex-1">Document</Button>
                    </div>
                  </div>
                  <div className="border border-base rounded-lg p-4 hover:border-primary flex flex-col">
                    <h3 className="font-bold text-md">Thông báo tự động</h3>
                    <p className="text-sub">
                      Bạn có nhiều thông báo cần tự động, bằng một vài thao tác
                      cơ bản sẽ giúp bạn đạt được mục tiêu đó
                    </p>
                    <div className="flex mt-auto gap-4 pt-4">
                      <Button className="flex-1" type="primary">
                        Cài đặt
                      </Button>
                      <Button className="flex-1">Document</Button>
                    </div>
                  </div>
                </div>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};
