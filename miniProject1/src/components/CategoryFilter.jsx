export default function CategoryFilter({ setCategory }) {
    const categories = [
        { name: "electronics", icon: "charger" },
        { name: "jewelery", icon: "diamond"},
        { name: "men's clothing", icon: "apparel" },
        { name: "women's clothing", icon: "checkroom"} 
    ]

    return (
        <div className="px-5 my-6 lg:my-10 lg:max-w-300 lg:mx-auto">
            <h2 className="mb-4 font-semibold text-xl md:text-2xl md:mb-8">Shop by Category</h2>
            <div className="flex flex-row flex-wrap gap-4">
                {categories.map(cat => (
                    <button key={cat.name} onClick={() => setCategory(cat.name)} 
                        className="md:text-lg flex items-center gap-1 cursor-pointer p-4 border border-secondary/20 rounded-full bg-neutral hover:bg-secondary/40"
                    >
                    <span className="material-symbols-outlined">
                        {cat.icon}
                    </span>
                        {cat.name}
                    </button>
                ))}
                <button className="md:text-lg cursor-pointer p-4 border border-secondary/20 rounded-full bg-neutral hover:bg-secondary/40" onClick={() => setCategory("")}>All</button>
            </div>
        </div>
    )    
}