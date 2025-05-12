import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

export function IsNotAuthenticated() {
    const { isAuthenticated } = useAuthContext();

    if(isAuthenticated){
        return <Navigate to={`/`} />
    }

    return <Outlet />
}