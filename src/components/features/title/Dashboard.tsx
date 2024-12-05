import React from 'react'
import { Link } from 'react-router-dom'
import * as Elements from "components/elements/Index"
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
            <Elements.ChangeButton path="/game" label="うさぎをいじめる（ゲームをする）" />
            <Elements.ChangeButton path="/MyPage" label="マイページへ" />
            {user ? (
                <div>
                    <Button variant="outlined" >サインアウト</Button>
                </div>
            ):(
                <div>
                    <Elements.ChangeButton path="/Register" label="新規登録/サインイン" />
                    <Elements.ChangeButton path="/Login" label="ログイン" />
                </div>
            )}
        </div>
      )
    }
    
    export default Dashboard