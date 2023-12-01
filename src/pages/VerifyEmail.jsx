import { useSendEmailVerifyMailQuery } from "../services/authApi";
import toast from "react-hot-toast";


const VerifyEmail = ({id}) => {
    console.log(id);
    const {data, isSuccess} = useSendEmailVerifyMailQuery(id);
    if(data && isSuccess){
        toast(data.message);
    }
    return (
        <div>
            <h1>Please verify your email.</h1>
        </div>
    )   
}

export default VerifyEmail;