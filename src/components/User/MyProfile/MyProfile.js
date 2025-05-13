import './MyProfile.css'
import { useAuthContext } from "../../../hooks/useAuthContext";

export function MyProfile() {
    const { userState } = useAuthContext();
    return (<>
        <section className="profileSection">
            <h2>Моят профил</h2>
            <div className="profileLine">
                <p className="profileLabel">Имейл: </p>
                <p className='profileInfo'>{userState.email}</p>
            </div>
            <div className="profileLine">
                <p className="profileLabel">Предмет: </p>
                <p className='profileInfo'>{userState.course}</p>
            </div>
        </section></>
    );
}