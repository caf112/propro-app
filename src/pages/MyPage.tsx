import * as Layouts from "components/layouts/Index"
import * as MyPages from "components/features/mypage/Index"

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