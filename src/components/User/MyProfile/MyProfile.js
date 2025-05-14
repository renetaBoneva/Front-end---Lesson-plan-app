import './MyProfile.css'
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useState } from 'react';

export function MyProfile() {
    const { userState, onUserDeleteHandler } = useAuthContext();
    const [values, setValues] = useState({
        "email": userState.email || '',
        "course": userState.course || '',
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
        });
        setIsTouched(false);
        setIsEdit(false);
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        // todo set userState to new values
        // todo put request
        setIsTouched(false);
        setIsEdit(false);
    }


    return (<>
        <section className="profileSection">
            <h2>Моят профил</h2>

            <form id='editProfile' onSubmit={onSubmitHandler}>
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

                {
                    isEdit
                        ? (<div id='btnsWrapper'>

                            <button
                                className="submitBtn btn1"
                                onClick={onCancelHandler}
                                disabled={(errors.email || errors.course)}>
                                Отказ
                            </button>
                            <button className="submitBtn btn2" type="submit" disabled={!isTouched || (errors.email || errors.course)}>
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