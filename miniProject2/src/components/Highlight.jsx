import { getWindDirection } from "../utils/getWindDirection"
import Footer from "./Footer"

export default function Highlight({ weatherToday, units }) {
    const windDirection = getWindDirection(weatherToday.wind.deg)

    return (
        <div className="w-full max-w-sm px-5 mt-12 md:w-full md:max-w-none md:m-auto md:flex md:flex-col md:items-center md:justify-center">
          <h2 className="h-7 text-text-heading text-2xl font-bold my-5 md:w-full md:max-w-2xl md:text-left">Today's Hightlights</h2>
          <div className="w-full flex flex-col items-center md:grid md:grid-cols-2 gap-5 md:gap-6 md:max-w-2xl">
            
            {/* Estado del viento */}
            <div className="w-full max-w-82 h-48 bg-bg flex flex-col items-center justify-center">
              <h2 className="text-medium text-base text-center text-text-heading">Wind status</h2>
              <div className="flex items-end h-20 mb-4">
                <h3 className="text-text-heading text-6xl font-bold">{weatherToday.wind.speed}</h3>
                <h4 className="text-text-heading text-4xl mb-2 ml-1">{units === "metric" ? "ms" : "mph"}</h4>
              </div>
              <div className="flex items-center text-text text-sm">
                <span className="flex justify-center items-center w-8 h-8 m-3 rounded-full bg-text/65">
                  <img className="text-text" width="18" height="18" style={{rotate: `${weatherToday.wind.deg}deg`}} src="/images/svg/navigation.svg" alt="Icono de navegacion" />
                </span>
                { windDirection }
              </div>
            </div>

            {/* Humedad */}
            <div className="w-full max-w-82 h-48 bg-bg flex flex-col items-center justify-center">
              <h2 className="text-medium text-base text-center text-text-heading">Humidity</h2>
              <div className="flex items-end h-20 mb-4">
                <h3 className="text-text-heading text-6xl font-bold">{weatherToday.main.humidity}</h3>
                <h4 className="text-text-heading text-4xl mb-2 ml-1">%</h4>
              </div>
              <div className="w-[70%] font-bold text-xs flex justify-between text-text">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div className="flex items-center w-[70%] h-2 bg-text rounded-3xl">
                <div className="h-2 bg-[#FFEC65] rounded-3xl m-0 p-0"
                     style={{width: `${weatherToday.main.humidity}%`}}>
                </div>
              </div>
              <div className="w-[70%] text-right font-bold text-text">%
              </div>
            </div>

            {/* Visibilidad */}
            <div className=" w-full max-w-82 flex flex-col items-center justify-center bg-bg py-4">
              <h2 className="text-medium text-base text-center text-text-heading">Visibility</h2>
              <div className="flex items-end h-20 mb-4">
                <h3 className="text-text-heading text-6xl font-bold">{units === "metric" ? (weatherToday.visibility / 1000).toFixed(2) : (weatherToday.visibility / 1609).toFixed(2)}</h3>
                <h4 className="text-text-heading text-4xl mb-2 ml-1">{units === "metric" ? "km" : "miles"}</h4>
              </div>
            </div>

            {/* Presión del aire */}
            <div className="w-full max-w-82 flex flex-col items-center justify-center bg-bg p-4">
              <h2 className="text-medium text-base text-center text-text-heading">Air Pressure</h2>
              <div className="flex items-end h-20 mb-4">
                <h3 className="text-text-heading text-6xl font-bold">{weatherToday.main.pressure}</h3>
                <h4 className="text-text-heading text-4xl mb-2 ml-1">mb</h4>
              </div>
            </div>
          </div>

          <Footer />
        </div>
    )
}