
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="fixed z-20 px-2 my-1 rounded-r-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white shadow-md transition-colors"
        >
            {isDark ? '𖤓' : '☾'}
        </button>
    );
};