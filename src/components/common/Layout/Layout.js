import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <div id="contentWrapper">
                <Outlet />
            </div>
        </>
    );
}