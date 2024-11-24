import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "UserContext";

const Register = () => {
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [gitUserName,setGitUserName] = useState('');
    const [githubRepo,setGithubRepo] = useState('');
    const navigate = useNavigate();
    const {setUser} = useUser();

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        
        setUser({name,email,gitUserName,githubRepo});
        console.log({name,email,gitUserName,githubRepo});
        navigate('/');
    };

    return (
        <div>
            <h2>新規登録</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">名前：</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value) }></input>
                </div>
                <div>
                    <label htmlFor="email">メール：</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value) }></input>
                </div>
                <div>
                    <label htmlFor="github">Gitユーザー名：</label>
                    <input type="text" id="github" value={gitUserName} onChange={(e) => setGitUserName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="github">Githubリポジトリ：</label>
                    <input type="text" id="githubRepo" value={githubRepo} onChange={(e) => setGithubRepo(e.target.value)}></input>
                </div>
                <button type="submit">登録</button>
            </form>
        </div>
    );
};

export default Register;