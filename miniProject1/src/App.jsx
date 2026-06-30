import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import NotFound from "./pages/NotFound"
import Header from './components/Header'

export default function App() {
    
    return (
        <>
            {/* Header Para todas las páginas */}
            <Header />

            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/products/category/:category" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}