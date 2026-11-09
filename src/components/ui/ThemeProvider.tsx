import {useState, type ReactNode} from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === "dark" ? "dark" : ""}>
                <div className="bg-white dark:bg-login-meta-dark dark:text-white">
                    {children}
                </div>
            </div>  
        </ThemeContext.Provider>
    );
}