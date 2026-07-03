import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import App from "./App"
import { HashRouter } from "react-router-dom";
import { UserProvider } from './context/UserContext'

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HashRouter>
            <UserProvider>
                <App />
            </UserProvider>
        </HashRouter>
    </StrictMode>
)