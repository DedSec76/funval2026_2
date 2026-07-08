export default function SearchBar() {
    return (
        <div className="lg:max-w-200 lg:mx-auto flex flex-col gap-4">
            <div className="bg-white p-4 rounded-full">
                <input className="outline-0 w-full text-lg text-gray-600 placeholder:text-gray-500" type="text" placeholder="🔍 Search by title, author, or ISBN..." />
            </div>

            <button className="bg-blue-600 hover:bg-blue-800 text-white text-lg font-semibold py-4.5 rounded-full">Search Library</button>
        </div>
    )
}