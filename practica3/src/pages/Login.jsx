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
        <article className="h-screen bg-background flex items-center justify-center">
            <section className="bg-container border border-primary-text/10 rounded-xl shadow-lg px-8">

                {/* Cabecera del formulario */}
                <div className="mt-10 text-center">
                    <span className="text-primary p-1.5 rounded-md bg-primary/20 material-symbols-outlined">rocket_launch</span>
                    <h1 className="text-4xl font-bold text-primary-text">Welcome back</h1>
                    <p className="text-secondary-text text-lg">Please enter your details to sign in</p>
                </div>

                {/* Formulario de acceso */}
                <form onSubmit={loguearse} className="my-6 flex flex-col gap-2">
                    {error ? <p className="rounded-md py-1 mb-4 bg-red-100 text-center text-lg text-red-600">{error}</p> : ""}
                    <div className="flex flex-col gap-2">
                        <label className="text-primary-text">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} className="p-2 border border-secondary-text/20 rounded-md text-secondary-text placeholder:text-secondary-text" type="text" placeholder="name@company.com" />
                    </div>
                    <div className="flex justify-between">
                        <label className="text-primary-text">Password</label>
                        <Link className="text-primary" to={"/forgot-pass"}>Forgot password?</Link>
                    </div>

                    <div className="flex items-center text-base justify-between p-2 border border-secondary-text/20 rounded-md">
                        <input onChange={(e) => setPassword(e.target.value)} className="text-secondary-text w-full outline-0 placeholder:text-secondary-text" type="password" placeholder="*********" />
                        <span>👁️</span>
                    </div>

                    <div className="flex gap-2 my-2 text-secondary-text">
                        <input type="checkbox" />
                        <label>Remember for 30 days</label>
                    </div>

                    <input className="cursor-pointer py-2 rounded-lg bg-primary hover:bg-primary/70 hover:text-primary-text text-background" type="submit" value="Sign In" />

                    <div className="my-2 flex gap-2 items-center">
                        <span className="w-20 h-0.5 bg-secondary-text/30"></span>
                        <span className="uppercase text-secondary-text text-sm">Or Continue With</span>
                        <span className="w-20 h-0.5 bg-secondary-text/30"></span>
                    </div>

                    <button className="mb-4 cursor-pointer py-2 rounded-lg border border-secondary-text/30 text-secondary-text hover:border-primary-text hover:text-primary-text">Sign in with Google</button>
                    
                </form>

                <footer className="border-t border-secondary-text/20 -mx-8">
                    <p className="text-secondary-text my-4 text-center">Don't have an account? <Link className="text-primary font-semibold hover:text-primary/70">Start free trial</Link></p>
                </footer>
            </section>
            
        </article>
    )
}