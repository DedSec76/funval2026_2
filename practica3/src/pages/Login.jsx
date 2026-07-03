import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Login() {
    const navigate = useNavigate();
    const {user, login, error} = useContext(UserContext);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    function loguearse(e) {
        e.preventDefault()
        login(email, password)
        if(user) {
            navigate("/dashboard")
        }
    }

    return (
        <article className="h-screen bg-gray-300 flex items-center justify-center">
            <section className="bg-white border border-gray-300 rounded-xl shadow-lg px-8">

                {/* Cabecera del formulario */}
                <div className="mt-10 text-center">
                    <span className=" text-purple-600 bg-purple-200 material-symbols-outlined">rocket_launch</span>
                    <h1 className="text-4xl font-bold">Welcome back</h1>
                    <p className="text-gray-500 text-lg">Please enter your details to sign in</p>
                </div>

                {/* Formulario de acceso */}
                <form onSubmit={loguearse} className="my-6 flex flex-col gap-2">
                    {error ? <p className="rounded-md py-1 mb-4 bg-red-100 text-center text-lg text-red-600">{error}</p> : ""}
                    <div className="flex flex-col gap-2">
                        <label>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} className="p-2 border border-gray-300 rounded-md" type="text" placeholder="name@company.com" />
                    </div>
                    <div className="flex justify-between">
                        <label>Password</label>
                        <Link className="text-purple-800" to={"/forgot-pass"}>Forgot password?</Link>
                    </div>

                    <div className="flex justify-between p-2 border border-gray-300 rounded-md">
                        <input onChange={(e) => setPassword(e.target.value)} className="w-full outline-0" type="password" placeholder="....." />
                        <span>👁️</span>
                    </div>

                    <div className="flex gap-2 my-2 text-gray-600">
                        <input type="checkbox" />
                        <label>Remember for 30 days</label>
                    </div>

                    <input className="cursor-pointer py-2 rounded-lg bg-purple-700 hover:bg-purple-800 text-white" type="submit" value="Sign In" />

                    <div className="my-2 flex gap-2 items-center">
                        <span className="w-20 h-0.5 bg-gray-200"></span>
                        <span className="uppercase text-gray-500 text-sm">Or Continue With</span>
                        <span className="w-20 h-0.5 bg-gray-200"></span>
                    </div>

                    <button className="mb-4 cursor-pointer py-2 rounded-lg border border-gray-300 text-gray-900">Sign in with Google</button>
                    
                </form>

                <footer className="border-t border-gray-300 -mx-8">
                    <p className="text-gray-800 my-4 text-center">Don't have an account? <Link className="text-purple-700 font-semibold hover:text-purple-900">Start free trial</Link></p>
                </footer>
            </section>
            
        </article>
    )
}