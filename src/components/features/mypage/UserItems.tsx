import { useUser } from "UserContext";
import * as Elements from "components/elements/Index"
import { Link } from "react-router-dom";

const UserItems = () => {

    const {user} = useUser();

    if (!user) {
        return (
            <div>
                <p>ログインしてください</p>
                <Link to="/Register" className="button">ログイン</Link>
            </div>
        );
    }

    return (
        <div>
            <div>
                <Elements.ChangeButton path="/register" label="変更する"/>
            </div>
            <ul>
                <li>
                    名前：{user.username}
                </li>
                <li>
                    email：{user.email}
                </li>
                <li>
                    Gitユーザー名：{user.gitUserName}
                </li>
                <li>
                    Githubリポジトリ：github.com/{user.gitUserName}/{user.githubRepo}
                </li>
            </ul>
        </div>
    );
};

export default UserItems;