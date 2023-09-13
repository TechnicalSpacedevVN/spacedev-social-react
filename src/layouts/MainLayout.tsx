import { DropFile } from "@components/atoms/DropFile";
import { FloatNotification } from "@components/features/FloatNotification";
import { mockUploadImage } from "@utils/mock";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../components/features/AuthProvider";
import { FloatingChat } from "../components/features/FloatingChat";
import { Header } from "../components/features/Header";
import "@utils/createTitleBadge";
import { createTitleBadge } from "@utils/createTitleBadge";
import { Event } from "@utils/event";
import { EventName } from "@constants/eventName";
export const MainLayout = () => {
  const { user } = useAuth();
  useEffect(() => {
    let title = document.title;
    let check = true;

    // select the target node
    const target = document.querySelector("title");

    // create an observer instance
    const observer = new MutationObserver(function (mutations) {
      // We need only first event and only new value of the title

      const newTitle = mutations[0].target.textContent || "";

      const regexp = new RegExp(`(.+) ${title}`);

      const check =
        title === newTitle ||
        regexp.test(mutations[0].target.textContent || "");
      if (!check) {
        title = newTitle;
      }
    });

    // configuration of the observer:
    const config = { subtree: true, characterData: true, childList: true };

    // pass in the target node, as well as the observer options
    if (target) {
      observer.observe(target, config);
    }

    setInterval(() => {
      let num = Math.round(Math.random() * 11);
      if (check) {
        createTitleBadge(num);
        document.title = `(${num}) ${title}`;
      } else {
        document.title = title;
        createTitleBadge(0);
      }
      check = !check;
    }, 1000);
  }, []);

  return (
    <DropFile
      isGlobal
      backdropClassName="hidden"
      includes={{
        img: (img) => {
          console.log(img);
          Event.emit(EventName.CreatePost, { images: [img] });
          console.log("main drop img");
        },
        files: async (files) => {
          console.log(files);
          const imgs: string[] = [];
          for (const i in files) {
            const imgSrc = await mockUploadImage(files[i]);
            imgs.push(imgSrc.path);
          }
          Event.emit(EventName.CreatePost, { images: imgs });
          console.log("main drop file");
        },
      }}
    >
      <main className="bg-gray-200 text-gray-800 dark:bg-slate-950 dark:text-slate-300">
        <Header />
        <Outlet />
        {user && <FloatingChat />}
        <FloatNotification />
      </main>
    </DropFile>
  );
};
