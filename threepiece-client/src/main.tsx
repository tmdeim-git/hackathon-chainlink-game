import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThirdwebProvider } from "thirdweb/react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThirdwebProvider>
    <App />
  </ThirdwebProvider>
);
