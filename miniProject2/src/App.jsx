
export default function App() {
  
  return (
    <>
      <section className="bg-[#1E213A] flex flex-col w-screen h-screen overflow-hidden md:w-[30%] md:min-w-95 md:m-auto">
        <header className="flex justify-around items-end h-16">
          <input className="w-44 h-9 bg-[#6E707A] text-[#E7E7EB] cursor-pointer text-center" type="button" value="Search for Places" />

          <div className="flex items-center justify-center w-10 h-10 bg-[#ffffff33] 
              rounded-full cursor-pointer">
            <img 
                loading="lazy"
                width="25"
                height="25"
                src="/images/svg/location.svg" 
                alt="Botón para obtener localizacion actual" 
            />
          </div>
        </header>

        <div className="flex flex-col items-center w-full h-[90vh]">
          <div className="flex flex-col items-center justify-center w-full h-[45%] relative overflow-hidden after:bg-[url(/images/cloudBackground.png)] after:absolute
                after:w-full after:h-full after:bg-size-[150%_110%] after:bg-no-repeat after:opacity-5 after:bg-position-[bottom_center]"
          >
            <div className="flex items-center justify-center w-2/5 absolute">
              <img className="w-full object-contain" src="/images/weather/01n.png" alt="condición" loading="300" width="300" height="300" />
            </div>
          </div>
          <div className="flex items-center">
            <h2 className="font-medium text-9xl text-[#E7E7EB] my-8">22</h2>
            <h3 className=" mt-6 text-6xl text-[#A09FB1] font-medium">ºC</h3>
          </div>
          <h2 className="capitalize pt-6 pb-12 text-3xl text-[#A09FB1] font-semibold">clear sky</h2>
          <p className="text-sm text-[#88869D] font-medium mb-6"></p>
          <div className="flex items-center gap-2 text-sm text-[#88869D] h-10  bottom-0 font-semibold mb-2">
            <img loading="lazy" width="20" height="20" className="mb-2" src="/public/images/svg/location_on.svg" alt="Icono de localización" />
            Chosica
          </div>

        </div>
      </section>

      <div className="w-full h-fit min-h-screen flex flex-col items-center bg-[#100E1D] md:w-[70%] md:min-w-145 md:max-h-screen">
        <div className="flex justify-end items-end h-20 w-64 gap-5 md:max-w-2xl md:w-full">
          <button className=" w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-[#110E3C]  bg-[#E7E7EB] rounded-full">ºC</button>
          <button className="w-10 h-10 pr-1 pt-1 text-center text-xl font-bold text-[#E7E7EB]  bg-[#585676] rounded-full">ºF</button>
        </div>

        <section className="w-full md:px-5">
          <ul className="grid grid-cols-2 w-fit mx-auto gap-5 mt-5 md:max-w-2xl md:flex md:flex-row md:flex-wrap md:gap-4 md:w-fit">
            <li className="w-30 h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium">
              <h3 className="mb-2">Tomorrow</h3>
              <span className="flex items-center justify-center w-14 h-16">
                <img src="/images/weather/01d.png" alt="condition" loading="lazy" width="56" height="64" className="w-full h-full object-contain"  />
              </span>
              <div className=" flex gap-2 mt-2">
                <p>26ºC</p>
                <p className="text-[#A09FB1]">19ºC</p>
              </div>
            </li>

            <li className="w-30 h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium">
              <h3 className="mb-2">Tomorrow</h3>
              <span className="flex items-center justify-center w-14 h-16">
                <img src="/images/weather/01d.png" alt="condition" loading="lazy" width="56" height="64" className="w-full h-full object-contain"  />
              </span>
              <div className=" flex gap-2 mt-2">
                <p>26ºC</p>
                <p className="text-[#A09FB1]">19ºC</p>
              </div>
            </li>

            <li className="w-30 h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium">
              <h3 className="mb-2">Tomorrow</h3>
              <span className="flex items-center justify-center w-14 h-16">
                <img src="/images/weather/01d.png" alt="condition" loading="lazy" width="56" height="64" className="w-full h-full object-contain"  />
              </span>
              <div className=" flex gap-2 mt-2">
                <p>26ºC</p>
                <p className="text-[#A09FB1]">19ºC</p>
              </div>
            </li>

            <li className="w-30 h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium">
              <h3 className="mb-2">Tomorrow</h3>
              <span className="flex items-center justify-center w-14 h-16">
                <img src="/images/weather/01d.png" alt="condition" loading="lazy" width="56" height="64" className="w-full h-full object-contain"  />
              </span>
              <div className=" flex gap-2 mt-2">
                <p>26ºC</p>
                <p className="text-[#A09FB1]">19ºC</p>
              </div>
            </li>

            <li className="w-30 h-40 bg-[#1E213A] flex flex-col items-center justify-center text-[#E7E7EB] text-base font-medium">
              <h3 className="mb-2">Tomorrow</h3>
              <span className="flex items-center justify-center w-14 h-16">
                <img src="/images/weather/01d.png" alt="condition" loading="lazy" width="56" height="64" className="w-full h-full object-contain"  />
              </span>
              <div className=" flex gap-2 mt-2">
                <p>26ºC</p>
                <p className="text-[#A09FB1]">19ºC</p>
              </div>
            </li>
          </ul>
        </section>

        <div className=" w-full max-w-sm px-5 mt-12 md:w-full md:max-w-none md:m-auto md:flex md:flex-col md:items-center md:justify-center">
          <h2 className=" h-7 text-[#E7E7EB] text-2xl font-bold my-5 md:w-full md:max-w-2xl md:text-left">Today's Hightlights</h2>
          <div className="w-full flex flex-col items-center md:grid md:grid-cols-2  gap-5 md:gap-6 md:max-w-2xl">
            <div className="w-full max-w-82 h-48 bg-[#1E213A] flex flex-col items-center justify-center">
              <h2 className="text-medium text-base text-center text-[#E7E7EB]">Wind status</h2>
              <div className="flex items-end h-20 mb-4">
                <h3 className="text-[#E7E7EB] text-6xl font-bold">0.70</h3>
                <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">ms</h4>
              </div>
              <div className="flex items-center text-[#E7E7EB] text-sm">
                <span className="flex justify-center items-center w-8 h-8 m-3 rounded-full bg-[#ffffff4d]">
                  <img className="text-transparent rotate-320" width="18" height="18" src="/images/svg/navigation.svg" alt="Icono de navegacion" />
                </span>
                NW
              </div>
            </div>

            <div className="w-full max-w-82 h-48 bg-[#1E213A] flex flex-col items-center justify-center">
              <h2 className="text-medium text-base text-center text-[#E7E7EB]">Humidity</h2>
              <div className="flex items-end h-20 mb-4">
                <h3 className="text-[#E7E7EB] text-6xl font-bold">59</h3>
                <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">%</h4>
              </div>
              <div className=" w-[70%] font-bold text-xs flex justify-between text-[#A09FB1]">
                <p>0</p>
                <p>50</p>
                <p>100</p>
              </div>
              <div className="flex items-center w-[70%] h-2 bg-[#E7E7EB] rounded-3xl">
                <div className="h-2 bg-[#FFEC65] rounded-3xl m-0 p-0">
                </div>
              </div>
              <div className="w-[70%] text-right font-bold text-[#A09FB1]">%
              </div>
            </div>

            <div className=" w-full max-w-82 flex flex-col items-center justify-center bg-[#1E213A] py-4">
              <h2 className="text-medium text-base text-center text-[#E7E7EB]">Visibility</h2>
              <div className="flex items-end h-20 mb-4">
                <h3 className="text-[#E7E7EB] text-6xl font-bold">10.00</h3>
                <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">km</h4>
              </div>
            </div>

            <div className="w-full max-w-82 flex flex-col items-center justify-center bg-[#1E213A] p-4">
              <h2 className="text-medium text-base text-center text-[#E7E7EB]">Air Pressure</h2>
              <div className="flex items-end h-20 mb-4">
                <h3 className="text-[#E7E7EB] text-6xl font-bold">1012</h3>
                <h4 className="text-[#E7E7EB] text-4xl mb-2 ml-1">mb</h4>
              </div>
            </div>
          </div>

          <footer className="py-5 w-full flex flex-row justify-center items-center text-[#A09FB1]">
            <h4 className="text-sm font-medium text-center">Created by</h4>
            <h2 className="font-bold text-sm text-center mx-1">Aldair Rutte Bazán</h2>
            <h3 className="font-semibold text-sm text-center">dedsec.dev</h3>
          </footer>
        </div>
      </div>
    </>
  )
}


