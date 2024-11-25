import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <Link to="/"><img src="/usa/usa_syun_te.png" alt="header-logo" /></Link>{/* iconにする */}
            <Link to="/">ホーム画面へ</Link><br></br>{/* CSSでLinkをボタンに変更する */}
            <Link to="/">メニュー</Link> {/*ハンバーガーメニューにする*/}
            
        </div>
    );
};

export default Header;