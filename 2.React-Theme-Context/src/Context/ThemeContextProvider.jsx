import React from "react";
import { useState } from "react";
import App from "../App";
export const ThemeContext = React.createContext();
export default function ThemeContextProvider({ children }) {
  const [isDarkTheme,setIsDarkTheme] = useState(false)
  return (
    <ThemeContext.Provider value={{setIsDarkTheme,isDarkTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
