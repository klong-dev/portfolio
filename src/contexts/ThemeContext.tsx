import React from "react";

type ThemeProviderType = {
  children: React.ReactNode;
};

const ThemeContext = React.createContext({
  isDark: true,
  toggle: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderType> = ({ children }) => {
  const [isDark, setIsDark] = React.useState(true);

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return <ThemeContext.Provider value={{ isDark, toggle }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => React.useContext(ThemeContext);
