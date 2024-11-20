import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Home, FolderGit, FileText, Sun, Moon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const { isDark, toggle, language, toggleLanguage } = useTheme();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

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
      label: t("resume"),
      link: "/resume",
      icon: FileText,
    },
    // {
    //   label: t("blog"),
    //   link: "/blog",
    //   icon: BookOpen,
    // },
    // {
    //   label: t("about"),
    //   link: "/about",
    //   icon: FileText,
    // },
    // {
    //   label: t("contact"),
    //   link: "/contact",
    //   icon: Code2,
    // },
  ];

  const NavItems = ({ mobile = false }) => (
    <>
      {menuItems.map((item, index) => (
        <NavigationMenuItem key={index}>
          <NavigationMenuLink asChild>
            <Link to={item.link} className={`flex items-center ${mobile ? "mb-4" : "mx-4"} text-sm`} onClick={() => mobile && setIsOpen(false)}>
              <item.icon className="mr-2" />
              {t(item.label)}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </>
  );

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              KLong.dev
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavItems />
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center">
            <Button variant="ghost" onClick={lang} className="mr-2">
              <span className="uppercase">{language}</span>
            </Button>
            <Button variant="ghost" onClick={toggleDarkMode} className="mr-2">
              {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-inherit">
                <NavigationMenu orientation="vertical" className="mt-6">
                  <NavigationMenuList className="flex-col items-start">
                    <NavItems mobile />
                  </NavigationMenuList>
                </NavigationMenu>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};
