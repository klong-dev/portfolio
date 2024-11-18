import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { NotFound } from "../pages/NotFound";
import { Contact } from "../pages/Contact";
import { RootLayout } from "@/layouts/RootLayout";
import { Project } from "@/pages/Project";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
