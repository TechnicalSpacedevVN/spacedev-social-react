import { Button } from '@components/atoms/Button';
import { useTranslate } from '@components/atoms/TranslateProvider';

export const MenuConnection = () => {
  const { t } = useTranslate();
  return (
    <div className="overflow-auto h-full">
      <div className="py-4 flex gap-4 flex-col px-10">
        <h3 className="text-title">{t('Discover new connections')}</h3>
        <div className="border border-base rounded-lg p-4 w-[400px] hover:border-primary">
          <h3 className="font-bold text-md">Chat GPT</h3>
          <p className="text-black dark:text-white text-sm !text-opacity-70">
            Viết bài trở nên dễ dàng hơn bằng ChatGPT giúp bài viết của bạn trở
            nên thu hút và nhiều tương tác hơn
          </p>
          <div className="flex mt-4 gap-4">
            <Button className="flex-1" type="primary">
              Cài đặt
            </Button>
          </div>
        </div>
        <div className="border border-base rounded-lg p-4 w-[400px] hover:border-primary">
          <h3 className="font-bold text-md">Github</h3>
          <p className="text-black dark:text-white text-sm !text-opacity-70">
            Quản lý thông tin bài tập cũng như quá trình học tập trở nên chuyên
            nghiệp hơn với Github
          </p>
          <div className="flex mt-4 gap-4">
            <Button className="flex-1" type="primary">
              Cài đặt
            </Button>
          </div>
        </div>
        <div className="border border-base rounded-lg p-4 w-[400px] hover:border-primary">
          <h3 className="font-bold text-md">Trello</h3>
          <p className="text-black dark:text-white text-sm !text-opacity-70">
            Quản lý công việc bằng trello trên chính nền tảng mạng xã hội giúp
            giảng viên dễ dàng nắm bắt tình hình học tập của học viên
          </p>
          <div className="flex mt-4 gap-4">
            <Button className="flex-1" type="primary">
              Cài đặt
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
