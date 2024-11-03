import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LessonPlan } from './components/LessonPlan';

function App() {
  return (
    <>
      <h1>Lesson plan with AI</h1>
      <Routes>
        <Route path='*' element={<LessonPlan />} />
      </Routes>
    </>
  );
}

export default App;
