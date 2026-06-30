import { ProductCard } from "../components/ProductCard"
import Hero from "../components/Hero"
import { useFetchProducts } from "../hooks/useFetchProducts"
import CategoryFilter from "../components/CategoryFilter";
import { useContext, useState } from "react"
import { useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext"

export default function Home() {
    const { search } = useContext(SearchContext)
    
    const param = useParams().category
    
    const { products, loading, error } = useFetchProducts();
    //const [category, setCategory] = useState("");

    if(loading) return <p>Cargando datos espere...</p>

    if(error) return <p>{error}</p>

    let productFilter = products;
                /*= //category 
                        param
                        ? products.filter(p => p.category === param) 
                        : products */
    if (param) {
        productFilter = productFilter.filter(p => p.category === param) 
    }

    if (search) {
        productFilter = productFilter.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    }

    return (
        <>
            <Hero />

            {/* <CategoryFilter category={category} setCategory={setCategory}  />*/}

            <article className="px-4 pt-1 pb-8 md:max-w-350 md:mx-auto">
                <div className="my-10 md:my-8 flex justify-between">
                    <h2 className="font-semibold text-xl md:text-2xl">New Arrivals</h2>

                    <div className="text-primary text-lg cursor-pointer flex items-center">
                        <span className="bg-primary w-25 h-2 rounded-full"></span>
                    </div>
                </div>
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-9 lg:gap-14">
                    {productFilter.length <= 0
                    ? <p className="my-10 text-center text-tertiary font-bold text-xl lg:text-3xl col-span-3 lg:col-span-4">No se encontraron resultados</p> 
                    : productFilter?.map(data => (
                        <ProductCard key={data.id} 
                                    {...data} />
                    ))}
                </section>
            </article>
        </>
    )
}