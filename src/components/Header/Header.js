import { Link } from "react-router-dom";

import './Header.css';

export function Header() {
    return (
        <header>
            <nav className="wrapper">
                <div>
                    <Link to="/">
                        <img src="/logo/logo.png" alt="logo" />
                    </Link>
                </div>


                <div>
                    <ul id="navUL">
                        <li><Link to="/generate-lesson-plan">Генерирай план-конспект</Link></li>
                        <li><Link to="/login">Вход</Link></li>
                        <li><Link to="/register">Регистрация</Link></li>
                        {/* <!-- Logged in user menu --> */}
                        {/* <!-- Guest menu --> */}
                        {/* {isAuthenticated ? (
                            <>
                                <li><Link to={`/users/${userId}/profile`}>My profile</Link></li>
                                <li><Link to="/logout">Logout</Link></li>
                            </>)
                            : (
                                <>
                                </>
                            )} */}
                    </ul>
                </div>
            </nav>
        </header>);
}