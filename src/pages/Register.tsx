import * as Layouts from "components/layouts/Index"
import * as Auths from "components/features/auths/Index"

const Register = () => {
    return (
        <div>
            <Layouts.Header />
            <Auths.RegisterForm />
        </div>
    );
};

export default Register;