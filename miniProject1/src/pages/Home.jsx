//import { useEffect, useState } from "react"
import { ProductCard } from "../components/ProductCard"
import Hero from "../components/Hero"
import { useFetchProducts } from "../hooks/useFetchProducts"

export default function Home() {
    const { products, loading, error } = useFetchProducts();

    if(loading) return <p>Cargando datos espere...</p>

    if(error) return <p>{error}</p>

    return (
        <>
            <Hero />

            <article className="px-4 pt-1 pb-8 md:max-w-350 md:mx-auto">
                <div className="my-4 md:my-8 flex justify-between">
                    <h2 className="font-semibold text-xl md:text-2xl">New Arrivals</h2>
                    <button className="text-primary text-lg cursor-pointer flex items-center">
                        <span className="hover:underline">See All</span>
                        <span className="material-symbols-outlined">arrow_right_alt</span>
                    </button>
                </div>
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-9 lg:gap-14">
                    {products?.map(data => (
                        <ProductCard key={data.id} 
                                    {...data} />
                    ))}
                </section>
            </article>
        </>
    )
}