import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
    );
}
export default ThemeButton;
