import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <h1>PRO×PRO</h1>
            <Link to="/">ホーム画面へ</Link>
            <Link to="/">MyPage</Link> {/*ハンバーガーメニューにする*/}
            
        </div>
    );
};

export default Header;