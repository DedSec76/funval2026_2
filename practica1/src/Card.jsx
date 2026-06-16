import './index.css';

export default function Card({photo, name, role}) {
    return (
        <div className='even:mt-16 md:even:m-0 
                        md:nth-last-of-type-2:mt-20 
                        md:nth-of-type-2:mt-20'>
            <figure className='relative'>
                <img className='w-38 md:w-full' src={photo} alt={`Foto de perfil de ${name}, ${role}`}/>
            
                <h3 className='font-bold text-lg md:text-2xl'>{name}</h3>
                <p className='text-sm md:text-xl w-34 md:w-42 absolute md:left-4/5 md:top-[14%] left-20 top-14 rotate-90 uppercase'>{role}</p>
            </figure>
        </div>
    )
}