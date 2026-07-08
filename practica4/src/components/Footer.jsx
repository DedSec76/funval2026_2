import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-4 px-8">
            <nav className="md:hidden flex justify-between text-gray-700 font-semibold">
                <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined">home</span>
                    <Link to={"/"}>Home</Link>
                </div>

                <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined">explore</span>
                    <Link to={"/discover"}>Discover</Link>
                </div>

                <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined">favorite</span>
                    <Link to={"/favorites"}>Favorites</Link>
                </div>

                <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined">person</span>
                    <Link to={"/profile"}>Profile</Link>
                </div>
            </nav>
            <p className="hidden md:block text-center text-gray-600 md:py-2">&copy; 2026 BookFinder. Hecho con 💗 para amantes de la lectura.</p>
        </footer>
    )
}