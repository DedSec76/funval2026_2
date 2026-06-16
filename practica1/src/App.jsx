import './index.css'
import Card  from './Card.jsx';

const team = [
  {
    name: "Bill Mahoney",
    photo: "/images/photo1.png",
    role: "Product Owner",
    description: "Is a good boy"
  },
  {
    name: "Saba Cabrera",
    photo: "/images/photo2.png",
    role: "Art Director",
    description: "Is a good girl"
  },
  {
    name: "Shae Le",
    photo: "/images/photo3.png",
    role: "Tech Lead",
    description: "Is a good boy"
  },
  {
    name: "Skylah Lu",
    photo: "/images/photo4.png",
    role: "UX Designer",
    description: "Is a good boy"
  },
  {
    name: "Griff Richards",
    photo: "/images/photo5.png",
    role: "Developer",
    description: "Is a good boy"
  },
  {
    name: "Stan John",
    photo: "/images/photo6.png",
    role: "Developer",
    description: "Is a good boy"
  },
]

export default function App() {
  return (
    <>
      <header className="relative max-w-300 my-10 mx-8 
                         md:mx-auto md:flex md:justify-between 
                        "
      >
        
        <div className=" flex gap-2">
          <h1 className="text-3xl md:text-4xl font-bold">The creative crew</h1>
          <button className='absolute -top-6 right-1 cursor-pointer hover:brightness-85'>
            <img src="/icons/moon.png" alt="Imange de Luna para boton darkmode" />
          </button>
        </div>

        <div className='my-8 pl-6 md:mt-2 md:w-lg'>
          <h2 className='text-lg md:text-xl font-bold'>Who we are</h2>
          <p className='md:text-lg'>We are team of creatively diverse, driven.
            innovative individuals working in various
            locations from the world.
          </p>
        </div>
      </header>

      <section className='max-w-300 md:mx-auto md:grid-cols-3 mx-8 grid grid-cols-2 md:gap-x-18 gap-x-12'>
        {team.map((person, i) => (
          <Card key={i} {...person} />
        ))}
      </section>

      <footer className='max-w-300 md:mx-auto mt-12 mb-6'>
        <p className='md:text-xl text-center text-gray-500'>Creado por <span className='font-semibold'>Aldair Rutte</span> - ded.dev</p>
      </footer>
    </>
  )
}
