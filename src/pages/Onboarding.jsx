import { NavLink, useNavigate } from "react-router";
import ButtonVegetta from "../components/ButtonVegetta";
export default function Onboarding() {
  const navigate = useNavigate();
  localStorage.setItem("visited", "true");
  return (
    <div>
      <figure className="onboarding">
        <div className="onboarding__img">
          <img src="../assets/Animal.svg" alt="" />
        </div>
        <figcaption className="onboarding__text">
          <h2>My Pets</h2>
          <p>
            Taking care of a pet is my favorite, it helps me to gaimr stress and
            fatigue.
          </p>
          <NavLink to="/">
            <ButtonVegetta text={"Skip"}/>
          </NavLink>
        </figcaption>
      </figure>
    </div>
  );
}
