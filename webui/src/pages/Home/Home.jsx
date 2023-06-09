import PageTitle from "@/common/components/PageTitle";
import "./styles.sass";
import ActionCard from "@/pages/Home/components/ActionCard";
import {faArrowRightToBracket, faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {StateContext} from "@/common/contexts/StateContext";
import {useContext} from "react";

export const Home = () => {
    const {setCurrentState} = useContext(StateContext);

    return (
        <div className="home-page">
            <PageTitle />
            <div className="action-area">
                <ActionCard title="Raum beitreten" icon={faArrowRightToBracket} onClick={() => {}} />
                <ActionCard title="Raum erstellen" icon={faPlusSquare} onClick={() => setCurrentState("GameCreation")} />
            </div>
        </div>
    );
}
