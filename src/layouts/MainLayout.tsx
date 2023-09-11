import { FloatNotification } from "@components/features/FloatNotification";
import { Outlet } from "react-router-dom";
import { useAuth } from "../components/features/AuthProvider";
import { Header } from "../components/features/Header";
import { FloatingChat } from "../components/features/FloatingChat";
import { useEffect } from "react";

export const MainLayout = () => {
  const { user } = useAuth();
  useEffect(() => {
    let title = document.title;
    let check = true;
    let count = 1;

    // select the target node
    var target = document.querySelector("title");

    // create an observer instance
    var observer = new MutationObserver(function (mutations) {
      // We need only first event and only new value of the title

      let newTitle = mutations[0].target.textContent || "";

      let regexp = new RegExp(`(.+) ${title}`);

      let check =
        title === newTitle ||
        regexp.test(mutations[0].target.textContent || "");
      if (!check) {
        title = newTitle;
      }
    });

    // configuration of the observer:
    var config = { subtree: true, characterData: true, childList: true };

    // pass in the target node, as well as the observer options
    if (target) {
      observer.observe(target, config);
    }

    setInterval(() => {
      if (check) {
        document.title = `(${count}) ${title}`;
      } else {
        document.title = title;
      }
      check = !check;
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {user && <FloatingChat />}
      <FloatNotification />
    </>
  );
};
