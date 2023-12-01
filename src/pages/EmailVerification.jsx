import { useParams } from "react-router-dom";
import { useEmailVerifyQuery } from "../services/authApi";
import toast from "react-hot-toast";

const EmailVerification = () => {
    const {id, hash} = useParams();
    const {data, isLoading} = useEmailVerifyQuery({id, hash});
    
    if(data){
        toast.success(data.message);
    }

    if(isLoading){
       return <h2>Verifing...</h2>
    }
    return (
        isLoading && <h2>Verifing...</h2>
    )
}

export default EmailVerification;