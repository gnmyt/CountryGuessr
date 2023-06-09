import "./styles.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import Member from "@/pages/GameCreation/components/InfoArea/components/Member";

export const InfoArea = () => {

    return (
        <div className="info-area">
            <h1>Spiel erstellen</h1>
            <p className="info-subtext">Lade bis zu 10 Freunde ein!</p>

            <div className="member-area">

                <div className="member-title">
                    <FontAwesomeIcon icon={faUserGroup} />
                    <p>Mitspieler</p>
                </div>

                <div className="member-grid">

                    <Member name="User" />

                    <Member name="User Nr. 2" />

                </div>
            </div>

        </div>
    );

}