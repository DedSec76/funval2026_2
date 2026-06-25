import Button from "./Button/Button";

export default function Hero() {
    return (
        <>
            <section className="relative
                                text-center md:text-left px-5 h-115">
                <div className="bg-[url(/images/imgHero3.png)] opacity-95 h-full bg-center bg-no-repeat bg-cover 
                                py-3">
                    <div className="absolute inset-0 -z-50 bg-secondary/80"></div>
                    {/* Container details hero */}
                    <div className="mt-10 md:mt-8 md:max-w-md md:ml-36 lg:ml-62">
                        <span className="block md:inline p-1 bg-primary/15 uppercase text-sm tracking-widest text-primary/90">New collection 2026</span>
                        <h1 className="py-4 font-bold text-neutral text-4xl md:text-6xl">Redefine Your Everyday Style</h1>
                        <p className="text-neutral/85 pb-6 md:my-4 md:w-sm">Discover out curated collection of premium essentials designed for the moden lifestyle.</p>

                        <div className="flex flex-col gap-3 md:flex-row opacity-90 md:w-xs">
                            <Button color={"primary"} text={"Shop Collection"}/>
                            <Button color={"gris"} text={"View Lookbook"}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
    
}