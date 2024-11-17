import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Home, FolderGit, BookOpen, Code2, FileText, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
export const Navbar = () => {
  const { t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [language, setLanguage] = useState("vi");
  const toggleLanguage = () => {
    setLanguage(language === "vi" ? "en" : "vi");
  };
  const menuItems = [
    {
      label: t("home"),
      link: "/",
      icon: Home,
    },
    {
      label: t("projects"),
      link: "/projects",
      icon: FolderGit,
    },
    {
      label: t("blog"),
      link: "/blog",
      icon: BookOpen,
    },
    {
      label: t("about"),
      link: "/about",
      icon: FileText,
    },
    {
      label: t("contact"),
      link: "/contact",
      icon: Code2,
    },
  ];
  return (
    <div className="flex justify-center align-items-center py-5">
      <div className="container">
        <div className="flex align-items-center justify-between">
          <div className="flex align-items-center">
            <Link to="/" className="text-2xl font-bold" style={{ lineHeight: 2 }}>
              Portfolio
            </Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link to={item.link} className="flex mx-4">
                      <item.icon className="mr-2" />
                      {t(item.label)}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div>
            <Button className="mr-1" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun /> : <Moon />}
            </Button>
            <Button onClick={toggleLanguage}>VI</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
