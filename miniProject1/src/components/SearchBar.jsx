
export function SearchBar({ searchBtn, setChangeInput }) {
    return (
        <div className={`${searchBtn ? "block" : "hidden"}  md:block mx-5 my-4 bg-secondary/5 md:w-sm px-4 py-2 md:mr-32 rounded-sm`}>
            <input onChange={(e) => setChangeInput(e.target.value)} className="w-full outline-0" type="text" placeholder="🔍 Search products" />
        </div>
    )
}