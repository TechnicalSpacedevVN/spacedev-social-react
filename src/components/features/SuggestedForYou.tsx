import { Card } from "@components/atoms/Card";
import { UserItem } from "@components/atoms/UserItem";
import { IconAddFriend } from "@components/atoms/Icon/IconAddFriend";
import { ButtonIconThreeDotAction } from "@components/atoms/Icon/IconThreeDotAction";
import { Dropdown } from "@components/atoms/Dropdown";
import { Menu } from "@components/atoms/Menu";
import { Switch } from "@components/atoms/Switch";
import { useState } from "react";
import { mockUsers } from "@utils/mock";

export const SuggestedForYou = () => {
  const [enabled, setEnabled] = useState(true);
  const [users] = useState(mockUsers);
  return (
    <Card
      title="Những người ở gần"
      action={
        <Dropdown
          placement="bottomLeft"
          autoClose={false}
          content={
            <Menu
              menus={[
                {
                  label: (
                    <div
                      onClick={(ev) => {
                        ev.preventDefault();
                        setEnabled(!enabled);
                      }}
                      className="flex items-center gap-5"
                    >
                      Bật / tắt chia sẻ vị trí
                      <Switch checked={enabled} />
                    </div>
                  ),
                },
              ]}
            />
          }
        >
          <ButtonIconThreeDotAction transparent />
        </Dropdown>
      }
    >
      <div className="mt-4 flex flex-col gap-4">
        {enabled ? (
          users.map((u) => (
            <UserItem
              key={u.id}
              sub="3km"
              user={u}
              action={<IconAddFriend />}
            />
          ))
        ) : (
          <p className="text-sm text-center">
            Vui lòng chia sẻ vị trí để sử dụng chức năng này
          </p>
        )}
      </div>
    </Card>
  );
};
