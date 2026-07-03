import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState("light");
    const [error, setError] = useState(null)

    function login(email, password) {
        const user = { 
            name: "Aldair", 
            email:"aldair.example.com", 
            password:"Dedsec76#", 
            role:"Admin", 
            avatar:"/images/avatar.png" 
        }

        if(user.email === email && 
           user.password === password) 
        {
            setUser(user)
        } else {
            setError("Credenciales Incorrectas")
        }
    }

    const value = {user, setUser, theme, setTheme, login, error};

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}