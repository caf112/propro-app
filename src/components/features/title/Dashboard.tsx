import React from 'react';
import { Button, Grid, Box, Typography } from '@mui/material';
import * as Elements from "components/elements/Index";
import { useUser } from 'UserContext';
import { Amplify } from 'aws-amplify';

import awsExports from "aws-exports";

Amplify.configure(awsExports);

const Dashboard = () => {
    const { user } = useUser();

    return (
        <Box sx={{ px: 3, py: 2, backgroundColor: '#fff', borderRadius: 2, boxShadow: 2 }}>
            <Typography variant="h5" gutterBottom>
                ダッシュボード
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Elements.ChangeButton path="/ModeSelect" label="うさぎをいじめる（ゲームをする）" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Elements.ChangeButton path="/MyPage" label="マイページへ" />
                </Grid>
                {user ? (
                    <Grid item xs={12}>
                        <Button variant="outlined" color="secondary" fullWidth>
                            サインアウト
                        </Button>
                    </Grid>
                ) : (
                    <>
                        <Grid item xs={12} sm={6}>
                            <Elements.ChangeButton path="/Register" label="新規登録/サインイン" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Elements.ChangeButton path="/Login" label="ログイン" />
                        </Grid>
                    </>
                )}
            </Grid>
        </Box>
    );
};

export default Dashboard;



// import React from 'react'
// import { Link } from 'react-router-dom'
// import * as Elements from "components/elements/Index"
// // import { AwsAuthProps } from 'models/Types'
// import { Amplify } from 'aws-amplify'; 

// import awsExports from "aws-exports"
// import { useUser } from 'UserContext';
// import { Button } from "@mui/material"

// Amplify.configure(awsExports);
    
//     const Dashboard = () => {

//         const {user} = useUser();

//       return (
//         <div>
//             <Elements.ChangeButton path="/game" label="うさぎをいじめる（ゲームをする）" />
//             <Elements.ChangeButton path="/MyPage" label="マイページへ" />
//             {user ? (
//                 <div>
//                     <Button variant="outlined" >サインアウト</Button>
//                 </div>
//             ):(
//                 <div>
//                     <Elements.ChangeButton path="/Register" label="新規登録/サインイン" />
//                     <Elements.ChangeButton path="/Login" label="ログイン" />
//                 </div>
//             )}
//         </div>
//       )
//     }
    
//     export default Dashboard