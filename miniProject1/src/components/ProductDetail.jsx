import Button from "./Button/Button"

export default function ProductDetail({image, title, price, description, category, rating}) {

    return (
        <>
            <section className="flex flex-col gap-6">
                <div className="flex justify-center bg-neutral rounded-lg">
                    <img className="h-90" src={image} alt={`Imagen para venta de un ${title}`} />  
                </div>
                <div className="flex flex-col gap-4">
                    <p className="uppercase text-sm text-secondary/90 tracking-wider">{category}</p>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    
                    <div className="flex justify-between">
                        <p className="text-primary font-bold">${price}</p>
                        <p>⭐{rating?.rate || 0}</p>
                    </div>
                    
                    <p className="text-secondary/80">{description}</p>
                    <Button icon="shopping_cart" text="Add to Cart"/>
                </div>
            </section>
        </>
    )
}