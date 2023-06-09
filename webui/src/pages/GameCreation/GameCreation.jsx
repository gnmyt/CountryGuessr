import "./styles.sass";
import PageTitle from "@/common/components/PageTitle";
import InfoArea from "@/pages/GameCreation/components/InfoArea";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import SettingsArea from "@/pages/GameCreation/components/SettingsArea";
import {useContext} from "react";
import {StateContext} from "@/common/contexts/StateContext";

export const GameCreation = () => {
    const {setCurrentState} = useContext(StateContext);

    const startGame = () => setCurrentState("Game");

    return (
        <div className="game-wrapper">
            <div className="title-area">
                <PageTitle allowBack={true} />
            </div>

            <div className="creation-area">
                <InfoArea />

                <div className="right-area">

                    <SettingsArea />

                    <button className="glassy start-btn" onClick={startGame}><FontAwesomeIcon icon={faPlay} /> Starten</button>
                </div>
            </div>
        </div>
    )

}