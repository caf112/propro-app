import * as Titles from "components/features/title/Index";
import { AwsAuthProps } from "models/Types";

const Home = ({signOut,user}: AwsAuthProps ) => {
    return (
        <div>
            <Titles.Title signOut={signOut} user={user} />
            <Titles.Dashboard signOut={signOut} user={user} />
        </div>
    );
};

export default Home;