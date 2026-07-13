import { useState } from "react";
import cities from "../data/cities.json";

export default function ModalSearchLocation({openModal, setOpenModal, setLat, setLon, setCitySelected, location, setLocation}) {
    
    const [cityFilter, setCityFilter] = useState([])
    
    function handleSuggestion() {
        const filter = cities.filter(c => c.name.toLowerCase() === location.toLowerCase()).slice(0, 3)
    
        setLocation(location)
        setCityFilter(filter)
    }

    function searchWeather(e) {
        const citySelected = cityFilter.find(c => c.id === Number(e.target.dataset.id))
        setCitySelected(citySelected)
        setLat(citySelected.lat)
        setLon(citySelected.lon)
        setOpenModal(false)
    }
    

    return (
        <section className={`${openModal ? "block" : "hidden" } w-screen h-screen max-h-screen 
                           bg-bg absolute top-0 left-0 
                           md:w-[30vw] md:min-w-95`}
        >
            <nav className="w-full h-24 flex items-end justify-around">
                <span onClick={() => setOpenModal(false)} className="absolute right-10 top-6 cursor-pointer">
                    <img src="/images/svg/close.svg" alt="icono de cierre" loading="lazy" width="25" height="25" 
                         className="hover:w-7 hover:h-7" 
                    />
                </span>

                <div className="flex items-center w-[55%] max-w-67 h-9 bg-transparent border border-text-heading  font-medium text-base text-text">
                    <img className="mx-2" loading="lazy" width="24" height="24" src="/images/svg/search.svg" alt="Icono de busqueda" />
                    <input onChange={(e) => setLocation(e.target.value)}
                           className="bg-transparent outline-none w-58.25 h-8 pr-1 placeholder:text-text" 
                           placeholder="Search location"
                           type="text"
                    />
                </div>

                <button onClick={handleSuggestion} className=" w-20 h-9 bg-accent px-1 font-semibold text-base text-text-heading hover:text-white cursor-pointer">Search</button>
            </nav>

            <ul className="flex flex-col items-center w-full h-fit mt-80px pb-5">
                {cityFilter.map(c => (
                    <li data-id={c.id} onClick={searchWeather} key={c.id} className="flex justify-between w-[70%] max-w-367px h-14   pl-2 text-base font-medium cursor-pointer text-text hover:border border-border mt-6  hover:after:bg-[url('/images/svg/arrow.svg')] hover:after:bg-contain hover:after:bg-no-repeat hover:after:p-2 hover:after:mt-5 hover:after:mr-5">
                        <p className="flex items-center text-lg ml-2">{c.name},&nbsp; {c.country_code}</p>
                    </li>
                ))}
            </ul>
            
        </section>
    )
}