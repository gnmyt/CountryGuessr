import {createContext, useState} from "react";
import {io} from "socket.io-client";

export const SocketContext = createContext({});

const URL = process.env.NODE_ENV === "production" ? "https://guessr-api.gnmyt.dev" : "http://localhost:5287";

export const SocketProvider = ({ children }) => {
    const socket = io(URL, {autoConnect: false});

    const connect = () => {
        socket.connect();
    }

    const send = (event, data) => {
        socket.emit(event, data);
    }

    const disconnect = () => {
        socket.disconnect();
    }

    const addListener = (event, callback) => {
        socket.on(event, callback);
    }

    return (
        <SocketContext.Provider value={{connect, disconnect, send, addListener}}>
            {children}
        </SocketContext.Provider>
    )
}