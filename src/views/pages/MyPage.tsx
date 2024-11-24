// import Header from "views/components/layouts/header/Header";
// import MyPageItems from "features/mypage/MyPageItems";
import * as Layouts from "views/components/layouts/Index"
import * as MyPages from "views/components/features/mypage/Index"

const MyPage = () => {
    return (
        <div>
            <Layouts.Header />
            <div>
                <h2>マイページ</h2>
            </div>
            <MyPages.MyPageItems />
        </div>
    );
};


export default MyPage;