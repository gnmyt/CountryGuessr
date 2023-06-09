import Home from "./pages/Home";
import {useContext} from "react";
import {StateContext} from "@/common/contexts/StateContext";
import GameCreation from "@/pages/GameCreation";
import Game from "@/pages/Game";
import LegalArea from "@/common/components/LegalArea";

const App = () => {
    const {currentState} = useContext(StateContext);

    return (
        <>
            {currentState === "Home" && <Home />}
            {currentState === "GameCreation" && <GameCreation />}
            {currentState === "Game" && <Game />}

            <LegalArea />
        </>
    )
}

export default App
