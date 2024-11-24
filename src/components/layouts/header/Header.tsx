import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <Link to="/"><img src="/logo192.png" alt="titleLogo" /></Link><br></br>{/* iconにする */}
            <Link to="/">ホーム画面へ</Link><br></br>{/* CSSでLinkをボタンに変更する */}
            <Link to="/">メニュー</Link> {/*ハンバーガーメニューにする*/}
            
        </div>
    );
};

export default Header;