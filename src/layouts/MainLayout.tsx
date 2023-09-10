import { FloatNotification } from "@components/features/FloatNotification";
import { Outlet } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
import { Header } from "../components/features/Header";
import { FloatingChat } from "../components/features/FloatingChat";

export const MainLayout = () => {
  const { user } = useAuth();
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
