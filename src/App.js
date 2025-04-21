import { Route, Routes } from 'react-router-dom';

import './App.css';

import { LessonPlan } from './components/LessonPlan/LessonPlan';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/User/Login/Login';

function App() {
  return (
    <>
      <Header />
      <div id="contentWrapper">
        <Routes>
          {/* Изкуственият интелект в организацията на преподавателската дейност */}
          {/* stranica za generirane na plan konspekti za cqlata godina */}
          {/* stranica za registraciq */}
          {/* stranica za login */}
          {/* put za logout */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/generate-lesson-plan' element={<LessonPlan />} />

          <Route path='/login' element={<Login />} />

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
