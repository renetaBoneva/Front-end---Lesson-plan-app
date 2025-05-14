import './MyProfile.css'
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useState } from 'react';

export function MyProfile() {
    const { userState, onUserDeleteHandler, onEditHandler } = useAuthContext();
    const [values, setValues] = useState({
        "email": userState.email || '',
        "course": userState.course || '',
        "classNum": userState.classNum || '',
    });
    const [errors, setErrors] = useState({});
    const [isTouched, setIsTouched] = useState(false);
    const [isEdit, setIsEdit] = useState(false);


    function handleChange(e) {
        // Change Values;
        const { name, value } = e.target;

        const newValues = {
            ...values,
            [name]: value
        };

        setValues(newValues);
        //Validate some values
        handleIsValid(newValues);
    }

    function handleIsValid(newValues) {
        setIsTouched(true);
        let newErrors = errors;

        if (newValues.course === "") {
            newErrors.course = "Въведете предмет!";
        } else {
            newErrors.course = "";
        }

        if (newValues.email === "") {
            newErrors.email = "Въведете имейл!";
        } else {
            newErrors.email = "";
        }

        if (newValues.classNum !== "" && !Number(newValues.classNum)) {
            newErrors.classNumNum = "Невалидна стойност за клас!";
        } else {
            newErrors.classNumNum = "";
        }

        setErrors(newErrors);
    }

    function onDeleteHandler() {
        const confirmed = window.confirm("Сигурни ли сте, че искате да изтриете този профил?");
        if (confirmed) {
            onUserDeleteHandler();
        }
    }

    function onCancelHandler(e) {
        e.preventDefault();
        setValues({
            "email": userState.email || '',
            "course": userState.course || '',
            "classNum": userState.classNum || '',
        });
        setIsTouched(false);
        setIsEdit(false);
    }

    function onSubmitEditHandler(e) {
        e.preventDefault();


        handleIsValid(values);
        if (!(errors.email || errors.course || errors.classNum)) {
            onEditHandler(values);

            setIsTouched(false);
            setIsEdit(false);
        }
    }


    return (<>
        <section className="profileSection">
            <h2>Моят профил</h2>

            <form id='editProfile'>
                <div className="profileLine">
                    <label htmlFor='email'>Имейл: </label>
                    <input
                        type='email'
                        name='email'
                        disabled={!isEdit}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleIsValid}
                    />
                </div>

                <div className="profileLine">
                    <label htmlFor='course'>Предмет: </label>
                    <input
                        type='text'
                        name='course'
                        disabled={!isEdit}
                        value={values.course}
                        onChange={handleChange}
                        onBlur={handleIsValid}
                    />
                </div>

                <div className="profileLine">
                    <label htmlFor='classNum'>Клас: </label>
                    <select name="classNum"
                        disabled={!isEdit}
                        value={values.classNum}
                        onChange={handleChange}
                        onBlur={handleIsValid}>
                        <option disabled={true} value="">--- Избери клас ---</option>
                        <option disabled={!isEdit} value="1">1</option>
                        <option disabled={!isEdit} value="2">2</option>
                        <option disabled={!isEdit} value="3">3</option>
                        <option disabled={!isEdit} value="4">4</option>
                        <option disabled={!isEdit} value="5">5</option>
                        <option disabled={!isEdit} value="6">6</option>
                        <option disabled={!isEdit} value="7">7</option>
                        <option disabled={!isEdit} value="8">8</option>
                        <option disabled={!isEdit} value="9">9</option>
                        <option disabled={!isEdit} value="10">10</option>
                        <option disabled={!isEdit} value="11">11</option>
                        <option disabled={!isEdit} value="12">12</option>
                    </select>
                </div>

                {
                    isEdit
                        ? (<div id='btnsWrapper'>

                            <button
                                className="submitBtn btn1"
                                onClick={onCancelHandler}
                                disabled={!isEdit}>
                                Отказ
                            </button>
                            <button
                                className="submitBtn btn2"
                                onClick={onSubmitEditHandler}
                                // type="submit"
                                disabled={!isEdit && (!isTouched || (errors.email || errors.course || errors.classNum))}>
                                Редактирай
                            </button>

                        </div>)
                        : (<div className='profileIconsWrapper'>
                            <i
                                className="bi bi-pencil-fill"
                                onClick={() => { setIsEdit(true) }}
                            ></i>
                            <i className="bi bi-trash"
                                onClick={onDeleteHandler}></i>
                        </div>)
                }

            </form>


        </section></>
    );
}