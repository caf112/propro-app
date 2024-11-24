import { Link } from "react-router-dom";

const Title = () => {
    return (
        <div>
            <img src="/logo192.png" alt="titleLogo" /><br></br>
            <Link to="/game">ゲームをする</Link><br></br>
            <Link to="/MyPage">マイページへ</Link><br></br>
            <Link to="/Register">新規登録</Link>
        </div>
    );
};

export default Title;