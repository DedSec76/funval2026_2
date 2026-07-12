import { useState } from "react";

export function useLightMode(initialState = false) {
    const [status, setStatus] = useState(initialState);
    const toggle = () => setStatus(!status);
    return [status, toggle];
}