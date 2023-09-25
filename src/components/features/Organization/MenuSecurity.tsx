import { Button } from '@components/atoms/Button';
import { Switch } from '@components/atoms/Switch';
import { useTranslate } from '@components/atoms/TranslateProvider';

export const MenuSecurity = () => {
  const { t } = useTranslate();
  return (
    <div className="py-4 px-10">
      <div className="border border-base rounded-lg p-4 w-[400px]">
        <h3 className="font-bold text-md">{t('Enterprise Plan')}</h3>
        <p className="text-sub">
          Nâng cấp gói Enterprise Plan để được sử dụng các chức năng bảo mật
          nâng cao dành riêng cho doanh nghiệp
        </p>
        <div className="flex mt-4 gap-4">
          <Button className="flex-1" type="primary">
            Upgrade to Business
          </Button>
          <Button className="flex-1">Learn more</Button>
        </div>
      </div>
      <div className=" flex items-center mt-4">
        <div className="flex-1">
          <h3 className="font-semibold text-sm">
            {t('Bảo vệ các bài viết công khai')}
          </h3>
          <p className="text-sub">
            Chỉ người dùng đã đăng nhập mới được phép xem các bài viết công
            khai, ngoại trừ google bot
          </p>
        </div>
        <Switch checked size="small" />
      </div>
      <div className=" flex items-center mt-4">
        <div className="flex-1">
          <h3 className="font-semibold text-sm">
            {t('Bảo vệ dữ liệu bằng mã hóa 2 chiều')}
          </h3>
          <p className="text-sub">
            Mã hóa đầu cuối tin nhắn người nhận và gửi bằng server riêng giúp
            đám bảo an toàn
          </p>
        </div>
        <Switch checked size="small" />
      </div>
      <div className=" flex items-center mt-4">
        <div className="flex-1">
          <h3 className="font-semibold text-sm">
            {t('Sử dụng blockchain để bảo vệ dữ liệu')}
          </h3>
          <p className="text-sub">
            Tin nhắn sẽ sử dụng blockchain để đảm bảo dữ liệu không bị chỉnh sửa
          </p>
        </div>
        <Switch checked size="small" />
      </div>
    </div>
  );
};
