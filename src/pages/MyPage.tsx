import * as Layouts from "components/layouts/Index"
import * as MyPages from "components/features/mypage/Index"
import { AwsAuthProps } from "models/Types";
import { useUser } from "UserContext";

const MyPage = ({signOut}: AwsAuthProps ) => {

    const {user} = useUser();
    
    return (
        <div>
            <Layouts.Header />
            <div>
                <h2>マイページ</h2>
                {user && <button onClick={signOut}>サインアウト</button>}
            </div>
            <MyPages.UserItems />
        </div>
    );
};


export default MyPage;