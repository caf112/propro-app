import { withAuthenticator } from '@aws-amplify/ui-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { AwsAuthProps } from 'models/Types'
    
    const Dashboard = ({signOut,user}: AwsAuthProps) => {
      return (
        <div>
            <Link to="/game" className="button" >うさぎをいじめる（ゲームをする）</Link>
            <Link to="/MyPage" className="button">マイページへ</Link>
            {user ? (
                <div>
                    <button onClick={signOut}>サインアウト</button>
                </div>
            ):(
                <Link to="/Register" className="button">新規登録/サインイン</Link>
                    
            )}
        </div>
      )
    }
    
    export default withAuthenticator(Dashboard)