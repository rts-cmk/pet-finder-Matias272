// Onboarding.jsx
import { NavLink } from "react-router";
import ButtonVegetta from "../components/ButtonVegetta";

export default function Onboarding() {
  function handleSkip() {
    localStorage.setItem("visited", "true");
  }

  return (
    <div>
      <figure className="onboarding">
        <div className="onboarding__img">
          <img src="../assets/Animal.svg" alt="" />
        </div>
        <figcaption className="onboarding__text">
          <h3>My Pets</h3>
          <p>
            Taking care of a pet is my favorite, it helps me to gaimr stress and
            fatigue.
          </p>

          <NavLink to="/" onClick={handleSkip}>
            <ButtonVegetta text={"Skip"} />
          </NavLink>
        </figcaption>
      </figure>
    </div>
  );
}
