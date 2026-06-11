import { useContext, createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
 const [theme, setTheme] = useState("light");
 const toggleTheme = () => {
 setTheme((prev) => (prev === "light" ? "dark" : "light"));
 };
 return (
 <ThemeContext.Provider value={{ theme, toggleTheme }}>
 {children}
 </ThemeContext.Provider>
 );
}

export function useTheme() {
 const ctx = useContext(ThemeContext);
 if (ctx === null) {
 throw new Error("useTheme must be used inside <ThemeProvider>");
 }
 return ctx;
}
// In components, instead of useContext(ThemeContext):
// const { theme, toggleTheme } = useTheme();
