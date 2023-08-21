import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./constants/api.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  // </React.StrictMode>,
);
