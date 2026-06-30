import Button from "./Button/Button"

export default function ProductDetail({image, title, price, description, category, rating}) {

    return (
        <>
            <section className="flex flex-col gap-6 md:mt-16 md:gap-12 md:flex-row md:justify-center">
                <div className="flex justify-center bg-neutral rounded-lg">
                    <img className="h-90 lg:h-full" src={image} alt={`Imagen para venta de un ${title}`} />  
                </div>

                <div className="flex flex-col gap-4 md:gap-10 md:max-w-125">
                    <p className="uppercase text-sm md:text-base text-secondary/90 tracking-wider">{category}</p>
                    <h2 className="text-lg md:text-2xl font-semibold">{title}</h2>
                    
                    <div className="flex justify-between md:text-xl">
                        <p className="text-primary font-bold">${price}</p>
                        <p>⭐{rating?.rate || 0}</p>
                    </div>
                    
                    <p className="text-secondary/80 md:text-lg">{description}</p>
                    <Button icon="shopping_cart" text="Add to Cart"/>
                </div>
            </section>
        </>
    )
}