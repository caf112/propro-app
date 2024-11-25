import { useUser } from "UserContext";
import * as Elements from "components/elements/Index"

const UserItems = () => {

    const {user} = useUser();

    return (
        <div>
            <div>
                <Elements.ChangeButton path="/register" label="変更する"/>
            </div>
            <ul>
                <li>
                    名前：{user.name}
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