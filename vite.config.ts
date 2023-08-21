import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let env = loadEnv(mode, process.cwd(), "");
  process.env = {
    ...process.env,
    ...env,
  };
  return {
    plugins: [react()],
    server: {
      port: parseInt(process.env.PORT) || 3000,
    },
  };
});
