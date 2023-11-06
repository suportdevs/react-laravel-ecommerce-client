import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { fetchUser } from "../../services/userSlice";
import { useEffect } from "react";

const GuestLayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    }, []);
    const {user} = useSelector((state) => state.user);
    if(user){
        return <Navigate to="/" />
    }
    return (
        <Outlet />
    );
}
export default GuestLayout;