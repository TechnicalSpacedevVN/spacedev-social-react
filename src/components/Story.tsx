import { Avatar } from './atoms/Avatar';
import { BorderGradient } from './atoms/BorderGradient';
import { HorizontalScroll } from './atoms/HorizontalScroll';

export const Story = () => {
  return (
    <HorizontalScroll
      height={250}
      itemWidth={150}
      className="dark:bg-slate-900 bg-white rounded-lg p-3 gap-3 "
    >
      <div className="p-1">
        <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1 overflow-hidden w-full h-full">
          <BorderGradient
            size={3}
            className="relative rounded-lg overflow-hidden w-full h-full"
          >
            <div className="rounded-lg overflow-hiddens w-full h-full">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={'https://unsplash.it/400/400'}
              />
            </div>
            <div className="flex flex-col gap-3 items-center justify-end  text-md p-4 bottom-[3px] left-[3px] right-[3px] rounded-lg  font-semibold whitespace-nowrap text-white absolute bg-gradient-to-t from-[#000000]  h-[100px] to-[#00000000]">
              <div className="w-7 h-7 flex items-center justify-center text-white bg-primary-500 hover:bg-primary-600 rounded-full shadow-[0_0_0_2px_white]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus"
                  width={17}
                  height={17}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
              </div>
              Tạo tin
            </div>
          </BorderGradient>
        </div>
      </div>
      {Array.from(new Array(10)).map((_, i) => (
        <div key={i} className="p-1">
          <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1 overflow-hidden w-full h-full">
            <BorderGradient
              size={3}
              className="relative rounded-lg overflow-hidden w-full h-full"
            >
              <div className="p-0.5 bg-white  dark:bg-slate-900 absolute top-2 left-2 overflow-hidden rounded-full">
                <Avatar size={32} />
              </div>
              <div className="rounded-lg overflow-hiddens w-full h-full">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={`https://unsplash.it/400/400?t=${Math.random()}`}
                />
              </div>
              <p className="text-md flex items-end p-4 bottom-[3px] left-[3px] right-[3px] rounded-lg font-semibold whitespace-nowrap text-white absolute bg-gradient-to-t from-[#000000]  h-[100px] to-[#00000000]">
                Briggs
              </p>
            </BorderGradient>
          </div>
        </div>
      ))}
      {/* <div className="flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1 px-1 pt-[7px] mb-[-150px]">
        <BorderGradient
          size={3}
          className="relative rounded-lg overflow-hidden "
        >
          <div className="p-0.5 bg-white  dark:bg-slate-900 absolute top-2 left-2 overflow-hidden rounded-full">
            <Avatar size={32} />
          </div>
          <div className="rounded-lg overflow-hiddens w-full h-full">
            <img
              className="object-cover w-full h-full"
              src={'https://unsplash.it/400/400'}
            />
          </div>
        </BorderGradient>
        <p className="text-gray-900 text-small font-semibold whitespace-nowrap dark:text-white">
          Briggs
        </p>
      </div> */}
    </HorizontalScroll>
  );
};
