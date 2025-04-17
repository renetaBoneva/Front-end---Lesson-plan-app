import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LessonPlan } from './components/LessonPlan/LessonPlan';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <h1>Lesson plan with AI</h1>
      <div id="contentWrapper">
        <Routes>
          {/* Изкуственият интелект в организацията на преподавателската дейност */}
          {/* stranica za generirane na plan konspekti za cqlata godina */}
          {/* stranica za registraciq */}
          {/* stranica za login */}
          {/* put za logout */}
          <Route path='/generate-lesson-plan' element={<LessonPlan/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
