import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
           <nav>
                <Link className="block p-10 text-center text-4xl" to={"/login"}>Login</Link>
           </nav>
        </>
    )
}