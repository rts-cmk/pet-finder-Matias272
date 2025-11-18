import { createBrowserRouter, Route, RouterProvider, Routes, useNavigate } from "react-router";
import { useEffect } from "react";

import "./style/main.scss";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import Details from "./pages/Details"

export default function App() {
  const petRouter = createBrowserRouter([
    {
      path: "/onboarding",
      element: <Onboarding />
    },
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/details:petId",
      element: <Details />
    }
  ])
  

  return (
    <div className="page__wrapper">
      <RouterProvider router={petRouter} />
    </div>
  );
}
