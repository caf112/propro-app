import { Amplify } from 'aws-amplify';
import awsExports from "aws-exports";
import { useUser } from 'UserContext';
import { Typography, Box, Avatar } from '@mui/material';

Amplify.configure(awsExports);

const Title = () => {
    const { user } = useUser();

    return (
        <Box 
            textAlign="center" 
            sx={{ py: 5, backgroundColor: '#f5f5f5', borderRadius: 2, mb: 3 }}
        >
            {/* <Avatar 
                src="/usa/usa_niko.png" 
                alt="titleLogo" 
                sx={{ width: 300, height: 300, mx: 'auto', mb: 2 }} 
            /> */}
            <img src="/usa/usa_niko.png" alt="titleLogo" style={{ width: '250px', height: 'auto' }} />
            <Typography variant="h4" component="h1" gutterBottom>
                {user ? `ようこそ、${user.username}さん` : "ログインしてください"}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
                いっしょにうさぎをいじめよう＾＾
            </Typography>
        </Box>
    );
};

export default Title;



// import { Amplify } from 'aws-amplify'; 

// import awsExports from "aws-exports"
// import { useUser } from 'UserContext';

// Amplify.configure(awsExports);

// const Title = () => {
//     const {user } = useUser();

//     console.log("title.username"+user);
    
//     return (
//         <div>
//             <img src="/usa/usa_niko.png" alt="titleLogo" style={{ width: '300px', height: 'auto' }} />
//             {user ? (
//                 <h1>ようこそ、{user.username}さん</h1>
//             ) : (
//                 <h1>ログインしてください</h1>
//             )}
//             <p>いっしょにうさぎをいじめよう＾＾</p>
            
//         </div>
//     );
// };

// export default Title;