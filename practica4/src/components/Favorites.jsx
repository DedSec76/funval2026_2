import { Link } from "react-router-dom";
import FavoriteCard from "./FavoriteCard";

export default function Favorites() {
    return (
        <section className="max-w-300 mx-4 xl:mx-auto py-6 px-4 md:bg-white md:mb-12 md:rounded-3xl">
            <div className="mb-4 flex justify-between items-center">
                <h3 className="text-lg font-bold">⭐ Mis Favoritos</h3>
                <Link className="text-sm uppercase font-semibold text-gray-500" to={"/favorites"}>Slide to View</Link>
            </div>

            {/* Lista de favoritos */}
            <div>
                <FavoriteCard />
            </div>
        </section>
    )
}