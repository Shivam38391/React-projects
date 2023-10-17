import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}, // we can take vaeiable and methods
})

export const ThemeProvider = ThemeContext.Provider

//custom hook

export default function useTheme(){
    return useContext(ThemeContext)
}