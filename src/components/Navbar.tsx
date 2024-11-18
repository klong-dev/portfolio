import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Home, FolderGit, BookOpen, Code2, FileText, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export const Navbar = () => {
  const { isDark, toggle, language, toggleLanguage } = useTheme();
  const { t } = useTranslation();
  const toggleDarkMode = () => {
    toggle();
  };
  const lang = () => {
    toggleLanguage();
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
    <div className="flex justify-center align-items-center py-2 sticky top-0 z-50 backdrop-blur-md">
      <div className="container">
        <div className="flex align-items-center justify-between">
          <div className="flex align-items-center">
            <Link to="/" className="text-xl font-bold" style={{ lineHeight: 2 }}>
              KLong.dev
            </Link>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link to={item.link} className="flex mx-4 text-sm items-center">
                      <item.icon className="mr-2" />
                      {t(item.label)}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center">
            <Button variant="ghost" onClick={lang}>
              <span className="uppercase">{language}</span>
            </Button>
            <Button variant="ghost" className="mr-1" onClick={toggleDarkMode}>
              {isDark ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
