import { Link } from "react-router-dom";

const Title = () => {
    return (
        <div>
            <img src="/logo192.png" alt="titleLogo" /><br></br>
            <Link to="/game">ゲームをする</Link>
        </div>
    );
};

export default Title;