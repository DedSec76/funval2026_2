import { Link } from "react-router-dom"
import { useState } from 'react'
import { SearchBar } from './SearchBar'
import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"


export default function Header() {
    const { setSearch } = useContext(SearchContext);

    const [show, setShow] = useState(false)
    const [searchBtn, setSearchBtn] = useState(false)

    return (
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
                            onClick={ () => setSearchBtn(!searchBtn)}
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
                <Link to={"/products/category/electronics"} className="p-2 hover:bg-primary hover:text-neutral" >Electronics</Link>
                <Link to={"/products/category/jewelery"} className="p-2 hover:bg-primary hover:text-neutral" >Jewelry</Link>
                <Link to={"/products/category/men's clothing"} className="p-2 hover:bg-primary hover:text-neutral" >Men's</Link>
                <Link to={"/products/category/women's clothing"} className="p-2 hover:bg-primary hover:text-neutral" >Women's</Link>
            </nav>

            <SearchBar searchBtn={searchBtn} setChangeInput={setSearch}/>
        </div>
    )
}