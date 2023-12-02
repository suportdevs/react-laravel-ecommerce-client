import { useNavigate, useParams } from "react-router-dom";
import { useEmailVerifyQuery } from "../services/authApi";
import toast from "react-hot-toast";

const EmailVerification = () => {
    const navigate = useNavigate();
    const {id, hash} = useParams();
    const {data, isLoading} = useEmailVerifyQuery({id, hash});
    
    if(data){
        toast.success(data.message);
        navigate('/login');
        toast.success("Please login now");
    }

    if(isLoading){
       return <h2>Verifing...</h2>
    }
    return (
        isLoading && <h2>Verifing...</h2>
    )
}

export default EmailVerification;