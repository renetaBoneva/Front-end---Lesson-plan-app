import { Link } from "react-router-dom";

import './Header.css';
import { useAuthContext } from "../../hooks/useAuthContext";

export function Header() {
    const { isAuthenticated } = useAuthContext();
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
                        {/* <!-- Guest menu --> */}
                        {isAuthenticated ? (
                            <>
                            {/* <!-- Logged in user menu --> */}
                                <li><Link to={`/profile`}>Моя профил</Link></li>
                                <li><Link to="/logout">Изход</Link></li>
                            </>)
                            : (
                                <>
                                {/* <!-- Logged out user menu --> */}
                                <li><Link to="/login">Вход</Link></li>
                                <li><Link to="/register">Регистрация</Link></li>
                                </>
                            )}
                    </ul>
                </div>
            </nav>
        </header>);
}