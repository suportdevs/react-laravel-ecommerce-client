import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const AuthLayout = () => {
    const user = useSelector(state => state.user.user);
    if(!user){
        return <Navigate to="/login" />
    }
    return (
        <Outlet />
    )
}