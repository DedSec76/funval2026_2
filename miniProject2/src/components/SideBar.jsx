import Header from "./Header";
import { formatDate } from "../utils/formatDate";

export default function SideBar({openModal, setOpenModal, unitSpan, weather, weatherToday, todayTemp, fn: handleLocation}) {
    
    return (
        <section className="bg-bg flex flex-col w-screen h-screen overflow-hidden md:w-[30%] md:min-w-95 md:m-auto">
            {/* Header Principal */}
            <Header openModal={openModal} setOpenModal={setOpenModal} fn={handleLocation} />
        
            {/* Vista Principal de temperatura */}
            <div className="flex flex-col items-center w-full h-[90vh]">
                <div className="flex flex-col items-center justify-center w-full h-[45%] relative overflow-hidden after:bg-[url(/images/cloudBackground.png)] after:absolute
                        after:w-full after:h-full after:bg-size-[150%_110%] after:bg-no-repeat after:opacity-5 after:bg-position-[bottom_center]"
                >
                    <div className="bg-[#1e213a] rounded-full pb-8 pr-16 flex items-center justify-center w-2/5 absolute">
                        <img className="w-full object-contain" src={`/images/weather/${todayTemp.icon}.png`} alt="condición" loading="lazy" width="300" height="300" />
                    </div>
                </div>
        
                <div className="flex items-center">
                    <h2 className="font-medium text-9xl text-text-heading my-8">{weatherToday.main.temp.toFixed(0)}</h2>
                    <h3 className=" mt-6 text-6xl text-text font-medium">{unitSpan}</h3>
                </div>
        
                <h2 className="capitalize pt-6 pb-12 text-3xl text-text font-semibold">{todayTemp.description}</h2>
                <p className="text-sm text-text font-medium mb-6">Today &nbsp;&nbsp; . &nbsp;&nbsp; {formatDate(weatherToday.dt_txt)}</p>
        
                <div className="flex items-center gap-2 text-sm text-text h-10  bottom-0 font-semibold mb-2">
                    <img loading="lazy" width="20" height="20" className="mb-2" src="/images/svg/location_on.svg" alt="Icono de localización" />
                    {weather.city.name}
                </div>
            </div>
        </section>
    )
}