import { Card } from "@components/atoms/Card";
import { Dropdown } from "@components/atoms/Dropdown";
import {
  ButtonIconThreeDotAction,
  IconThreeDotAction,
} from "@components/atoms/Icon/IconThreeDotAction";
import { Menu } from "@components/atoms/Menu";
import { Tag } from "@components/atoms/Tag";

export const CardGroup = () => {
  return (
    <Card
      title="Nhóm đang tham gia"
      className="pb-6"
      action={
        <Dropdown
          placement="bottomRight"
          content={
            <Menu
              menus={[
                {
                  label: "Quản lý thông báo",
                },
                {
                  label: "Tìm nhóm",
                },
              ]}
            />
          }
        >
          <ButtonIconThreeDotAction transparent />
        </Dropdown>
      }
    >
      <div className="flex gap-2 mt-4 flex-wrap">
        <Tag>#Product</Tag>
        <Tag>#Website</Tag>
        <Tag>#Spacedev.vn</Tag>
        <Tag>#Reactjs</Tag>
        <Tag>#Nodejs</Tag>
        <Tag>#PHP</Tag>
        <Tag>#AWS</Tag>
        <Tag>#Python</Tag>
        <Tag>#Go</Tag>
      </div>
      {/* <div className="mt-3 gap-3 grid grid-cols-3 flex-wrap">
      <a href="#" className="">
        <div className="rounded-lg flex-1 overflow-hidden aspect-square">
          <img
            className="object-cover w-full h-full"
            src={`https://unsplash.it/150/150?t=${Math.random()}`}
          />
        </div>
        <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
          Ronald Peters
        </p>
      </a>
    </div> */}
    </Card>
  );
};
