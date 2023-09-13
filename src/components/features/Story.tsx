import { Avatar } from "@components/atoms/Avatar";
import { setDropFileData } from "@components/atoms/DropFile";
import { HorizontalScroll } from "@components/atoms/HorizontalScroll";
import { IconPlus } from "@components/atoms/Icon/IconPlus";
import { faker } from "@faker-js/faker";
import { mockStories } from "@utils/mock";
import { useState } from "react";

export const Story = () => {
  const [stories] = useState(() => mockStories(10));
  const [img] = useState(() => faker.image.url({ height: 400, width: 400 }));
  return (
    <HorizontalScroll
      height={250}
      itemWidth={150}
      className="dark:bg-slate-900 bg-white rounded-lg p-3 gap-3 "
    >
      <div className="p-1">
        <div className="active:scale-95 flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1 overflow-hidden w-full h-full">
          <div className="relative rounded-lg overflow-hidden w-full h-full">
            <div className="rounded-lg overflow-hiddens w-full h-full">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={img}
              />
            </div>
            <div className="flex flex-col gap-3 items-center justify-end  text-md p-4 bottom-0 left-0 right-0 rounded-lg  font-semibold whitespace-nowrap text-white absolute bg-gradient-to-t from-[#000000]  h-[100px] to-[#00000000]">
              <div className="w-7 h-7 flex items-center justify-center text-white bg-primary-500 hover:bg-primary-600 rounded-full shadow-[0_0_0_2px_white]">
                <IconPlus />
              </div>
              Tạo tin
            </div>
          </div>
        </div>
      </div>
      {stories.map((story) => (
        <div key={story.id} className="p-1 ">
          <div className=" active:scale-95 flex flex-col items-center relative cursor-pointer snap-always snap-center gap-1 overflow-hidden w-full h-full">
            <div className=" border-[2px] border-[#00ffe7] relative overflow-hidden w-full h-full rounded-xl  border-solid">
              <div className="absolute top-2 left-2 overflow-hidden rounded-full">
                <Avatar
                  src={story.user.avatar}
                  size={40}
                  border={{ size: 3 }}
                />
              </div>
              <div className="rounded-lg overflow-hiddens w-full h-full">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={story.src}
                  onDragStart={(ev) => {
                    setDropFileData(ev, "img", story.src);
                  }}
                />
              </div>
              <div className="text-xs flex items-end p-4 bottom-0 left-0 right-0 rounded-lg font-semibold whitespace-nowrap text-white absolute bg-gradient-to-t from-[#000000]  h-[100px] to-[#00000000]">
                <p className="line-clamp-1 w-full block text-ellipsis">
                  {story.user.fullName}
                </p>
              </div>
            </div>
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
