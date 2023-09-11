import { useState } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../../constants/path";
import { LOGIN_MODAL, setGlobalState } from "../../../store/queryClient";
import { useAuth } from "@components/features/AuthProvider";
import { useMode } from "@components/features/DarkModeProvider";
import { GeneralInfo } from "@components/features/GeneralInfo";
import { Avatar } from "../../atoms/Avatar";
import { Badge } from "../../atoms/Badge";
import { Button } from "../../atoms/Button";
import { Card } from "../../atoms/Card";
import { Dropdown } from "../../atoms/Dropdown";
import { Icon } from "../../atoms/Icon/Icon";
import { ButtonIconApplication } from "../../atoms/Icon/IconApplication";
import { ButtonIconChevronLeft } from "../../atoms/Icon/IconChevronLeft";
import { IconChevronRight } from "../../atoms/Icon/IconChevronRight";
import { IconClose } from "../../atoms/Icon/IconClose";
import { IconFeedback } from "../../atoms/Icon/IconFeedback";
import { IconLogout } from "../../atoms/Icon/IconLogout";
import { ButtonIconSetting } from "../../atoms/Icon/IconSetting";
import { ButtonIconThreeDotAction } from "../../atoms/Icon/IconThreeDotAction";
import { Step } from "../../atoms/Step";
import { Switch } from "../../atoms/Switch";
import { Notification } from "../Notification";
import { ModalLogin } from "./ModalLogin";
import { IconSearch } from "@components/atoms/Icon/IconSearch";

