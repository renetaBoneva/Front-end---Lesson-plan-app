import { Link } from 'react-router-dom';
import './Home.css';

export function Home() {
    return (
        <div className="homeSectionWrapper">
            <div className='wrapper'>

                <section id="homeHeader">
                    <h1>Smart Plan</h1>
                    <p>Добре дошли в платформата, създадена специално за преподаватели,
                        които искат да улеснят и обогатят подготовката си за учебните часове.</p>
                </section>

                <section className="homeSection">
                    <div className='logoImage'>
                        <Link to="/generate-lesson-plan">Генерирай план-конспект</Link>
                    </div>
                    <p className='lessonPlanParagraph'>
                        С помощта на изкуствен интелект тук можете бързо и лесно да генерирате
                        план-конспекти, съобразени с учебната програма и индивидуалните ви нужди.
                        Спестете време и насочете енергията си към най-важното — ефективното
                        преподаване и вдъхновяването на учениците.
                    </p>
                </section>

                <section className='homeSection' id='homeSection2'>
                    <p>
                        Нашата система предлага интуитивен интерфейс и персонализирани предложения
                        за уроци по различни предмети и класове. Въведете основна информация като
                        тема, цели и учебно съдържание, и платформата ще създаде структуриран,
                        ясен и професионален план. Открийте нов начин за планиране на уроци,
                        който съчетава технологии и педагогика в едно.
                    </p>
                </section>

                <section className='homeSection' id='homeSection3'>
                    <Link to="/register">Регистрация</Link>
                </section>

            </div>
        </div>);
}