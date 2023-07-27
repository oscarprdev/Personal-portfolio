import { createContext, ReactNode, useState } from "react";

interface ThemeState {
    isDark: boolean,
    toggleTheme: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const themeState = {
    isDark: true,
    toggleTheme: () => {}
}


export const ThemeContext = createContext<ThemeState>(themeState)

export const ThemeContextProvider = ({ children }: {children: ReactNode}) => {
    const [isDark, setIsDark] = useState(true)

    const toggleTheme = () => setIsDark(prevState => !prevState)

    return <ThemeContext.Provider value={{isDark, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}