import { useEffect } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

export function Logout() {  
    const { onLogoutHandler } = useAuthContext();

    useEffect(() => {
       onLogoutHandler()
    }, [onLogoutHandler])

    return null;
}