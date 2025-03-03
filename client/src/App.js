import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/header/Header';
import Courses from './components/courses/Courses';
import Footer from './components/layout/footer/Footer';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import ForgetPassword from './components/auth/forgetPassword/ForgetPassword';
import ResetPassword from './components/auth/resetPassword/ResetPassword';
import Contact from './components/contact/Contact';
import Request from './components/request/Request';
import About from './components/about/About';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from 'react';
import { loadUser } from './redux/actions/user';
import { ProtectedRoute } from "protected-route-react";
import Profile from './components/profile/Profile';
import ChangePassword from './components/profile/ChangePassword';
import UpdateProfile from './components/profile/UpdateProfile';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/layout/notFound/NotFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import CreateCourse from "./components/admin/createCourse/CreateCourse";
import AdminCourses from "./components/admin/adminCourses/AdminCourses";
import Users from "./components/admin/users/Users";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Loader from './components/layout/loader/Loader';
import CoursePage from './components/CoursePage/CoursePage';

const App = () => {
  const { isAuthenticated, user, message, error, loading } = useSelector(state => state.user);

  const dispatch = useDispatch();
  useEffect(() => {

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);



  return (

    <Router>
      <Header isAuthenticated={isAuthenticated} user={user} />
      {
        loading ? (<Loader />) : <>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />

            <Route
              path="/course/:id"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CoursePage user={user} />
                </ProtectedRoute>
              }
            />

            <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile user={user} />
            </ProtectedRoute>} />

            <Route path="/changepassword" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
              <ChangePassword />
            </ProtectedRoute>} />

            <Route path="/updateprofile" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
              <UpdateProfile user={user} />
            </ProtectedRoute>} />

            <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect={"/profile"}>
              <Login />
            </ProtectedRoute>} />

            <Route path="/register" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect={"/profile"}>
              <Register />
            </ProtectedRoute>} />

            <Route path="/forgetpassword" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect={"/profile"}>
              <ForgetPassword />
            </ProtectedRoute>} />

            <Route path="/resetpassword/:token" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect={"/profile"}>
              <ResetPassword />
            </ProtectedRoute>} />

            <Route path="/subscribe" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
              <Subscribe user={user} />
            </ProtectedRoute>} />

            <Route path="*" element={<NotFound />} />

            <Route path="/paymentsuccess" element={<PaymentSuccess />} />

            <Route path="/paymentfail" element={<PaymentFail />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/request" element={<Request />} />
            <Route path="/about" element={<About />} />



            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role === 'admin'}>
              <Dashboard />
            </ProtectedRoute>} />

            <Route path="/admin/createcourse" element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role === 'admin'}>
              <CreateCourse />
            </ProtectedRoute>} />

            <Route path="/admin/courses" element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role === 'admin'}>
              <AdminCourses />
            </ProtectedRoute>} />

            <Route path="/admin/users" element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role === 'admin'}>
              <Users />
            </ProtectedRoute>} />

          </Routes>
        </>
      }
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
