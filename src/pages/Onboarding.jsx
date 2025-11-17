import { NavLink } from "react-router"
export default function Onboarding(){
    return(
        <div>
            <figure className="onboarding">
                <div className="onboarding__img"><img src="../assets/Animal.svg" alt="" /></div>
                <figcaption className="onboarding__text">
                    <h2>My Pets</h2>
                    <p>Taking care of a pet is my favorite, it helps me to gaimr stress and fatigue.</p>
                    <NavLink to="#"><button>Skip</button></NavLink>
                </figcaption>
            </figure>
        </div>
    )
}