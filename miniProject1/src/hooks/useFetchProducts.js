import { useEffect, useState } from "react";

export function useFetchProducts() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                
                if(!response.ok) {
                    throw new Error("Fallo la petición");
                }
                
                const data = await response.json()
                setProducts(data)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }

        getProducts();
    }, []);
    
    return { products, loading, error };
}