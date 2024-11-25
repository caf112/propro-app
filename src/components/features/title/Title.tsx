import { Link } from "react-router-dom";
import { useUser } from "UserContext";

const Title = () => {

    const {user} = useUser();
    
    return (
        <div>
            <img src="/usa/usa_niko.png" alt="titleLogo" />
            {user.name ? (
                <h3>ようこそ、{user.name}さん</h3>
            ) : (
                <h3>ログインしてください</h3>
            )}
            <p>いっしょにうさぎをいじめよう＾＾</p>
            <Link to="/game" className="button" >うさぎをいじめる（ゲームをする）</Link>
            <Link to="/MyPage" className="button">マイページへ</Link>
            {!user.name && (
                <div>
                    <Link to="/Register" className="button">新規登録</Link>
                    <Link to="/" className="button">ログイン</Link>
                </div>
            )}
        </div>
    );
};

export default Title;