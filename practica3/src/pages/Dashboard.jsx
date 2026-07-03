import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"

export default function Dashboard() {
    const { user, setUser, theme, setTheme } = useContext(UserContext);
    
    const [newName, setNewName] = useState(user.name)

    useEffect(() => {
        setNewName(user.name)
    }, [user.name])

    function handleSubmit(e) {
        e.preventDefault()

        

        if(user.name === newName.trim()) return;

        setUser({...user, name: newName.trim()})
    }

    return (
        <>
            <header className="bg-container py-3 px-6 flex items-center justify-between">
                <div className="flex gap-2">
                    <span className="p-1 rounded-lg text-container bg-primary material-symbols-outlined">rocket_launch</span>
                    <h2 className="text-primary-text text-xl font-semibold">SaaSFlow</h2>
                </div>

                <div>
                    <img className="rounded-full border border-secondary-text/50 w-8" src={user.avatar} alt={`Imagen avatar del usuario ${user.name}`} />
                </div>

                <button className="hover:text-primary-text cursor-pointer flex items-center gap-1 text-secondary-text" onClick={() => setUser(null)}>
                    <span className="material-symbols-outlined">logout</span>
                    Log Out
                </button>
            </header>

            <main className="bg-background px-4 pb-8">
                <div className="py-8">
                    <h1 className="text-2xl font-bold text-primary-text">Welcome back, {user.name}</h1>
                    <p className="text-secondary-text">Manage your account settings and preferences here.</p>
                </div>

                <section className="bg-container rounded-xl p-4">
                    <div className="flex gap-3 mb-4">
                        <span className="p-1 rounded-md bg-primary/20 text-primary material-symbols-outlined">person_edit</span>
                        <h2 className="font-semibold text-xl text-primary-text">Profile Settings</h2>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label className="text-secondary-text font-semibold mb-1">Full Name</label>
                        <input onChange={(e) => setNewName(e.target.value)} className="p-2 border border-secondary-text/20 text-primary-text/80 shadow mb-3 rounded-md" type="text" placeholder={user.name} />

                        <label className="text-secondary-text font-semibold mb-1">Email Address</label>
                        <input className="p-2 border border-secondary-text/20 text-primary-text/80 shadow mb-3 rounded-md" type="email" value={user.email} readOnly/>
                        
                        <div className="flex justify-end">
                            <input className="cursor-pointer mt-8 text-container bg-primary py-2 px-8 rounded-lg font-semibold hover:bg-primary/80" type="submit" value="Save Changes" />
                        </div>
                    </form>
                    
                </section>

                <section className="mt-8 bg-container rounded-xl p-4">
                    <div className="flex gap-3 mb-4">
                        <span className="bg-primary/20 text-primary p-1 rounded-md material-symbols-outlined">settings</span>
                        <h2 className="font-semibold text-xl text-primary-text">App Preferences</h2>
                    </div>

                    <div className="flex gap-2 items-center ">
                        <p className="font-semibold text-primary-text">Appearance <span className="w-30 block font-normal text-secondary-text">Switch between light and dark themes</span></p>

                        <div className="bg-background flex gap-2 p-1 rounded-lg">
                            <button onClick={() => setTheme("light")} className={`${theme === "light" ? "bg-container" : "bg-background"} cursor-pointer rounded-md py-3 px-2 flex items-center gap-1 text-secondary-text `}>
                                <span className="material-symbols-outlined">sunny</span>
                                Light
                            </button>
                            <button onClick={() => setTheme("dark")} className={`${theme === "dark" ? "bg-container" : "bg-background"} cursor-pointer rounded-md py-3 px-2 flex items-center gap-1 text-secondary-text`}>
                                <span className="material-symbols-outlined">bedtime</span>
                                Dark
                            </button>
                        </div>
                    </div>

                    <div className="my-6 flex gap-4">
                        <p className="font-semibold text-primary-text">Email Notifications <span className="block text-secondary-text font-normal">Receive weekly analytics reports</span></p>

                        <label className="relative inline-block w-15 h-8.5">
                            <input className="peer sr-only" type="checkbox" />
                            
                            <span className="absolute inset-0 cursor-pointer rounded-4xl 
                                           bg-background transition-colors duration-300 
                                           peer-checked:bg-primary/90

                                           before:content-['']
                                           before:absolute 
                                           before:left-1
                                           before:bottom-1
                                           before:w-6
                                           before:h-6 
                                           before:rounded-4xl
                                           before:bg-primary-text 
                                           before:transition-transform
                                           before:duration-300 
                                           peer-checked:before:translate-x-6.5"></span>
                        </label>
                    </div>

                    <div className="my-6 flex gap-8 items-center">
                        <p className="font-semibold text-primary-text">Two-Factor Authentication <span className="block text-secondary-text font-normal">Secure your account with 2FA</span></p>

                        <button className="cursor-pointer bg-secondary-text text-background py-1 px-4 rounded-lg font-semibold hover:bg-secondary-text/70">Enable</button>

                    </div>

                </section>

                <section className="mt-8 bg-container rounded-xl p-8 flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <span className="p-2 rounded-lg bg-primary/20 text-primary material-symbols-outlined">currency_exchange</span>
                            <p className="uppercase text-sm text-primary-text">Current plan <span className="capitalize font-bold text-lg block">Pro Monthly</span></p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="p-2 rounded-lg bg-primary/20 text-primary material-symbols-outlined">storage</span>
                            <p className="uppercase text-sm text-primary-text">Storage used <span className="capitalize font-bold text-lg block">8.4 GB / 20 GB</span></p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="p-2 rounded-lg bg-primary/20 text-primary material-symbols-outlined">shield</span>
                            <p className="uppercase text-sm text-primary-text">Security Level <span className="capitalize font-bold text-lg block">excellent</span></p>
                        </div>
                </section>
            </main>

            <footer>
                <p className="bg-container py-4 text-center text-secondary-text text-md font-semibold">2026 SaaS Dash Inc. All rights reserved</p>
            </footer>
        </>
    )
}