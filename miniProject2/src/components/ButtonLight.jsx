
export default function ButtonLight({status, toggle}) {
    
    const src = status ?  "/images/svg/lightmode.svg" : "/images/svg/darkmode.svg"
    
    return (
        <div className="top-24 left-14 fixed">
            <button className="cursor-pointer" onClick={toggle}>
                <img width={35} height={35} 
                    src={src} 
                    alt="Boton lightmode" />
            </button>
        </div>
        
    )
}