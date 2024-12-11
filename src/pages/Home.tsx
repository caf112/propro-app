import React from 'react';
import { Container } from '@mui/material';
import * as Titles from "components/features/title/Index";
import * as Layouts from "components/layouts/Index"
import "styles/Home.css";

const Home = () => {
    return (
        <div className='home-container'>
            {/* <Layouts.Header /> */}
            <Titles.HomeContents />
            <Container maxWidth="md" sx={{ mt: 5 }}>
                <Titles.Title />
                <Titles.Dashboard />
            </Container>
        </div>
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