export const Header = () => {
  const { mode, toggleMode } = useMode();
  const [openLogin] = useState(false);
  const { user, logout } = useAuth();
  const [stepActive, setTabActive] = useState(0);

  return (
    <>
      <ModalLogin
        open={openLogin}
        onCancel={() => setGlobalState(LOGIN_MODAL, false)}
      />
      <header className="dark:bg-slate-900 bg-white h-header px-4 flex sticky top-0 z-10 border-b border-base">
        <div className="flex items-center gap-4 w-full">
          <div className="w-sidebar text-left">
            <Link
              to={PATH.Home}
              className="dark:text-white text-slate-800 text-2xl font-bold flex items-center gap-1"
            >
              {/* Fucin<span className="text-black px-1 ml-1 leading-8 inline-flex items-center rounded bg-[#ea8f1c]">srule</span> */}
              <img
                src="https://spacedev.vn/images/LOGO-image-full.svg"
                className="w-[25px]"
              />
              <span>Fucinsrule</span>
            </Link>
          </div>
          <Dropdown
            className="flex-1 relative max-w-main-content mx-auto"
            allowToggle={false}
            arrow={false}
            content={
              <Card
                title="Recent searches"
                className="dark:!bg-slate-800"
                action={
                  <a
                    href="#"
                    className="dark:hover:bg-slate-700 text-blue-500 hover:bg-gray-100 rounded px-3 py-0.5"
                  >
                    See all
                  </a>
                }
              >
                <div className="mt-3">
                  <div className="flex gap-3 items-center hover:bg-black hover:bg-opacity-20 p-2 -ml-2 rounded cursor-pointer">
                    <Avatar />
                    <p className="font-semibold flex-1">Loretta Copeland</p>
                    <IconClose size={17} transparent />
                  </div>
                  <div className="flex gap-3 items-center hover:bg-black hover:bg-opacity-20 p-2 -ml-2 rounded cursor-pointer">
                    <Avatar />
                    <p className="font-semibold flex-1">Gussie Mack</p>
                    <IconClose size={17} transparent />
                  </div>
                  <div className="flex gap-3 items-center hover:bg-black hover:bg-opacity-20 p-2 -ml-2 rounded cursor-pointer">
                    <Avatar />
                    <p className="font-semibold flex-1">Bernice Underwood</p>
                    <IconClose size={17} transparent />
                  </div>
                  <div className="flex gap-3 items-center hover:bg-black hover:bg-opacity-20 p-2 -ml-2 rounded cursor-pointer">
                    <Avatar />
                    <p className="font-semibold flex-1">Maggie Jenkins</p>
                    <IconClose size={17} transparent />
                  </div>
                  <div className="flex gap-3 items-center hover:bg-black hover:bg-opacity-20 p-2 -ml-2 rounded cursor-pointer">
                    <Avatar />
                    <p className="font-semibold flex-1">Flora Larson</p>
                    <IconClose size={17} transparent />
                  </div>
                  <div className="flex gap-3 items-center hover:bg-black hover:bg-opacity-20 p-2 -ml-2 rounded cursor-pointer">
                    <Avatar />
                    <p className="font-semibold flex-1">Agnes Chambers</p>
                    <IconClose size={17} transparent />
                  </div>
                </div>
              </Card>
            }
            popupClassName="max-w-full w-full !left-0"
            getPopupContainer={(parentNode) => parentNode}
          >
            <div className="dark:bg-slate-800 flex flex-1 bg-gray-100 rounded-full items-center gap-2 px-2 text-gray-600 h-7">
              <IconSearch />

              <input
                onClick={() => {}}
                placeholder="Search for everything...."
                className="placeholder:text-sm outline-none bg-transparent flex-1 text-black dark:text-white"
              />
            </div>
          </Dropdown>
          <div className="flex gap-3 w-sidebar justify-end h-full items-center [&>*]:h-full">
            {user ? (
              <>
                <div className="flex items-center">
                  <ButtonIconApplication />
                </div>
                <div className="flex items-center">
                  <Dropdown
                    getPopupContainer={(parentNode) => parentNode}
                    content={<Notification />}
                    arrow={false}
                    placement="bottomRight"
                  >
                    <Badge count={10}>
                      <Icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bell-ringing"
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
                          <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                          <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                          <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                          <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
                        </svg>
                      </Icon>
                    </Badge>
                  </Dropdown>
                </div>
                <Dropdown
                  getPopupContainer={(parentNode) => parentNode}
                  placement="bottomRight"
                  onClose={() => setTabActive(0)}
                  content={
                    <Step active={stepActive}>
                      <div className="w-[300px]">
                        <Link
                          to={PATH.Profile}
                          className="py-2 px-3 border-gray-300 rounded border-b border-solid text-gray-900 dark:text-white dark:border-slate-700 pb-3 hover:bg-black hover:bg-opacity-20 flex items-center gap-3"
                        >
                          <Avatar />
                          <h3 className="text-lg font-semibold">
                            Đặng Thuyền Vương
                          </h3>
                        </Link>
                        <div className="mt-3">
                          <a
                            onClick={(ev) => {
                              ev.preventDefault();
                              toggleMode();
                            }}
                            href="#"
                            className="px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                          >
                            <Icon className="dark:bg-slate-700">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-moon"
                                width={17}
                                height={17}
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                              </svg>
                            </Icon>
                            <p className="flex-1">Dark mode</p>
                            <Switch checked={mode === "dark"} />
                          </a>

                          <div
                            className="cursor-pointer px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                            onClick={() => setTabActive(2)}
                          >
                            <IconFeedback />
                            <p className="flex-1">Để lại góp ý</p>
                            <IconChevronRight />
                          </div>
                          <a
                            href=""
                            className=" px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                            onClick={(ev) => {
                              ev.preventDefault();
                              setTabActive(1);
                            }}
                          >
                            <ButtonIconSetting />
                            <p className="flex-1">Cài đặt</p>
                            <IconChevronRight />
                          </a>
                          <a
                            href=""
                            className="px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                            onClick={(ev) => {
                              ev.preventDefault();
                              logout();
                            }}
                          >
                            <IconLogout />
                            <p>Đăng xuất</p>
                          </a>
                          <GeneralInfo />
                        </div>
                      </div>
                      <div className="w-[300px]">
                        <h3 className="pt-2 dark:text-white text-lg font-bold flex gap-2 items-center">
                          <ButtonIconChevronLeft
                            onClick={() => setTabActive(0)}
                          />
                          Cài đặt
                        </h3>
                        <div className="mt-3">
                          <a
                            href="#"
                            className="h-12 px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                          >
                            Ngôn ngữ
                          </a>
                          <a
                            href="#"
                            className="h-12 px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                          >
                            Tùy chọn Bảng feed
                          </a>
                          <a
                            href="#"
                            className="h-12 px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                          >
                            Kiểm tra quyền riêng tư
                          </a>
                          <a
                            href="#"
                            className="h-12 px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                          >
                            Nhật ký hoạt động
                          </a>
                        </div>
                      </div>
                      <div className="w-[300px]">
                        <h3 className="pt-2 dark:text-white text-lg font-bold flex gap-2 items-center">
                          <ButtonIconChevronLeft
                            onClick={() => setTabActive(0)}
                          />
                          Trợ giúp & hỗ trợ
                        </h3>
                        <div className="mt-3">
                          <a
                            href="#"
                            className="h-12 px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                          >
                            Trung tâm trợ giúp
                          </a>
                          <a
                            href="#"
                            className="h-12 px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                          >
                            Hộp thư hỗ trợ
                          </a>
                          <a
                            href="#"
                            className="h-12 px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                          >
                            Báo cáo sự cố
                          </a>
                        </div>
                      </div>
                    </Step>
                  }
                >
                  <div className="active:scale-95 relative flex items-center">
                    <Avatar />
                    <Icon className="absolute !w-3 !h-3 right-0 -bottom-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-down"
                        width={10}
                        height={10}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6 9l6 6l6 -6" />
                      </svg>
                    </Icon>
                  </div>
                </Dropdown>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Button
                  type="red"
                  onClick={() => setGlobalState(LOGIN_MODAL, true)}
                >
                  Đăng nhập
                </Button>
                <Dropdown
                  getPopupContainer={(parentNode) => parentNode}
                  placement="bottomRight"
                  content={
                    <div className="w-[300px]">
                      <div className="mt-3">
                        <a
                          onClick={(ev) => {
                            ev.preventDefault();
                            toggleMode();
                          }}
                          href="#"
                          className="px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                        >
                          <Icon className="dark:bg-slate-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-moon"
                              width={17}
                              height={17}
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                            </svg>
                          </Icon>
                          <p className="flex-1">Dark mode</p>
                          <Switch checked={mode === "dark"} />
                        </a>

                        <a
                          href=""
                          className=" px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                        >
                          <IconFeedback />
                          <p>Để lại góp ý</p>
                        </a>
                        <a
                          href=""
                          className=" px-2 py-2 rounded hover:bg-black font-semibold hover:bg-opacity-20 flex gap-3 items-center text-gray-900 dark:text-white"
                        >
                          <ButtonIconSetting />
                          <p>Cài đặt</p>
                        </a>
                        <GeneralInfo />
                      </div>
                    </div>
                  }
                >
                  <div className="relative flex items-center">
                    <ButtonIconThreeDotAction />
                  </div>
                </Dropdown>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
