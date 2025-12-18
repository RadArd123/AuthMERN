import React from 'react'
import FloatingShape from './components/FloatingShape.jsx'
import { Route, Routes, Navigate } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import VerificationPage from './pages/VerificationPage.jsx'
import { Toaster } from 'react-hot-toast'
import {useAuthStore} from './store/authStore.js'
import {useEffect} from 'react'
import HomePage from './pages/HomePage.jsx'
import LoadingSpinner from "./components/LoadingSpinner.jsx"
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx'
import ResetPasswordPage from './pages/ResetPasswordPage.jsx'


//redirect authenticated users to home page
const RedirectAuthenticatedUser = ({children}) => {
  const {isAuthenticated} = useAuthStore();
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};
// protected route that require authentication
const ProtectedRoute = ({children})=> {
  const {isAuthenticated} = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const {isCheckingAuth, checkAuth} = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  if(isCheckingAuth) return <LoadingSpinner/>
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to bg-emerald-900 flex items-center justify-center relative overflow-hidden">
      <Routes>
        <Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
        <Route path="/signup" element={<RedirectAuthenticatedUser><SignUpPage/></RedirectAuthenticatedUser>}/>
        <Route path="/login" element={<RedirectAuthenticatedUser><LoginPage/></RedirectAuthenticatedUser>}/>
        <Route path="/verify-email" element={<VerificationPage/>}/>
        <Route path="/forgot-password" element={<RedirectAuthenticatedUser><ForgotPasswordPage/></RedirectAuthenticatedUser>}/>
        <Route path="/reset-password/:token" element={<RedirectAuthenticatedUser><ResetPasswordPage/></RedirectAuthenticatedUser>}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
