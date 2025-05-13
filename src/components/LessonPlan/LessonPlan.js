import { useState } from "react";

import './LessonPlan.css';
import * as lessonPlanService from "../../services/lessonPlanService";
import TextEditor from "./TextEditor/TextEditor";
import { Loading } from "../Loading/Loading";
import { useAuthContext } from "../../hooks/useAuthContext";

export function LessonPlan() {
    const { userState } = useAuthContext();
    const [values, setValues] = useState({
        "class": "",
        "course": userState?.course || "",
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

        const newValues = {
            ...values,
            [name]: type === 'checkbox' ? checked : value
        };

        setValues(newValues);
        //Validate some values
        handleIsValid(newValues);
    }

    function handleIsValid(newValues) {
        setIsTouched(true);
        let newErrors = errors;

        if (newValues.class === "") {
            newErrors.class = "Въведете клас!";
        } else {
            newErrors.class = "";
        }

        if (newValues.course === "") {
            newErrors.course = "Въведете предмет!";
        } else {
            newErrors.course = "";
        }

        if (newValues.theme === "") {
            newErrors.theme = "Въведете тема на урока!";
        } else {
            newErrors.theme = "";
        }

        if (newValues.type === "") {
            newErrors.type = "Въведете тип на урока!";
        } else {
            newErrors.type = "";
        }

        setErrors(newErrors);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!(errors.course || errors.class || errors.theme || errors.type)) {
            setIsLoading(true);

            try {
                const res = await lessonPlanService.generateMeLessonPlan(values);
                const generatedPlan = res.aiResponse;
                setLessonPlan(generatedPlan);

            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
                setIsTouched(false);
            }
        }
    }

    return (
        <div className="wrapper">
            <h2 id="lp">Генерирай плaн-конспект</h2>
            <div className="lessonPlanWrapper">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="class">Клас<span className="requiredStart">*</span></label>
                    <select name="class"
                        value={values.class}
                        onChange={handleChange}
                        onBlur={handleIsValid}>
                        <option value="" disabled>--- Избери клас ---</option>
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
                    {errors.class && <p className="errP">{errors.class}</p>}

                    <label htmlFor="course">Предмет<span className="requiredStart">*</span></label>
                    <input
                        type="text"
                        name="course"
                        autoComplete="class"
                        value={values.course}
                        onChange={handleChange}
                        onBlur={handleIsValid}
                    />
                    {errors.course && <p className="errP">{errors.course}</p>}

                    <label htmlFor="theme">Тема на урок<span className="requiredStart">*</span></label>
                    <input
                        type="text"
                        name="theme"
                        value={values.theme}
                        onChange={handleChange}
                        onBlur={handleIsValid}
                    />
                    {errors.theme && <p className="errP">{errors.theme}</p>}


                    <label htmlFor="type">Тип на урока<span className="requiredStart">*</span></label>
                    <select
                        name="type"
                        value={values.type}
                        onChange={handleChange}
                        onBlur={handleIsValid}
                    >
                        <option value="" disabled>--- Избери тип на урока ---</option>
                        <option value="За нови знания">За нови знания</option>
                        <option value="За упражнение">За упражнение</option>
                    </select>
                    {errors.type && <p className="errP">{errors.type}</p>}

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

                    <button className="submitBtn btn1" type="submit" disabled={!isTouched || (errors.class || errors.course || errors.theme)}>
                        Генерирай
                    </button>
                </form>
                {isLoading
                    ? <Loading />
                    : <TextEditor lessonPlan={lessonPlan || ""} />
                }
            </div>
        </div>);
}