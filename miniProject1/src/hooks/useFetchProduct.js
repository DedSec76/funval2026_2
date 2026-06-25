import { useEffect, useState } from "react";

export function useFetchProduct(id) {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function getProduct() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                
                if(!response.ok) {
                    throw new Error("Fallo la petición");
                }
                
                const data = await response.json()
                setProduct(data)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }

        getProduct();
    }, [id]);
    
    return { product, loading, error };
}