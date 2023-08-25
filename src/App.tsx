import { useRoutes } from "react-router-dom";
import "./assets/tailwind.css";
import { routes } from "./routes";
import { DarkModeProvider } from "./components/DarkModeProvider";
import { AuthProvider } from "./components/AuthProvider";
import { useEffect } from "react";
import { tokenStorage, userStorage } from "./utils/createStorage";
import { userService } from "./services/user";
import { USER_DATA_KEY } from "./constants/queryKey";
import {
  USER_LOGIN,
  getGlobalState,
  queryClient,
  setGloablState,
} from "./store/queryClient";
import { updateUserLocation } from "./utils/getLocation";

function App() {
  useEffect(() => {
    if (tokenStorage.get()) {
      userService.getUser().then((res) => {
        userStorage.set(res);
        setGloablState(USER_LOGIN, res);
      });
    }
  }, []);

  useEffect(() => {
    setInterval(updateUserLocation, 60_000);
  }, []);

  const element = useRoutes(routes);
  return (
    <DarkModeProvider>
      <AuthProvider>{element}</AuthProvider>
    </DarkModeProvider>
  );
}

export default App;
