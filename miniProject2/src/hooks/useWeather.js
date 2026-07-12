import { useEffect, useState } from "react";

export function useWeather(url) {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchApi() {
            try {
                const res = await fetch(url);

                if(!res.ok) throw new Error("fallo al traer los datos")
                
                const data = await res.json();
                
                setWeather(data)

            } catch (error) {
                console.error(error)
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }
        fetchApi()
    }, [url])

    return { weather, loading, error }
}