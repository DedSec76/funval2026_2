import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="max-w-300 mx-auto flex items-center justify-between p-4">
            <div>
                <span className="text-blue-600 text-2xl font-bold">BookFinder</span>
                <span className="pl-1 text-2xl">📚</span>
            </div>

            
            <div className="flex items-center gap-14">
                <nav className="hidden md:flex gap-6 text-gray-600">
                    <Link>Explorar</Link>
                    <Link>Categorias</Link>
                    <Link>Best Sellers</Link>
                </nav>

                <div className="flex items-center gap-0.5  bg-blue-100 text-blue-600 rounded-2xl p-2">
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="font-bold">12</span>
                </div>
            </div>
        </header>
    )
}