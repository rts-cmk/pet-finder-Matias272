import { Route, Routes, useNavigate } from "react-router";
import { useEffect } from "react";

import "./style/main.scss";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (!visited) {
      localStorage.setItem("visited", "true");
      navigate("/Onboarding", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="page__wrapper">
      <Routes>
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Page not Found 404</h1>} />
      </Routes>
    </div>
  );
}
