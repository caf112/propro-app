import React from 'react';
import { Container } from '@mui/material';
import * as Titles from "components/features/title/Index";

const Home = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Titles.Title />
            <Titles.Dashboard />
        </Container>
    );
};

export default Home;




// import * as Titles from "components/features/title/Index";
// // import { AwsAuthProps } from "models/Types";

// const Home = () => {
    
//     return (
//         <div>
//             <Titles.Title />
//             <Titles.Dashboard />
//         </div>
//     );
// };

// export default Home;