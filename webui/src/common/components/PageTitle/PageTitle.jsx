import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookAtlas} from "@fortawesome/free-solid-svg-icons";
import "./styles.sass";

export const PageTitle = () => (
    <div className="page-title">
        <FontAwesomeIcon icon={faBookAtlas} />
        <h1>CountryGuessr</h1>
    </div>
)