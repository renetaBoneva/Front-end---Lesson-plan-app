import './Register.css';

export function Register() {
    return (
        <div className="wrapper">
            <form id='registerForm'>
                <h2>Регистрация</h2>

                <label htmlFor="email">Имейл<span className="requiredStart">*</span></label>
                <input
                    type="email"
                    name="email"
                // value={values.theme}
                // onChange={handleChange}
                // onBlur={handleIsValid}
                />
                {/* {errors.theme && <p className="errP">{errors.theme}</p>} */}


                <label htmlFor="course">Предмет<span className="requiredStart">*</span></label>
                <input
                    type="text"
                    name="course"
                    // value={values.course}
                    // onChange={handleChange}
                    // onBlur={handleIsValid}
                />

                <label htmlFor="class">Клас</label>
                <select name="class"
                // value={values.class}
                // onChange={handleChange}
                // onBlur={handleIsValid}
                >
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
                
                <label htmlFor="password">Парола<span className="requiredStart">*</span></label>
                <input
                    type="password"
                    name="password"
                // value={values.theme}
                // onChange={handleChange}
                // onBlur={handleIsValid}
                />
                {/* {errors.theme && <p className="errP">{errors.theme}</p>} */}

                <label htmlFor="rePass">Повтори парола<span className="requiredStart">*</span></label>
                <input
                    type="password"
                    name="rePass"
                // value={values.theme}
                // onChange={handleChange}
                // onBlur={handleIsValid}
                />
                {/* {errors.theme && <p className="errP">{errors.theme}</p>} */}


                <button className="submitBtn btn2" type="submit"
                // disabled={!isTouched || (errors.class || errors.course || errors.theme)}
                >
                    Регистрация
                </button>
            </form>
        </div>
    );
}