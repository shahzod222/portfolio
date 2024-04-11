import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-vertical-timeline-component/style.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { AppProvider } from "./utils/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
