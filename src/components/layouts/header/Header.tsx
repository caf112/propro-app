import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <Link to="/"><img src="/usa/usa_syun_te.png" alt="header-logo" style={{ width: '100px', height: 'auto' }} /></Link><br></br>{/* iconにする */}
            <Link to="/" className="button">ホーム画面へ</Link><br></br>{/* CSSでLinkをボタンに変更する */}
            <Link to="/" className="button">メニュー</Link> {/*ハンバーガーメニューにする*/}
            
        </div>
    );
};

export default Header;