import PageTitle from "@/common/components/PageTitle";
import "./styles.sass";
import ActionCard from "@/pages/Home/components/ActionCard";
import {faArrowRightToBracket, faPlusSquare} from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
    return (
        <div className="home-page">
            <PageTitle />
            <div className="action-area">
                <ActionCard title="Raum beitreten" icon={faArrowRightToBracket} onClick={() => {}} />
                <ActionCard title="Raum erstellen" icon={faPlusSquare} onClick={() => {}} />
            </div>
        </div>
    )
}
