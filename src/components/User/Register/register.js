import { useState } from 'react';
import './Register.css';

export function Register() {
    const [values, setValues] = useState({
        "email": "",
        "password": "",
        "rePass": "",
        "course": "",
        "class": "",
    });
    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState(false);

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
            newErrors.email= "Въведете имейл!";
        } else {
            newErrors.email= "";
        }

        if (newValues.course === "") {
            newErrors.course= "Въведете предмет!";
        } else {
            newErrors.course= "";
        }

        if (newValues.password === "") {
            newErrors.password= "Въведете парола!";
        } else {
            newErrors.password= "";
        }

        if (newValues.rePass === "") {
            newErrors.rePass= "Въведете повторна парола!";
        } else if (newValues.password !== newValues.rePass) {
            newErrors.rePass= "Повторната парола не съвпада с паролата!";
        } else {
            newErrors.rePass= "";
        }

        setErrors(newErrors);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!(errors.password || errors.email)) {
            // setIsLoading(true);

            try {
                // const res = await lessonPlanService.generateMeLessonPlan(values);
                // const generatedPlan = res.aiResponse;
                // setLessonPlan(generatedPlan);
                console.log(values);

            } catch (err) {
                console.log(err);
            } finally {
                // setIsLoading(false);
                setIsTouched(false);
            }
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

                <label htmlFor="class">Клас</label>
                <select name="class"
                    value={values.class}
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
                    disabled={!isTouched || (errors.email || errors.password || errors.rePass || errors.course)}
                >
                    Регистрация
                </button>
            </form>
        </div>
    );
}