import { useState } from 'react';
import './Register.css';
import { useAuthContext } from "../../../hooks/useAuthContext";

export function Register() {
    const [values, setValues] = useState({
        "email": "",
        "password": "",
        "rePass": "",
        "course": "",
        "classNum": "",
    });
    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState(false);
    const { onRegisterHandler } = useAuthContext();

    function handleChange(e) {
        // Change Values;
        const { name, value } = e.target;

        const newValues = {
            ...values,
            [name]: value
        };
        setValues(newValues);
        handleIsValid(newValues);
    }

    function handleIsValid(newValues) {
        setIsTouched(true);
        let newErrors = errors;

        if (newValues.email === "") {
            newErrors.email = "Въведете имейл!";
        } else {
            newErrors.email = "";
        }

        if (newValues.password === "") {
            newErrors.password = "Въведете парола!";
        }else if (newValues.password?.trim().length < 5) {
            newErrors.password = "Паролата трябва да бъде дълга поне 5 символа!";
        } else {
            newErrors.password = "";
        }

        if (newValues.rePass === "") {
            newErrors.rePass = "Въведете повторна парола!";
        } else if (newValues.password !== newValues.rePass) {
            newErrors.rePass = "Повторната парола не съвпада с паролата!";
        } else {
            newErrors.rePass = "";
        }

        if (newValues.course === "") {
            newErrors.course = "Въведете предмет!";
        } else {
            newErrors.course = "";
        }

        if (newValues.classNum && !Number(newValues.classNum)) {
            newErrors.classNum = 'Невалидна стойност за "Клас"';
        } else {
            newErrors.classNum = "";
        }

        setErrors(newErrors);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        handleIsValid(values);

        if (!(errors.email
            || errors.password
            || errors.rePass
            || errors.className
            || errors.course)) {
            onRegisterHandler(values);
        }
    }

    return (
        <div className="wrapper">
            <form id='registerForm' onSubmit={handleSubmit}>
                <h2>Регистрация</h2>

                <label htmlFor="email">Имейл<span className="requiredStart">*</span></label>
                <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleIsValid}
                />
                {errors.email && <p className="errP">{errors.email}</p>}


                <label htmlFor="course">Предмет<span className="requiredStart">*</span></label>
                <input
                    type="text"
                    name="course"
                    autoComplete="course"
                    value={values.course}
                    onChange={handleChange}
                    onBlur={handleIsValid}
                />
                {errors.course && <p className="errP">{errors.course}</p>}

                <label htmlFor="classNum">Клас</label>
                <select name="classNum"
                    value={values.classNum}
                    onChange={handleChange}
                    onBlur={handleIsValid}
                >
                    <option value="" >--- Избери клас ---</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                {errors.classNum && <p className="errP">{errors.classNum}</p>}

                <label htmlFor="password">Парола<span className="requiredStart">*</span></label>
                <input
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleIsValid}
                />
                {errors.password && <p className="errP">{errors.password}</p>}

                <label htmlFor="rePass">Повтори парола<span className="requiredStart">*</span></label>
                <input
                    type="password"
                    name="rePass"
                    autoComplete="repeat-password"
                    value={values.rePass}
                    onChange={handleChange}
                    onBlur={handleIsValid}
                />
                {errors.rePass && <p className="errP">{errors.rePass}</p>}


                <button className="submitBtn btn2" type="submit"
                    disabled={!isTouched || (
                        errors.email
                        || errors.password
                        || errors.rePass
                        || errors.className
                        || errors.course)}
                >
                    Регистрация
                </button>
            </form>
        </div>
    );
}