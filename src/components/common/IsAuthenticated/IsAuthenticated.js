import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

export function IsAuthenticated() {
    const { isAuthenticated } = useAuthContext();
    
    if(!isAuthenticated){
        return <Navigate to={'/login'} />
    }

    return <Outlet />
}