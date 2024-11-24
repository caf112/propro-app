import Header from "components/Header";
import MyPageItems from "components/MyPageItems";

const MyPage = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <h2>マイページ</h2>
            </div>
            <MyPageItems />
        </div>
    );
};


export default MyPage;