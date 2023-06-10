import "./styles.sass";
import PageTitle from "@/common/components/PageTitle";
import InfoArea from "@/pages/GameCreation/components/InfoArea";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import SettingsArea from "@/pages/GameCreation/components/SettingsArea";
import {useContext, useState} from "react";
import {StateContext} from "@/common/contexts/StateContext";
import {SocketContext} from "@/common/contexts/SocketContext/index.js";

export const GameCreation = () => {
    const {setCurrentState} = useContext(StateContext);
    const {connect, send, addListener} = useContext(SocketContext);
    const [member, setMember] = useState([]);

    const startGame = () => {
        connect();

        addListener("room-created", (data) => {
            console.log(data);
        });

        addListener("user-connected", (data) => {
            setMember(members => [...members, data]);
        });

        addListener("user-disconnected", (data) => {
            setMember(members => members.filter(member => member.id !== data));
        });

        send("create-room", {name: "Test"});

        // setCurrentState("Game");
    }

    return (
        <div className="game-wrapper">
            <div className="title-area">
                <PageTitle allowBack={true} />
            </div>

            <div className="creation-area">
                <InfoArea members={member} />

                <div className="right-area">

                    <SettingsArea />

                    <button className="glassy start-btn" onClick={startGame}><FontAwesomeIcon icon={faPlay} /> Starten</button>
                </div>
            </div>
        </div>
    )

}