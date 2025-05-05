import { Route, Routes } from 'react-router-dom';

import './App.css';

import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { LessonPlan } from './components/LessonPlan/LessonPlan';
import { Login } from './components/User/Login/Login';
import { Register } from './components/User/Register/register';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <div id="contentWrapper">
          <Routes>
            {/* Изкуственият интелект в организацията на преподавателската дейност */}
            {/* stranica za generirane na plan konspekti za cqlata godina */}
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/generate-lesson-plan' element={<LessonPlan />} />

            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            {/* put za logout */}

          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
