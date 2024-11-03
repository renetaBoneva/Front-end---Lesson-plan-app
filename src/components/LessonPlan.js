export function LessonPlan() {

    return (
        <>
            <h2>Generate lecture plan</h2>
            <form>
                <label htmlFor="class">Клас</label>
                <input
                    type="text"
                    name="class"
                />

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

                <button type="submit">Генерирай</button>
            </form>
        </>);
}