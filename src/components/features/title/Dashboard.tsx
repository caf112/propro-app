import React from 'react'
import { Link } from 'react-router-dom'
// import { AwsAuthProps } from 'models/Types'
import { Amplify } from 'aws-amplify'; 

import awsExports from "aws-exports"
import { useUser } from 'UserContext';

import { Button } from "@mui/material"

Amplify.configure(awsExports);
    
    const Dashboard = () => {

        const {user} = useUser();

      return (
        <div>
            <Link to="/game" className="button" >うさぎをいじめる（ゲームをする）</Link>
            <Link to="/MyPage" className="button">マイページへ</Link>
            {user ? (
                <div>
                    <button>サインアウト</button>
                </div>
            ):(
                <div>
                <Link to="/Register" className="button">新規登録/サインイン</Link>
                <Button>MUI</Button>
                <Button variant="contained">contained</Button>
                <Button variant="outlined">outlined</Button>
                </div>
            )}
        </div>
      )
    }
    
    export default Dashboard