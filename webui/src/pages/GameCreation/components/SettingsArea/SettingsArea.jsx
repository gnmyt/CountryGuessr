import "./styles.sass";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";

export const SettingsArea = () => (
    <div className="glassy settings-area">

        <div className="settings-title">
            <FontAwesomeIcon icon={faGear} />
            <h2>Einstellungen</h2>
        </div>

        <div className="settings-items">

            <div className="settings-item">
                <h2>Spielmodus</h2>
                <select className="glassy settings-input">
                    <option value="1">Einwohner</option>
                    <option value="2">Flächen</option>
                </select>
            </div>

            <div className="settings-item">
                <h2>Runden</h2>
                <select className="glassy settings-input">
                    {[...Array(10).keys()].map((i) => (
                        <option value={i} key={i}>{i} Runden</option>
                    ))}
                </select>
            </div>

            <div className="settings-item">
                <h2>Ratezeit</h2>
                <select className="glassy settings-input">
                    {[...Array(10).keys()].map((i) => (
                        <option value={i} key={i}>{i} Sekunden</option>
                    ))}
                </select>
            </div>

        </div>
    </div>
)