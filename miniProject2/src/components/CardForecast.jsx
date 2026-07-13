import { formatDate } from "../utils/formatDate"

export default function CardForecast({w, i, unitSpan}) {

    return (
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
    )
}