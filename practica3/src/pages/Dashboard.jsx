import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function Dashboard() {
    const { user, setUser } = useContext(UserContext);
    console.log(user)

    return (
        <>
            <header className="py-3 px-6 flex items-center justify-between">
                <div className="flex gap-2">
                    <span className="p-1 rounded-lg text-white bg-purple-800 material-symbols-outlined">rocket_launch</span>
                    <h2 className="text-xl font-semibold">SaaSFlow</h2>
                </div>

                <div>
                    <img className="rounded-full border border-gray-200 w-8" src={user.avatar} alt={`Imagen avatar del usuario ${user.name}`} />
                </div>

                <button className="hover:text-gray-800 cursor-pointer flex items-center gap-1 text-gray-600" onClick={() => setUser(null)}>
                    <span className="material-symbols-outlined">logout</span>
                    Log Out
                </button>
            </header>

            <main className="bg-gray-100 px-4 pb-8">
                <div className="py-8">
                    <h1 className="text-2xl font-bold">Welcome back, {user.name}</h1>
                    <p className="text-gray-700">Manage your account settings and preferences here.</p>
                </div>

                <section className="bg-white rounded-xl p-4">
                    <div className="flex gap-3 mb-4">
                        <span className="p-1 rounded-md bg-purple-200 text-purple-900 material-symbols-outlined">person_edit</span>
                        <h2 className="font-semibold text-xl">Profile Settings</h2>
                    </div>
                    <form className="flex flex-col">
                        <label className="font-semibold mb-1">Full Name</label>
                        <input className="p-2 border border-gray-200 shadow mb-3 rounded-md" type="text" value={user.name} />

                        <label className="font-semibold mb-1">Email Address</label>
                        <input className="p-2 border border-gray-200 shadow mb-3 rounded-md" type="text" value={user.email} />
                        
                        <div className="flex justify-end">
                            <input className="cursor-pointer mt-8 text-white bg-purple-900 py-2 px-8 rounded-lg font-semibold hover:bg-purple-950" type="submit" value="Save Changes" />
                        </div>
                    </form>
                    
                </section>

                <section className="mt-8 bg-white rounded-xl p-4">
                    <div className="flex gap-3 mb-4">
                        <span className="text-purple-800 bg-purple-200 p-1 rounded-md material-symbols-outlined">settings</span>
                        <h2 className="font-semibold text-xl">App Preferences</h2>
                    </div>

                    <div className="flex gap-2 items-center ">
                        <p className="font-semibold">Appearance <span className="w-30 block font-normal text-gray-600">Switch between light and dark themes</span></p>

                        <div className="bg-gray-200 flex gap-2 p-1 rounded-lg">
                            <button className="rounded-md py-3 px-2 flex items-center gap-1 text-gray-800 bg-white">
                                <span className="material-symbols-outlined">sunny</span>
                                Light
                            </button>
                            <button className="rounded-md py-3 px-2 flex items-center gap-1 text-gray-800 bg-gray-200">
                                <span className="material-symbols-outlined">bedtime</span>
                                Dark
                            </button>
                        </div>
                    </div>

                    <div className="my-6 flex gap-4">
                        <p className="font-semibold">Email Notifications <span className="block text-gray-600 font-normal">Receive weekly analytics reports</span></p>

                        <label className="relative inline-block w-15 h-8.5">
                            <input className="peer sr-only" type="checkbox" />
                            
                            <span className="absolute inset-0 cursor-pointer rounded-4xl 
                                           bg-gray-300 transition-colors duration-300 
                                             peer-checked:bg-purple-700

                                           before:content-['']
                                           before:absolute 
                                           before:left-1
                                           before:bottom-1
                                           before:w-6
                                           before:h-6 
                                           before:rounded-4xl
                                         before:bg-white 
                                           before:transition-transform
                                           before:duration-300 
                                           peer-checked:before:translate-x-6.5"></span>
                        </label>
                    </div>

                    <div className="my-6 flex gap-8 items-center">
                        <p className="font-semibold">Two-Factor Authentication <span className="block text-gray-600 font-normal">Secure your account with 2FA</span></p>

                        <button className="cursor-pointer bg-gray-200 py-1 px-4 rounded-lg font-semibold hover:bg-gray-400">Enable</button>

                    </div>

                </section>

                <section className="mt-8 bg-white rounded-xl p-8 flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <span className="p-2 rounded-lg bg-purple-200 text-purple-800 material-symbols-outlined">currency_exchange</span>
                            <p className="uppercase text-sm text-gray-800">Current plan <span className="capitalize font-bold text-lg block">Pro Monthly</span></p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="p-2 rounded-lg bg-purple-200 text-purple-800 material-symbols-outlined">storage</span>
                            <p className="uppercase text-sm text-gray-800">Storage used <span className="capitalize font-bold text-lg block">8.4 GB / 20 GB</span></p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="p-2 rounded-lg bg-purple-200 text-purple-800 material-symbols-outlined">shield</span>
                            <p className="uppercase text-sm text-gray-800">Security Level <span className="capitalize font-bold text-lg block">excellent</span></p>
                        </div>
                </section>
            </main>

            <footer className="border-t border-gray-200">
                <p className="bg-white py-4 text-center text-gray-800 text-md font-semibold">2026 SaaS Dash Inc. All rights reserved</p>
            </footer>
        </>
    )
}