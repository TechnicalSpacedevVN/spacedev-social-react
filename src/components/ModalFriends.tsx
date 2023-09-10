import { FC, useState } from "react";
import { IconSpin } from "./atoms/Icon/IconSpin";
import { Avatar } from "./atoms/Avatar";
import { BorderGradient } from "./atoms/BorderGradient";
import { Button } from "./atoms/Button";
import { Modal } from "./atoms/Modal";
import { Tab } from "./atoms/Tab";
import { InfinityLoading } from "./atoms/InfinityLoading";
import { faker } from "@faker-js/faker";
import { fakeApi, mockUser } from "@utils/mock";

export const ModalFriends: FC<{ open?: boolean; onCancel?: () => void }> = (
  props
) => {
  const [friends, setFriends] = useState(mockUser);
  const [follow, setFollow] = useState(mockUser);
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
                onNext={async () => {
                  setLoading(true);
                  let users = await fakeApi(mockUser);
                  setFriends([...friends, ...users]);
                  setLoading(false);
                }}
                className="px-3 flex flex-col gap-3 py-3 max-h-[400px] overflow-auto"
              >
                {friends.map((e, i) => (
                  <div key={e.id} className="flex gap-2 items-center">
                    <Avatar border={e.story ? {} : undefined} size={40} />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {e.fullName}
                      </h3>
                      <p className="text-xs text-gray-500">{e.jobTitle}</p>
                    </div>
                    <Button className="ml-auto">Hủy kết bạn</Button>
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
                onNext={async () => {
                  setLoading(true);
                  let users = await fakeApi(mockUser);
                  setFollow([...follow, ...users]);
                  setLoading(false);
                }}
                className="px-3 flex flex-col gap-3 py-3 max-h-[400px] overflow-auto"
              >
                {follow.map((e, i) => (
                  <div key={e.id} className="flex gap-2 items-center">
                    <Avatar border={e.story ? {} : undefined} size={40} />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {e.fullName}
                      </h3>
                      <p className="text-xs text-gray-500">{e.jobTitle}</p>
                    </div>
                    <Button className="ml-auto">Hủy theo dõi</Button>
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
