import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";
import Favorites from "../components/Favorites";

export default function Home() {
    return (
        <>
            <Header />

            <div className="bg-gray-100">
                <main className="max-w-300 mx-auto py-6 px-4">
                    <SearchBar />

                    <section className="my-6">
                        <div className="mb-5 flex justify-between items-center">
                            <h2 className="text-xl font-bold">Recommended for you</h2>
                            <Link className="text-blue-600 hover:underline" to={"/all"}>View all</Link>
                        </div>

                        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                        </div>
                    </section>
                </main>

                <Favorites />

                <Footer />
            </div>
        </>
    )
}