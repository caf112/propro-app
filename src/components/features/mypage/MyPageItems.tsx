import { useUser } from "UserContext";
import * as Elements from "components/elements/Index"

const MyPageItems = () => {

    const {user} = useUser();

    return (
        <div>
            <ul>
                <li>
                    名前：{user.name}
                    <Elements.ChangeButton path="/register" />
                </li>
                <li>
                    email：{user.email}
                    <Elements.ChangeButton path="/register"/>
                </li>
                <li>
                    Gitユーザー名：{user.gitUserName}
                    <Elements.ChangeButton path="/register"/>
                </li>
                <li>
                    Githubリポジトリ：github.com/{user.gitUserName}/{user.githubRepo}
                    <Elements.ChangeButton path="/register"/>
                </li>
            </ul>
        </div>
    );
};

export default MyPageItems;