import {createContext, useState} from "react";

export const StateContext = createContext({});

export const StateProvider = ({ children }) => {
    const [currentState, setCurrentState] = useState("Home");

    return (
        <StateContext.Provider value={{currentState, setCurrentState}}>
            {children}
        </StateContext.Provider>
    )
}