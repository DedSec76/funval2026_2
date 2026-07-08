export default function BookCard() {
    return (
        <div className="bg-white rounded-3xl shadow overflow-hidden">
            <img src="/images/libroPortada.jpg" alt="Imagen de portada del libro harry potter" />

            <div className="p-4 flex flex-col gap-1">
                <h3 className="font-bold text-lg">The Silent Patient</h3>
                <p className="text-gray-600">Alex Michaelides</p>

                <div className="flex justify-between">
                    <p className="text-gray-600">2019</p>
                    <p className="text-yellow-500">⭐ 4.8</p>
                </div>
            </div>
        </div>
    )
}