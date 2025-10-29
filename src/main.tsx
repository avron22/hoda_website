import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import About from "./pages/About.tsx";
import Press from "./pages/Press.tsx";
import Contact from "./pages/Contact.tsx";
import FashionModel from "./pages/models/FashionModel.tsx";
import RunwayModel from "./pages/models/RunwayModel.tsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
        { path: "models/fashionmodel", element: <FashionModel />},
        { path: "models./runwaymodel",element: <RunwayModel />},
      { path: "about", element: <About /> },
      { path: "press", element: <Press /> },
      { path: "contact", element: <Contact /> }
      
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
