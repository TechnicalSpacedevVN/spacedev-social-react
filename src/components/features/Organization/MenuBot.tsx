import { Button } from '@components/atoms/Button';

export const MenuBot = () => {
  return (
    <div className="overflow-auto h-full">
      <div className="py-4 gap-4 grid grid-cols-2 px-10">
        <div className="border border-base rounded-lg p-4 hover:border-primary flex flex-col">
          <h3 className="font-bold text-md">Thông báo deploy tự động</h3>
          <p className="text-black dark:text-white text-sm !text-opacity-70">
            Bạn có nhiều hệ thông đang deploy và bạn cần một nơi để tra cứu
            thông tin, nhận thông báo deploy hoàn thành, thông báo quá trình
            testing,... Thì đây chính là công cụ bạn cần
          </p>
          <div className="flex mt-auto gap-4 pt-4">
            <Button className="flex-1" type="primary">
              Cài đặt
            </Button>
            <Button className="flex-1">Learn more</Button>
          </div>
        </div>
        <div className="border border-base rounded-lg p-4 hover:border-primary flex flex-col">
          <h3 className="font-bold text-md">Đăng bài tự động</h3>
          <p className="text-black dark:text-white text-sm !text-opacity-70">
            Bạn có danh sách các bài viết, bạn có một nguồn để lấy tin tự động.
            Khi đến thời gian được cài đặt sẵn, Bot sẽ tiến hành các thao tác
            cần thiết để nội dung luôn được cập nhật liên tục giữa các nền tảng
          </p>
          <div className="flex mt-auto gap-4 pt-4">
            <Button className="flex-1" type="primary">
              Cài đặt
            </Button>
            <Button className="flex-1">Learn more</Button>
          </div>
        </div>
        <div className="border border-base rounded-lg p-4 hover:border-primary flex flex-col">
          <h3 className="font-bold text-md">Tìm bạn ở gần</h3>
          <p className="text-black dark:text-white text-sm !text-opacity-70">
            Sẽ thật thú vị nếu nền tảng của bạn cung cấp cho user các cách thức
            để kết nối với nhau
          </p>
          <div className="flex mt-auto gap-4 pt-4">
            <Button className="flex-1" type="primary">
              Cài đặt
            </Button>
            <Button className="flex-1">Learn more</Button>
          </div>
        </div>
        <div className="border border-base rounded-lg p-4 hover:border-primary flex flex-col">
          <h3 className="font-bold text-md">Lặp lịch học</h3>
          <p className="text-black dark:text-white text-sm !text-opacity-70">
            Nếu bạn đang cần một công cụ giúp bạn quản lý thời gian học tập thì
            đây chính là thứ bạn cần. Bot sẽ tự động xuất hiện ở màn hình và
            thông báo cho bạn đến thời gian cần phải tập trung để học tập
          </p>
          <div className="flex mt-auto gap-4 pt-4">
            <Button className="flex-1" type="primary">
              Cài đặt
            </Button>
            <Button className="flex-1">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
