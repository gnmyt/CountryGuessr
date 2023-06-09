import "./styles.sass";
import PageTitle from "@/common/components/PageTitle/index.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobeEurope, faPaperPlane, faPeopleGroup, faUser} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const example = {
    "flag": "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
}

export const Game = () => {
    const [buttonState, setButtonState] = useState(false);
    const [guess, setGuess] = useState(0);

    return (
        <div className="active-wrapper">
            <div className="game-title">
                <PageTitle />
            </div>

            <div className="game-content">

                <div className="glassy task-area game-tab">
                    <img src={example.flag} alt="flag" />
                    <h2>Deutschland</h2>
                </div>

                <div className="guess-area game-tab">

                    <div className="glassy current-task">
                        <FontAwesomeIcon icon={faGlobeEurope} />
                        <h2>Einwohnerzahl raten</h2>
                    </div>

                    <div className="glassy guess-input">

                        <h2>Mein Tipp</h2>

                        <div className="input-wrapper">
                            <input type="number" placeholder="Einwohnerzahl" className="glassy" />
                            <button className="glassy guess-btn" onClick={() => setButtonState(!buttonState)}>
                                {buttonState ? "Mio" : "Tsd"}
                            </button>
                        </div>

                        <button className="glassy guess-btn"><FontAwesomeIcon icon={faPaperPlane} /> Absenden</button>
                    </div>

                    <div className="glassy solution-area">
                        <FontAwesomeIcon icon={faPeopleGroup} />
                        <h2>83,2 Millionen</h2>
                    </div>
                </div>

                <div className="glassy game-scoreboard game-tab">
                    <div className="scoreboard-header">
                        <h2>Scoreboard</h2>
                    </div>

                    <div className="scoreboard-content">

                        <div className="scoreboard-row">
                            <div className="scoreboard-left">
                                <FontAwesomeIcon icon={faUser} />
                                <h2>User 1</h2>
                            </div>
                            <div className="scoreboard-right">
                                <h2>5</h2>
                            </div>
                        </div>

                        <div className="scoreboard-row">
                            <div className="scoreboard-left">
                                <FontAwesomeIcon icon={faUser} />
                                <h2>User 2</h2>
                            </div>
                            <div className="scoreboard-right">
                                <h2>0</h2>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}