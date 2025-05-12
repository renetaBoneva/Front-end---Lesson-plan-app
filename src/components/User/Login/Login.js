import { useState } from 'react';
import './Login.css';
import { useAuthContext } from "../../../hooks/useAuthContext";

export function Login() {
    const [values, setValues] = useState({
        "email": "",
        "password": "",
    });
    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState(false);
    const { onLoginHandler } = useAuthContext();

    function handleChange(e) {
        // Change Values;
        const { name, value } = e.target;

        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));

        //Validate some values
        handleIsValid(e);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!(errors.password || errors.email)) {
            // onLoginHandler
            onLoginHandler({
                email: values.email,
                password: values.password,
            })
        }
    }

    function handleIsValid(e) {
        setIsTouched(true);

        if (values.email === "") {
            setErrors(state => ({ ...state, "email": "Въведете имейл!" }))
        } else {
            setErrors(state => ({ ...state, "email": "" }))
        }

        if (values.password === "") {
            setErrors(state => ({ ...state, "password": "Въведете парола!" }))
        } else {
            setErrors(state => ({ ...state, "password": "" }))
        }
    }


    return (
        <div className="wrapper">
            <form id='loginForm' onSubmit={handleSubmit}>
                <h2>Вход</h2>

                <label htmlFor="email">Имейл<span className="requiredStart">*</span></label>
                <input
                    type="email"
                    name="email"
                    autoComplete="your-email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleIsValid}
                />
                {errors.email && <p className="errP">{errors.email}</p>}


                <label htmlFor="password">Парола<span className="requiredStart">*</span></label>
                <input
                    type="password"
                    name="password"
                    autoComplete="your-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleIsValid}
                />
                {errors.password && <p className="errP">{errors.password}</p>}

                <button className="submitBtn btn2" type="submit"
                    disabled={!isTouched || (errors.email || errors.password)}                >
                    Вход
                </button>
            </form>
        </div>
    );
}