import { IconSpin } from "@components/Icon/IconSpin";
import { Tag } from "@components/atoms/Tag";
import { Activity } from "../components/Activity";
import { useAuth } from "../components/AuthProvider";
import { GeneralInfo } from "../components/GeneralInfo";
import { Message } from "../components/Message";
import { NewPost } from "../components/NewPost";
import { Post } from "../components/Post";
import { Story } from "../components/Story";
import { SuggestedForYou } from "../components/SuggestedForYou";
import { Button } from "../components/atoms/Button";
import { Card } from "../components/atoms/Card";
import { LOGIN_MODAL, setGlobalState } from "../store/queryClient";
import { InfinityLoading } from "@components/atoms/InfinityLoading";
import { useEffect, useState } from "react";

export const Home = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState(() => Array.from(new Array(3)));
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let event = () => {
      let offset =
        document.body.scrollHeight - window.scrollY - window.innerHeight;
      if (offset < 200) {
        setLoading(true);
        setTimeout(() => {
          setPosts([...posts, ...Array.from(new Array(10))]);
        }, 300);
      }
    };
    window.addEventListener("scroll", event);
    return () => {
      window.removeEventListener("scroll", event);
    };
  }, [posts]);

  return (
    <div className="px-4 flex w-full gap-4 mt-4">
      <div className="w-sidebar flex gap-4 flex-col sticky bottom-6 self-end">
        {user ? (
          <>
            <Activity />
            <SuggestedForYou />
            <Card
              title="Explore"
              action={
                <a href="#" className="text-gray-400 font-semibold text-xs">
                  See all
                </a>
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
            </Card>
          </>
        ) : (
          <>
            <div className="px-2">
              <p className="text-sm">
                Đăng nhập để thực hiện các hành động như like, comment, chia
                sẻ,...
              </p>
              <Button
                size="large"
                type="red"
                className="w-full mt-3"
                onClick={() => setGlobalState(LOGIN_MODAL, true)}
              >
                Đăng nhập
              </Button>
            </div>
          </>
        )}

        <GeneralInfo />
      </div>
      <div className="flex-1 w-1 pb-4 ">
        <div className="max-w-main-content mx-auto flex flex-col gap-4">
          {user && (
            <>
              <Story />
              <NewPost />
            </>
          )}

          <InfinityLoading
            loading={loading}
            haveNext
            className="flex flex-col gap-4"
          >
            {posts.map((e, i) => (
              <Post key={i} />
            ))}
          </InfinityLoading>
        </div>
      </div>
      <div className="w-sidebar flex gap-4 flex-col sticky self-end bottom-16">
        {user && <Message />}
      </div>
    </div>
  );
};
