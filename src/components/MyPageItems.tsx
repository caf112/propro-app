import { useNavigate } from "react-router-dom";
import { useUser } from "UserContext";

const MyPageItems = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Register");
    };

    const {user} = useUser();

    return (
        <div>
            <ul>
                <li>名前：{user.name}<button onClick={handleClick}>変更する</button></li>
                <li>email：{user.email}<button onClick={handleClick}>変更する</button></li>
                <li>Gitユーザー名：{user.gitUserName}<button onClick={handleClick}>変更する</button></li>
                <li>Githubリポジトリ：github.com/{user.gitUserName}/{user.githubRepo}<button onClick={handleClick}>変更する</button></li>
            </ul>
        </div>
    );
};

export default MyPageItems;