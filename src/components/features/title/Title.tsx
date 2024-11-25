import { Link } from "react-router-dom";
import { useUser } from "UserContext";

const Title = () => {

    const {user} = useUser();
    
    return (
        <div>
            <img src="/usa/usa_niko.png" alt="titleLogo" />
            <h3>ようこそ、{user.name}さん</h3>
            <p>いっしょにうさぎをいじめよう＾＾</p>
            <Link to="/game">うさぎをいじめる（ゲームをする）</Link><br></br>
            <Link to="/MyPage">マイページへ</Link><br></br>
            <Link to="/Register">新規登録</Link>
        </div>
    );
};

export default Title;