import React from "react";
// Context has been created
const ThemeContext = React.createContext("dark");
// Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
