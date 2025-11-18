// App.jsx
import { createBrowserRouter, RouterProvider, redirect } from "react-router";

import "./style/main.scss";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import Details from "./pages/Details";
import petsLoader from "./loaders/loader";

function rootLoader() {
  const hasSeen = localStorage.getItem("visited");

  if (!hasSeen) {
    return redirect("/onboarding");
  }

  return petsLoader();
}

export default function App() {
  const petRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: rootLoader,
      hydrateFallbackElement: <h2>Loading...</h2>,
    },
    { path: "/details:petId", element: <Details /> },
    { path: "/onboarding", element: <Onboarding /> },
  ]);

  return (
    <div className="page__wrapper">
      <RouterProvider router={petRouter} />
    </div>
  );
}
