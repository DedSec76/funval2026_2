export default function Button({color="primary", icon="", text}) {
    const colors = {
        primary: "bg-primary hover:bg-primary/85",
        secondary: "bg-secondary/80 hover:bg-secondary/85",
        tertiary: "bg-tertiary hover:bg-tertiary/85",
        neutral: "bg-neutral hover:bg-neutral/85",
        gris: "bg-[#282f3b] hover:bg-[#282f3b]/85 border border-neutral/30",
    };
    
    return (
        <>
            <button className={`${colors[color]} flex items-center justify-center gap-2 cursor-pointer rounded-md py-3 w-full text-neutral text-sm md:text-base font-bold`}>
                <span className="material-symbols-outlined">{icon}</span> 
                {text}
            </button>
        </>
    )
}