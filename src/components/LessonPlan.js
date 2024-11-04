export function LessonPlan() {

    return (
        <>
            <h2>Generate lecture plan</h2>
            <form>
                <label htmlFor="class">Клас</label>
                <select name="class">
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

                <label htmlFor="course">Предмет</label>
                <input
                    type="text"
                    name="course"
                />

                <label htmlFor="theme">Тема на урок</label>
                <input
                    type="text"
                    name="theme"
                />

                <button
                    className="submitBtn"
                    type="submit">
                    Генерирай
                </button>
            </form>
        </>);
}