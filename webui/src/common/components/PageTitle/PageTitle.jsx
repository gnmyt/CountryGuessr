import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookAtlas} from "@fortawesome/free-solid-svg-icons";
import "./styles.sass";
import {useContext} from "react";
import {StateContext} from "@/common/contexts/StateContext";

export const PageTitle = ({allowBack = false}) => {
    const {setCurrentState} = useContext(StateContext);

    return (
        <div className={"page-title" + (allowBack ? " title-clickable" : "")} onClick={() => allowBack ? setCurrentState("Home") : ""}>
            <FontAwesomeIcon icon={faBookAtlas}/>
            <h1>CountryGuessr</h1>
        </div>
    );
}