import CardForecast from "./CardForecast";

export default function Forecast({weather, unitSpan}) {
    // Filtramos los 5 días de pronostico
    const only5 = weather.list.filter((w, i) => i % 8 === 0)

    return (
        <section className="w-full md:px-5">
          <ul className="grid grid-cols-2 w-fit mx-auto gap-5 mt-5 md:max-w-2xl md:flex md:flex-row md:flex-wrap md:gap-4 md:w-fit">
            {only5.map((w, i) => (
                <CardForecast w={w} i={i} unitSpan={unitSpan} />
                ))
            }
          </ul>
        </section>
    )
}