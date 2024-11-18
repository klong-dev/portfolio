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
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      document.documentElement.classList.add(localTheme);
      setIsDark(localTheme === "dark");
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  return <ThemeContext.Provider value={{ isDark, toggle }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => React.useContext(ThemeContext);
