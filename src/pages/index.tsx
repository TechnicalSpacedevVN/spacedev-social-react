import { IconSpin } from "@components/atoms/Icon/IconSpin";
import { Tag } from "@components/atoms/Tag";
import { Activity } from "../components/features/Activity";
import { useAuth } from "../components/features//AuthProvider";
import { GeneralInfo } from "../components/features//GeneralInfo";
import { Message } from "../components/features//Message";
import { NewPost } from "../components/features//NewPost";
import { Post } from "../components/features//Post";
import { Story } from "../components/features//Story";
import { SuggestedForYou } from "../components/features//SuggestedForYou";
import { Button } from "../components/atoms/Button";
import { Card } from "../components/atoms/Card";
import { LOGIN_MODAL, setGlobalState } from "../store/queryClient";
import { InfinityLoading } from "@components/atoms/InfinityLoading";
import { useEffect, useState } from "react";
import { fakeApi, mockPost } from "@utils/mock";
import { useTitle } from "@hooks/useTitle";
import { CardGroup } from "@components/features/CardGroup";

export const Home = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState(() => mockPost(3));
  const [loading, setLoading] = useState(false);
  useTitle("Spacedev facinsrule");

  useEffect(() => {
    let event = () => {
      let offset =
        document.body.scrollHeight - window.scrollY - window.innerHeight;
      if (offset < 200) {
        setLoading(true);
        fakeApi(() => mockPost(5)).then((res) => {
          setPosts([...posts, ...res]);
          setLoading(false);
        });
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
            <SuggestedForYou />
            <CardGroup />
            <Activity />
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
