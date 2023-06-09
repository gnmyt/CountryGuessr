import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./styles.sass";

export const ActionCard = ({ title, icon, onClick }) => {
  return (
    <div className="glassy action-card" onClick={onClick}>
        <FontAwesomeIcon icon={icon} />
        <h1>{title}</h1>
    </div>
  );
}