import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@/common/styles/main.sass";
import BlurredBackground from "@/common/components/BlurredBackground";
import {StateProvider} from "@/common/contexts/StateContext";
import {SocketProvider} from "@/common/contexts/SocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BlurredBackground/>

        <div className="app">
            <StateProvider>
                <SocketProvider>
                    <App/>
                </SocketProvider>
            </StateProvider>
        </div>

    </React.StrictMode>,
);