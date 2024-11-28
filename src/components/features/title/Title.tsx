import { Amplify } from 'aws-amplify'; 
import { AwsAuthProps } from "models/Types";
import { withAuthenticator } from '@aws-amplify/ui-react';

import awsExports from "aws-exports"

Amplify.configure(awsExports);

const Title = ({user}: AwsAuthProps) => {
    console.log("title.username"+user);
    
    return (
        <div>
            <img src="/usa/usa_niko.png" alt="titleLogo" />
            {user ? (
                <h3>ようこそ、{user.username}さん</h3>
            ) : (
                <h3>ログインしてください</h3>
            )}
            <p>いっしょにうさぎをいじめよう＾＾</p>
            
        </div>
    );
};

export default Title;