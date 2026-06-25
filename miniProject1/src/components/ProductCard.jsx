import { Link } from "react-router-dom";
import Button from "./Button/Button";

export function ProductCard({id, image, category, title, price}) {
    return (
        <>
            <div className="transition-transform hover:scale-105">
                <Link to={`/products/${id}`}>
                    <img className="bg-neutral rounded-lg h-60 aspect-video" src={image} alt={`Imagen del producto ${title}`} />
                    <div className="py-3 flex flex-col gap-2">
                        <p className="text-secondary/90 text-sm md:text-base uppercase">{category}</p>
                        <h3 className="truncate font-bold md:text-lg">{title}</h3>
                        <p className="text-primary font-bold md:text-lg">${price.toFixed(2)}</p>
                    </div>
                </Link>
                <Button
                    color="secondary"
                    icon="add_shopping_cart" 
                    text={"Add to Cart"}
                />
            </div>
        </>
    )
}