import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from 'UserContext';
import { Button } from "@mui/material"
// import { AwsAuthProps } from 'models/Types';
import { Authenticator,useAuthenticator } from '@aws-amplify/ui-react';


const RegisterForm = () => {
    const [username,setName] = useState( '');
    const [email,setEmail] = useState('');
    const [gitUserName,setGitUserName] = useState('');
    const [githubRepo,setGithubRepo] = useState('');
    const navigate = useNavigate();
    const {setUser} = useUser();


    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        
        setUser({username,email});
        setUser({username,email,gitUserName,githubRepo});
        console.log({username,email,gitUserName,githubRepo});
        navigate('/');
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">名前：</label>
                    <input type="text" id="name" value={username} onChange={(e) => setName(e.target.value) }></input>
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
                <Button type="submit" variant="contained" >登録</Button>
            </form>
    </div>
  )
}

export default RegisterForm