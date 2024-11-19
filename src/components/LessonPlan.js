import { useState } from "react";

export function LessonPlan() {
    const [values, setValues] = useState({
        "class": "",
        "course": "",
        "theme": "",
        "time": "40",
        "method": true,
        "target": true,
        "concepts": true,
        "CoursesConnections": true,
        "didacticTools": true,
        "introduction": true,
        "mainPart": true,
        "exercises": true,
        "conclusion": true,
        "homework": true
    });
    const [errors, setErrors] = useState({

    })


    function handleChange(e) {
        // Change Values;
        const { name, type, value, checked } = e.target;

        setValues(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));

        handleIsValid(e);
    }

    function handleIsValid(e) {
        if (values.class === "") {
            setErrors(state => ({ ...state, "class": "Въведете клас!" }))
        } else {
            setErrors(state => ({ ...state, "class": "" }))
        }

        if (values.course === "") {
            setErrors(state => ({ ...state, "course": "Въведете предмет!" }))
        } else {
            setErrors(state => ({ ...state, "course": "" }))
        }

        if (values.theme === "") {
            setErrors(state => ({ ...state, "theme": "Въведете тема на урока!" }))
        } else {
            setErrors(state => ({ ...state, "theme": "" }))
        }
    }
    return (
        <>
            <h2>Generate lecture plan</h2>
            <form>
                {
                    errors.class
                        ? <p className="errP">{errors.class}</p>
                        : ""
                }
                <label htmlFor="class">Клас*</label>
                <select name="class"
                    value={values.class}
                    onChange={handleChange}
                    onBlur={handleIsValid}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select>

                {
                    errors.course
                        ? <p className="errP">{errors.course}</p>
                        : ""
                }
                <label htmlFor="course">Предмет*</label>
                <input
                    type="text"
                    name="course"
                    value={values.course}
                    onChange={handleChange}
                    onBlur={handleIsValid}
                />

                {
                    errors.theme
                        ? <p className="errP">{errors.theme}</p>
                        : ""
                }
                <label htmlFor="theme">Тема на урок*</label>
                <input
                    type="text"
                    name="theme"
                    value={values.theme}
                    onChange={handleChange}
                    onBlur={handleIsValid}
                />
                <label htmlFor="time">Продължителност</label>
                <select
                    name="time"
                    value={values.time}
                    onChange={handleChange}
                >
                    <option>30</option>
                    <option>35</option>
                    <option>40</option>
                    <option>45</option>
                </select>

                <fieldset>
                    <legend>Да се включи в плана:</legend>
                    <div className="LesPlanCheckBoxWrapper">
                        <input
                            type="checkbox"
                            name="method"
                            checked={values.method}
                            onChange={handleChange}
                        />
                        <label htmlFor="method">Методи на преподаване</label>
                    </div>

                    <div className="LesPlanCheckBoxWrapper">
                        <input
                            type="checkbox"
                            name="target"
                            checked={values.target}
                            onChange={handleChange}
                        />
                        <label htmlFor="target">Цели</label>
                    </div>

                    <div className="LesPlanCheckBoxWrapper">
                        <input
                            type="checkbox"
                            name="concepts"
                            checked={values.concepts}
                            onChange={handleChange}
                        />
                        <label htmlFor="concepts">Опорни понятия</label>
                    </div>

                    <div className="LesPlanCheckBoxWrapper">
                        <input
                            type="checkbox"
                            name="CoursesConnections"
                            checked={values.CoursesConnections}
                            onChange={handleChange}
                        />
                        <label htmlFor="CoursesConnections">Междупредметни връзки</label>
                    </div>

                    <div className="LesPlanCheckBoxWrapper">
                        <input
                            type="checkbox"
                            name="didacticTools"
                            checked={values.didacticTools}
                            onChange={handleChange}
                        />
                        <label htmlFor="didacticTools">Дидактически средства</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Структура и ход на урока:</legend>
                    <div className="LesPlanCheckBoxWrapper">
                        <input
                            type="checkbox"
                            name="introduction"
                            checked={values.introduction}
                            onChange={handleChange}
                        />
                        <label htmlFor="introduction">Въвеждаща част</label>
                    </div>

                    <div className="LesPlanCheckBoxWrapper">
                        <input
                            type="checkbox"
                            name="exercises"
                            checked={values.exercises}
                            onChange={handleChange}
                        />
                        <label htmlFor="exercises">Задачи за упражнение</label>
                    </div>

                    <div className="LesPlanCheckBoxWrapper">
                        <input
                            type="checkbox"
                            name="conclusion"
                            checked={values.conclusion}
                            onChange={handleChange}
                        />
                        <label htmlFor="conclusion">Заключителна част</label>
                    </div>

                    <div className="LesPlanCheckBoxWrapper">
                        <input
                            type="checkbox"
                            name="homework"
                            checked={values.homework}
                            onChange={handleChange}
                        />
                        <label htmlFor="homework">Домашна работа</label>
                    </div>
                </fieldset>

                <button className="submitBtn" type="submit">
                    Генерирай
                </button>
            </form>
        </>);
}