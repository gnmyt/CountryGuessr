import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import "./styles.sass";

export const Member = ({name}) => (
    <div className="glassy member">
        <FontAwesomeIcon icon={faUser} />
        <p>{name}</p>
    </div>
)
