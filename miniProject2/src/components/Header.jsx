export default function Header({openModal, setOpenModal, fn: handleLocation}) {
    return (
        <header className="flex justify-around items-end h-16">
          <input onClick={() => setOpenModal(!openModal)} className="w-44 h-9 bg-text-heading/33 text-text-heading cursor-pointer text-center" type="button" value="Search for Places" />

          <div onClick={handleLocation} className="flex items-center justify-center w-10 h-10 bg-text-heading/33 
              rounded-full cursor-pointer">
            <img 
                loading="lazy"
                width="25"
                height="25"
                src="/images/svg/location.svg" 
                alt="Botón para obtener localizacion actual" 
            />
          </div>
        </header>
    )
}