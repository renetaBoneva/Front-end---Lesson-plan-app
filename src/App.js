import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LessonPlan } from './components/LessonPlan';

function App() {
  return (
    <>
      <h1>Lesson plan with AI</h1>
      <div id="contentWrapper">
        <Routes>
          <Route path='*' element={<LessonPlan />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
