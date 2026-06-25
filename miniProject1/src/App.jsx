import './App.css'
import { Route, Link, HashRouter, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import NotFound from "./pages/NotFound"
import { useState } from 'react'

export default function App() {
    const [show, setShow] = useState(false)
    const [search, setSearch] = useState(false)

    return (
        <>
            {/* Header Para todas las páginas */}
            <div className="md:flex md:justify-between relative max-w-350 mx-auto">
                <header className="p-5">
                    <div className="flex justify-between items-center">
                        <button className="flex items-center cursor-pointer md:hidden"
                                onClick={() => setShow(!show)}
                        >
                            <span className="material-symbols-outlined">
                                {!show ? "menu" : "close"}
                            </span>
                        </button>

                        <Link to={"/"}><span className="text-primary font-bold text-xl">LUXE</span></Link>

                        <div className="md:absolute md:right-5 flex gap-6 items-center">
                            <button className="cursor-pointer md:hidden"
                                    onClick={ () => setSearch(!search)}
                            >
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                            </button>

                            <button className="cursor-pointer">
                                <span className="material-symbols-outlined">
                                    shopping_bag
                                </span>
                            </button>
                        </div>
                    </div>
                </header>

                <nav className={`${show ? "flex" : "hidden"} flex-col gap-3 text-center md:text-lg md:flex md:flex-row md:py-4`}>
                    <a className="p-2 hover:bg-primary hover:text-neutral" href="#">Electronics</a>
                    <a className="p-2 hover:bg-primary hover:text-neutral" href="#">Jewelry</a>
                    <a className="p-2 hover:bg-primary hover:text-neutral" href="#">Men's</a>
                    <a className="p-2 hover:bg-primary hover:text-neutral" href="#">Women's</a>
                </nav>

                <div className={`${search ? "block" : "hidden"}  md:block mx-5 my-4 bg-secondary/5 md:w-sm px-4 py-2 md:mr-32 rounded-sm`}>
                    <input className="w-full outline-0" type="text" placeholder="🔍 Search products" />
                </div>
            </div>

            <HashRouter>
                <Routes> 
                    <Route path="/" element={<Home />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </HashRouter>
        </>
    )
}