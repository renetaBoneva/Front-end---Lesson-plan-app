import { useState } from "react";
import * as lessonPlanService from "../../services/lessonPlanService";
import TextEditor from "./TextEditor/TextEditor";
import './LessonPlan.css';

export function LessonPlan() {
    const [values, setValues] = useState({
        "class": "",
        "course": "",
        "theme": "",
        "type": "",
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
        "homework": true,
        "notes": ""
    });
    const [errors, setErrors] = useState({})
    const [lessonPlan, setLessonPlan] = useState("");
    const [isTouched, setIsTouched] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function handleChange(e) {
        // Change Values;
        const { name, type, value, checked } = e.target;
        
        setValues(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));

        //Validate some values
        handleIsValid(e);
    }

    function handleIsValid(e) {
        setIsTouched(true);
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

        if (values.type === "") {
            setErrors(state => ({ ...state, "type": "Въведете тип на урока!" }))
        } else {
            setErrors(state => ({ ...state, "type": "" }))
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!(errors.course || errors.class || errors.theme || errors.type)) {
            setIsLoading(true);
            try {
                lessonPlanService.generateMeLessonPlan(values)
                    .then(res => {
                        const generatedPlan = res.aiResponse;

                        setLessonPlan(generatedPlan)
                    })
            }
            catch (err) {
                console.log(err);
            }
            setIsLoading(false);
            setIsTouched(false);
        }
    }

    return (
        <>
            <h2>Generate lecture plan</h2>
            <div className="lessonPlanWrapper">
                <form onSubmit={handleSubmit}>
                    {errors.class && <p className="errP">{errors.class}</p>}
                    <label htmlFor="class">Клас*</label>
                    <select name="class"
                        value={values.class}
                        onChange={handleChange}
                        onBlur={handleIsValid}>
                        <option value="" disabled>--- Select class ---</option>
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

                    {errors.course && <p className="errP">{errors.course}</p>}
                    <label htmlFor="course">Предмет*</label>
                    <input
                        type="text"
                        name="course"
                        value={values.course}
                        onChange={handleChange}
                        onBlur={handleIsValid}
                    />

                    {errors.theme && <p className="errP">{errors.theme}</p>}
                    <label htmlFor="theme">Тема на урок*</label>
                    <input
                        type="text"
                        name="theme"
                        value={values.theme}
                        onChange={handleChange}
                        onBlur={handleIsValid}
                    />


                    {errors.type && <p className="errP">{errors.type}</p>}
                    <label htmlFor="type">Тип на урока</label>
                    <select
                        name="type"
                        value={values.type}
                        onChange={handleChange}
                        onBlur={handleIsValid}
                    >
                        <option value="" disabled>--- Select lesson type ---</option>
                        <option value="За нови знания">За нови знания</option>
                        <option value="За упражнение">За упражнение</option>
                    </select>

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

                    {/* Да се включи в плана: */}
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

                    {/* Структура и ход на урока: */}
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

                    <label htmlFor="notes">Бележки:</label>
                    <textarea
                        name="notes"
                        value={values.notes}
                        onChange={handleChange} />

                    <button className="submitBtn" type="submit" disabled={!isTouched || (errors.class || errors.course || errors.theme)}>
                        Генерирай
                    </button>
                </form>
                {isLoading
                    ? <p>Loading ...</p>
                    : <TextEditor lessonPlan={lessonPlan || ""} />
                }
            </div>
        </>);
}