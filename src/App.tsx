import { useRoutes } from "react-router-dom";
import "./assets/tailwind.css";
import { routes } from "./routes";
import { DarkModeProvider } from "./components/DarkModeProvider";
import { AuthProvider } from "./components/AuthProvider";
import { useEffect } from "react";
import { tokenStorage, userStorage } from "./utils/createStorage";
import { userService } from "./services/user";
import { queryClient } from "./main";
import { USER_DATA_KEY } from "./constants/queryKey";

function App() {
  useEffect(() => {
    if (tokenStorage.get()) {
      userService.getUser().then((res: any) => {
        userStorage.set(res);
        queryClient.setQueriesData([USER_DATA_KEY], res);
        queryClient.invalidateQueries([USER_DATA_KEY]);
      });
    }
  }, []);
  const element = useRoutes(routes);
  return (
    <DarkModeProvider>
      <AuthProvider>{element}</AuthProvider>
    </DarkModeProvider>
  );
}

export default App;
