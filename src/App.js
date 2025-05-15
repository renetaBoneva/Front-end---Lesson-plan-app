import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './App.css';

import { AuthProvider } from './contexts/AuthContext';
import { IsAuthenticated } from './components/common/IsAuthenticated/IsAuthenticated';
import { IsNotAuthenticated } from './components/common/IsNotAuthenticated/IsNotAuthenticated';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { LessonPlan } from './components/LessonPlan/LessonPlan';
import { Register } from './components/User/Register/register';
import { Login } from './components/User/Login/Login';
import { MyProfile } from './components/User/MyProfile/MyProfile';
import { Logout } from './components/User/Logout/Logout';
import { Error } from './components/common/Error/Error';
import { Loading } from './components/Loading/Loading';
import { Footer } from './components/Footer/Footer';
import { Layout } from './components/common/Layout/Layout';

function App() {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <>
      <AuthProvider>
        <ToastContainer />{/* Notification component */}

        <Header />
        {isLoading
          ? <Loading />
          : (
            <Routes>
              {/* Изкуственият интелект в организацията на преподавателската дейност */}
              {/* stranica za generirane na testove */}

              {/* Home page design */}
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />

              <Route element={<Layout />}>
                <Route path='/generate-lesson-plan' element={<LessonPlan />} />

                <Route element={<IsNotAuthenticated />}>{/*Routes for guests only*/}
                  <Route path='/register' element={<Register />} />
                  <Route path='/login' element={<Login />} />
                </Route>

                <Route element={<IsAuthenticated />}>{/*Routes for authenticated users only*/}
                  <Route path='/profile' element={<MyProfile />} />
                </Route>
                <Route path='/logout' element={<Logout />} />

                <Route path='*' element={<Error />} />
              </Route>
            </Routes>
          )}

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
