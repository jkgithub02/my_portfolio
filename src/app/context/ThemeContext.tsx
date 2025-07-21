'use client'
import { createContext, useContext, useEffect, useState } from "react";
import { FaSlack } from "react-icons/fa";

type Theme = "Light" | "Dark"

interface ThemeContextType{
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;

}

const ThemeContext = createContext< ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children : React.ReactNode}) =>{
    const [theme, setThemeState] = useState<Theme>("Light");
    const[mounted, setMounted] = useState(false);

    // Update themes
    const setTheme = (newTheme : Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "Dark");
    }

    // Toggle themes
    const toggleTheme = () => {
        setTheme(theme === "Light" ? "Dark" : "Light");
    }

    // Initialize theme
    useEffect(()=> {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const systemTheme = window.matchMedia("(prefers-color dark)").matches ? "Dark" : "Light";
        const initialTheme = savedTheme || systemTheme;

        setThemeState(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "Dark");
        setMounted(true);
    },[])

    // Prevents wrong theme flashing
    if(!mounted){
        return null;
    }

        return(
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext);

    if(context == undefined){
        throw new Error("Theme used must included in a ThemeProvider");
    }
    
    return context;
}