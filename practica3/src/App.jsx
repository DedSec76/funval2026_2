import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NotFound from "./pages/NotFound"
import { UserContext } from './context/UserContext'
import { useContext } from 'react'

export default function App() {
    const { user } = useContext(UserContext)
    
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