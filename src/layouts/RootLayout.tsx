import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="pb-12">
        <Outlet />
      </main>
    </div>
  );
};
