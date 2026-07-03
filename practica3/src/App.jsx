import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/Login'
import Home from "./pages/Home"
import Dashboard from './pages/Dashboard'
import NotFound from "./pages/NotFound"
import { UserContext } from './context/UserContext'
import { useContext, useEffect } from 'react'

export default function App() {
    const { user, theme } = useContext(UserContext);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme==="dark");
    }, [theme])
    
    return (
        <>
            
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to={"/login"}/>} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to={"/dashboard"}/>} />
                
                <Route path="*" element={<NotFound />} />
            </Routes>
            
        </>
    )
}