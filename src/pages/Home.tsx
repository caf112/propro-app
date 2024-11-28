import * as Titles from "components/features/title/Index";
import { AwsAuthProps } from "models/Types";

const Home = ({signOut,user}: AwsAuthProps ) => {
    console.log("user object:",user);
    return (
        <div>
            <Titles.Title />
            <Titles.Dashboard signOut={signOut} user={user} />
        </div>
    );
};

export default Home;