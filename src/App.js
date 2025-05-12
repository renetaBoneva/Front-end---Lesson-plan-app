import { Route, Routes } from 'react-router-dom';

import './App.css';

import { AuthProvider } from './contexts/AuthContext';
import { IsAuthenticated } from './components/common/IsAuthenticated/IsAuthenticated';
import { IsNotAuthenticated } from './components/common/IsNotAuthenticated/IsNotAuthenticated';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { LessonPlan } from './components/LessonPlan/LessonPlan';
import { Register } from './components/User/Register/register';
import { Login } from './components/User/Login/Login';
import { Logout } from './components/User/Logout/Logout';
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

            <Route element={<IsNotAuthenticated />}>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Route>
            <Route element={<IsAuthenticated />}>
              {/* profile page */}
              <Route path='/profile' />
              
            </Route>
            <Route path='/logout' element={<Logout />} />

            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
