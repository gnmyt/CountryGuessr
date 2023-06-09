import "./styles.sass";
import PageTitle from "@/common/components/PageTitle";
import InfoArea from "@/pages/GameCreation/components/InfoArea";

export const GameCreation = () => {

    return (
        <div className="game-wrapper">

            <div className="title-area">
                <PageTitle allowBack={true} />
            </div>

            <div className="creation-area">
                <InfoArea />

                <div className="settings-area">

                </div>

            </div>
        </div>
    )

}