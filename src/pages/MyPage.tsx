import * as Layouts from "components/layouts/Index"
import * as MyPages from "components/features/mypage/Index"
// import { AwsAuthProps } from "models/Types";
import { useUser } from "UserContext";
import Login from "./Login";

const MyPage = () => {

    const {user} = useUser();
    
    return (
        <div>
            <Layouts.Header />
            <div>
                <h2>マイページ</h2>
            </div>
            <MyPages.UserItems />
            <Login />
        </div>
    );
};


export default MyPage;