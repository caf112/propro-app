import Title from "components/Title";
import GameContent from "components/GameContent";
import Header from "components/Header";
import { QuizGameProps } from "Domain/Types";

const GamePage = ({playerName}: QuizGameProps) => {
    return (
        <div>
            <Header />
            <GameContent playerName={playerName} />
        </div>
    );
};

export default GamePage;