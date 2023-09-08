import { FC, useState } from "react";
import { IconSpin } from "./Icon/IconSpin";
import { Avatar } from "./atoms/Avatar";
import { BorderGradient } from "./atoms/BorderGradient";
import { Button } from "./atoms/Button";
import { Modal } from "./atoms/Modal";
import { Tab } from "./atoms/Tab";
import { InfinityLoading } from "./atoms/InfinityLoading";
import { faker } from "@faker-js/faker";

export const ModalFriends: FC<{ open?: boolean; onCancel?: () => void }> = (
  props
) => {
  const [friends, setFriends] = useState(() => Array.from(new Array(20)));
  const [follow, setFollow] = useState(() => Array.from(new Array(20)));
  const [loading, setLoading] = useState(false);
  return (
    <Modal
      title="Friends"
      onCancel={props.onCancel}
      open={props.open}
      overlayCloseable
      width={500}
      height={500}
    >
      <Tab
        className="border-b dark:border-slate-700 w-full"
        itemClass="pb-4 pt-4 flex-1"
        items={[
          {
            label: "Bạn bè",
            children: (
              <InfinityLoading
                haveNext
                loading={loading}
                offset={200}
                onNext={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setFriends([...friends, ...Array.from(new Array(10))]);
                    setLoading(false);
                  }, 1000);
                }}
                className="px-3 flex flex-col gap-3 py-3 max-h-[400px] overflow-auto"
              >
                {friends.map((_, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <Avatar border={{}} size={40} />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {faker.person.fullName()}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {faker.person.jobTitle()}
                      </p>
                    </div>
                    <Button className="ml-auto">Remove</Button>
                  </div>
                ))}
              </InfinityLoading>
            ),
          },
          {
            label: "Đang theo dõi",
            children: (
              <InfinityLoading
                haveNext
                loading={loading}
                offset={200}
                onNext={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setFollow([...follow, ...Array.from(new Array(10))]);
                    setLoading(false);
                  }, 1000);
                }}
                className="px-3 flex flex-col gap-3 py-3 max-h-[400px] overflow-auto"
              >
                {follow.map((_, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <Avatar size={40} />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {faker.person.fullName()}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {faker.person.jobTitle()}
                      </p>
                    </div>
                    <Button className="ml-auto">Remove</Button>
                  </div>
                ))}
              </InfinityLoading>
            ),
          },
        ]}
      />
    </Modal>
  );
};
