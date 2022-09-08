import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    console.log("Clicked");
  };

  return <ThemeContext.Provider value={[darkTheme, toggleTheme]}>{children}</ThemeContext.Provider>;
}
