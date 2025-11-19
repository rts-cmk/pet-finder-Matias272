// ----- Imports -----
import { createBrowserRouter, RouterProvider, redirect } from "react-router";
// Style
import "./style/main.scss";
//Loaders
import petsLoader from "./loaders/petsLoader";
import userLoader from "./loaders/userLoader";
import petDetailLoader from "./loaders/petDetailLoader";
// Pages
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Profile from "./pages/profile";

async function rootLoader() {
  const hasSeen = localStorage.getItem("visited");

  if (!hasSeen) {
    return redirect("/onboarding");
  }

  const [pets, user] = await Promise.all([petsLoader(), userLoader()]);
  return { pets, user };
}

export default function App() {
  const petRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: rootLoader,
      hydrateFallbackElement: <h2>Loading...</h2>,
    },
    { path: "/details/:petId", element: <Details />, loader: petDetailLoader },
    { path: "/onboarding", element: <Onboarding /> },
    { path: `/profile`, element: <Profile />, loader: userLoader}
  ]);

  return (
    <div className="page__wrapper">
      <RouterProvider router={petRouter} />
    </div>
  );
}
