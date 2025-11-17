import { Route, Routes } from "react-router";
import "./style/main.scss";
//
import Onboarding from "./pages/Onboarding";

export default function App() {
  return (
    <div className="page__wrapper">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="*" element={<h1>Page not Found 404</h1>} />
      </Routes>
    </div>
  );
}
