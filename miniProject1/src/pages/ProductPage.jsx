import ProductDetail from "../components/ProductDetail";
import { Link, useParams } from "react-router-dom"
import { useFetchProduct } from "../hooks/useFetchProduct";

export default function ProductPage() {
    const id = useParams().id;
    const { product, loading, error } = useFetchProduct(id)
    
    if(loading) return <p className="py-4 px-5">Cargando Producto...</p>

    if(error) return (
        <>
            <Link className="px-5 flex items-center gap-2 text-primary pb-2 transition duration-300 hover:-translate-x-3" to={"/"}>
                <span className="material-symbols-outlined no-underline">
                            line_start_arrow_notch
                </span>
                <span className="hover:underline">Volver</span>
            </Link>

            <p className="py-4 px-5 font-bold text-red-600">Producto No Encontrado</p>
        </> 
    )

    return (
        <>
            <div className="mx-5 mt-4">
                <Link className="flex items-center gap-2 text-primary pb-2 transition duration-300 hover:-translate-x-3" to={"/"}>
                    <span className="material-symbols-outlined no-underline">
                        line_start_arrow_notch
                    </span>
                    <span className="hover:underline">Volver</span>
                </Link>

                <ProductDetail {...product} />
            </div>
        </>
    )
}