import './Login.css';

export function Login() {
    return (
        <div className="wrapper">
            <form id='loginForm'>
                <h2>Вход</h2>

                <label htmlFor="email">Имейл<span className="requiredStart">*</span></label>
                <input
                    type="email"
                    name="email"
                // value={values.theme}
                // onChange={handleChange}
                // onBlur={handleIsValid}
                />
                {/* {errors.theme && <p className="errP">{errors.theme}</p>} */}


                <label htmlFor="password">Парола<span className="requiredStart">*</span></label>
                <input
                    type="password"
                    name="password"
                // value={values.theme}
                // onChange={handleChange}
                // onBlur={handleIsValid}
                />
                {/* {errors.theme && <p className="errP">{errors.theme}</p>} */}



                <button className="submitBtn btn2" type="submit"
                // disabled={!isTouched || (errors.class || errors.course || errors.theme)}
                >
                    Вход
                </button>
            </form>
        </div>
    );
}