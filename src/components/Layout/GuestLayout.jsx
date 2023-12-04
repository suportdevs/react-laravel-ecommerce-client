import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const GuestLayout = () => {
    const user = useSelector(state => state.user.user);
    if(user){
        return <Navigate to="/" />
    }
    return (
        <Outlet />
    )
}

export default GuestLayout;