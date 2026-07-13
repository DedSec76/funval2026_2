import { useEffect, useState } from "react"
import { useWeather } from "./hooks/useWeather"

import SideBar from "./components/SideBar"
import Forecast from "./components/Forecast"
import Highlight from "./components/Highlight"
import ModalSearchLocation from "./components/ModalSearchLocation"
import ButtonLight from "./components/ButtonLight"
import { useLightMode } from "./hooks/useLightMode"

export default function App() {
  // Aplicando lightmode / darkmode
  const [status, toggle] = useLightMode();
  
  useEffect(() => {
    document.documentElement.classList.toggle("dark", status)
  }, [status])

  const [openModal, setOpenModal] = useState(false);
  const [setCitySelected] = useState(null);
  const [location, setLocation] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY
  const [lat, setLat ] = useState(-12.026180)
  const [lon, setLon ] = useState(-76.898031)
  const [units, setUnits] = useState("metric")

  // Span que cambia la medida
  const unitSpan = units === "metric" ? "ºC" : "ºF";
  
  // Consumimos nuestra API mediante hook
  const {weather, error, loading} = useWeather(`
    https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
  )

  if(loading) return <p>espere cargando...</p>
  if(error) return <p>{error}</p>

  // Destructuramos los datos de la API
  const weatherToday = weather.list[0]
  const todayTemp = weatherToday.weather[0]

  // Función que maneja el botón de localización
  function handleLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLat(position.coords.latitude)
          setLon(position.coords.longitude)
        }
      )
    } else {
      console.log("Geolocation is not supported by this browser")
    }
  }

  return (
    <>
      <SideBar openModal={openModal} setOpenModal={setOpenModal} unitSpan={unitSpan} weather={weather} weatherToday={weatherToday} todayTemp={todayTemp} fn={handleLocation} />

      <div className="w-full h-fit min-h-screen flex flex-col items-center bg-bg2 md:w-[70%] md:min-w-145 md:max-h-screen">
        
        {/* Botones para cambiar medida */}
        <div className="flex justify-end items-end h-20 w-64 gap-5 md:max-w-2xl md:w-full">
          <button onClick={() => setUnits("metric")} className="cursor-pointer w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-text-heading  bg-bg rounded-full">ºC</button>
          <button onClick={() => setUnits("imperial")} className="cursor-pointer w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-bg2  bg-text rounded-full">ºF</button>
        </div>
        
        {/* Pronostico por 5 Días */}
        <Forecast weather={weather} unitSpan={unitSpan} />

        {/* Lo destacado de hoy */}
        <Highlight weatherToday={weatherToday} units={units} />
      </div>

      {/* Modal  */}
      <ModalSearchLocation openModal={openModal} setOpenModal={setOpenModal} setLat={setLat} setLon={setLon} setCitySelected={setCitySelected} location={location} setLocation={setLocation} />
    
      {/* Botón Darkmode / Ligthmode */}
      <ButtonLight status={status} toggle={toggle} />
    </>
  )
}


