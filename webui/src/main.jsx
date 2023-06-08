import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@/common/styles/main.sass";
import BlurredBackground from "@/common/components/BlurredBackground";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BlurredBackground />

      <div className="app">
          <App />
      </div>

  </React.StrictMode>,
);