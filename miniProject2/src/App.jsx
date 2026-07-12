import { useEffect, useState } from "react"
import { useWeather } from "./hooks/useWeather"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { formatDate } from "./utils/formatDate"
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
  const [citySelected, setCitySelected] = useState(null);
  const [location, setLocation] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY
  const [lat, setLat ] = useState(-12.026180)
  const [lon, setLon ] = useState(-76.898031)
  const [units, setUnits] = useState("metric")

  // Span que cambia la medida
  const unitSpan = units === "metric" ? "ºC" : "ºF";
  
  // Consumimos nuestra API mediante hook
  const {weather, error, loading} = useWeather(`
    https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`)

  if(loading) return <p>espere cargando...</p>
  if(error) return <p>{error}</p>

  // Destructuramos los datos de la API
  const weatherToday = weather.list[0]
  const todayTemp = weatherToday.weather[0]

  // Filtramos los 5 días de pronostico
  const only5 = weather.list.filter((w, i) => i % 8 === 0)

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

  // Dirección del viento
  let windDirection;
  if(weatherToday.wind.deg > 0 && 
     weatherToday.wind.deg <= 45) {
      windDirection = "NE"
  } else if (weatherToday.wind.deg <= 135) {
    windDirection = "SE"
  } else if (weatherToday.wind.deg <= 225) {
    windDirection = "SW"
  } else {
    windDirection = "NW"
  }

  return (
    <>
      <section className="bg-bg flex flex-col w-screen h-screen overflow-hidden md:w-[30%] md:min-w-95 md:m-auto">
        {/* Header Principal */}
        <Header toggle={setOpenModal} fn={handleLocation} />

        {/* Vista Principal de temperatura */}
        <div className="flex flex-col items-center w-full h-[90vh]">
          <div className="flex flex-col items-center justify-center w-full h-[45%] relative overflow-hidden after:bg-[url(/images/cloudBackground.png)] after:absolute
                after:w-full after:h-full after:bg-size-[150%_110%] after:bg-no-repeat after:opacity-5 after:bg-position-[bottom_center]"
          >
            <div className="bg-[#1e213a] rounded-full pb-8 pr-16 flex items-center justify-center w-2/5 absolute">
              <img className="w-full object-contain" src={`/images/weather/${todayTemp.icon}.png`} alt="condición" loading="300" width="300" height="300" />
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

      <div className="w-full h-fit min-h-screen flex flex-col items-center bg-bg2 md:w-[70%] md:min-w-145 md:max-h-screen">
        
        {/* Botones para cambiar medida */}
        <div className="flex justify-end items-end h-20 w-64 gap-5 md:max-w-2xl md:w-full">
          <button onClick={() => setUnits("metric")} className="cursor-pointer w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-text-heading  bg-bg rounded-full">ºC</button>
          <button onClick={() => setUnits("imperial")} className="cursor-pointer w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-bg2  bg-text rounded-full">ºF</button>
        </div>
        
        {/* Pronostico por 5 Días */}
        <section className="w-full md:px-5">
          <ul className="grid grid-cols-2 w-fit mx-auto gap-5 mt-5 md:max-w-2xl md:flex md:flex-row md:flex-wrap md:gap-4 md:w-fit">
            {only5.map((w, i) => (
              <li key={w.dt} className="w-30 h-40 bg-bg flex flex-col items-center justify-center text-text-heading text-base font-medium">
                <h3 className="mb-2">
                    { i === 0
                    ? "Tomorrow" 
                    : formatDate(w.dt_txt)}
                </h3>

                <span className="bg-bg2 rounded-full pr-2 flex items-center justify-center w-14 h-16">
                  <img src={`/images/weather/${w.weather[0].icon}.png`} alt="condition" loading="lazy" width="56" height="64" className="w-full h-full object-contain"  />
                </span>

                <div className=" flex gap-2 mt-2">
                  <p>{w.main.temp.toFixed(0)} {unitSpan}</p>
                  <p className="text-text">{w.main.temp_min.toFixed()} {unitSpan}</p>
                </div>
              </li>
              
            ))
            }
          </ul>
        </section>

        {/* Lo destacado de hoy */}
        <div className=" w-full max-w-sm px-5 mt-12 md:w-full md:max-w-none md:m-auto md:flex md:flex-col md:items-center md:justify-center">
          <h2 className=" h-7 text-text-heading text-2xl font-bold my-5 md:w-full md:max-w-2xl md:text-left">Today's Hightlights</h2>
          <div className="w-full flex flex-col items-center md:grid md:grid-cols-2  gap-5 md:gap-6 md:max-w-2xl">
            
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
      </div>

      <ModalSearchLocation openModal={openModal} setOpenModal={setOpenModal} setLat={setLat} setLon={setLon} setCitySelected={setCitySelected} location={location} setLocation={setLocation} />
    
      <ButtonLight status={status} toggle={toggle} />
    </>
  )
}


