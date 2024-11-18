import React from "react";
import { useTranslation } from "react-i18next";

type ThemeProviderType = {
  children: React.ReactNode;
};

const ThemeContext = React.createContext({
  isDark: true,
  language: "en",
  toggle: () => {},
  toggleLanguage: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderType> = ({ children }) => {
  const [isDark, setIsDark] = React.useState(true);
  const [language, setLanguage] = React.useState(() => {
    const localLanguage = localStorage.getItem("lang");
    return localLanguage ? localLanguage : "en";
  });
  const { i18n } = useTranslation();

  React.useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const localLanguage = localStorage.getItem("lang");
    if (localTheme) {
      document.documentElement.classList.add(localTheme);
      setIsDark(localTheme === "dark");
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
    if (localLanguage) {
      localStorage.setItem("lang", localLanguage);
    } else {
      localStorage.setItem("lang", "en");
    }
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vn" : "en");
    localStorage.setItem("lang", language === "en" ? "vn" : "en");
    i18n.changeLanguage(language === "en" ? "vn" : "en");
  };
  return <ThemeContext.Provider value={{ isDark, toggle, language, toggleLanguage }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => React.useContext(ThemeContext);
