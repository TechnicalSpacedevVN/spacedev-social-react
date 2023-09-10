import { ButtonIconThreeDotAction } from "@components/atoms/Icon/IconThreeDotAction";
import { Dropdown } from "@components/atoms/Dropdown";
import { Menu } from "@components/atoms/Menu";
import { Modal, ModalProps } from "@components/atoms/Modal";
import { Tab } from "@components/atoms/Tab";
import { UserItem } from "@components/atoms/UserItem";

export interface ModalGroupChatProps extends ModalProps {}

export const ModalGroupChat: Atom<ModalGroupChatProps> = ({ ...props }) => {
  return (
    <Modal
      {...props}
      overlayCloseable
      width={400}
      height={400}
      title="Thành viên nhóm"
    >
      <Tab
        className="pt-3 justify-around border-b dark:border-slate-700"
        itemClass="pb-3 flex-1"
        items={[
          {
            label: "Thành viên",
            children: (
              <div className="flex flex-col gap-4 px-4 py-5 max-h-[400px] overflow-auto">
                {Array.from(new Array(10)).map((_, i) => (
                  <UserItem
                    key={i}
                    action={
                      <>
                        <Dropdown
                          placement="bottomRight"
                          content={
                            <Menu
                              menus={[
                                {
                                  label: "Xem trang cá nhân",
                                },
                                {
                                  label: "Nhắn tin",
                                },
                                {
                                  label: "Mời khỏi nhóm",
                                },
                              ]}
                            />
                          }
                        >
                          <ButtonIconThreeDotAction transparent />
                        </Dropdown>
                      </>
                    }
                  />
                ))}
              </div>
            ),
          },
          { label: "Ban quản trị" },
        ]}
      />
    </Modal>
  );
};