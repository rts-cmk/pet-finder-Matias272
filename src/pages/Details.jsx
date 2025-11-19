import { useLoaderData, Link } from "react-router";
import Buttons from "../components/Buttons";
import ButtonVegetta from "../components/ButtonVegetta";

export default function Details() {
  const petDetails = useLoaderData();

  return (
    <div className="detailspage_wrapper">
      <section>
        <div>
          <img src={petDetails.image} alt="" />
        </div>
        <div></div>
      </section>
      <section>
        <h2>{petDetails.breed}</h2>
        <p className="pet__card__location">
          <svg
            width="14"
            height="14"
            viewBox="0 0 11 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              stroke="#57419D"
              d="M5.33333 0C2.72593 0 0 1.97101 0 5.21739C0 8.28986 4.74074 12.9855 4.91852 13.1594C5.03704 13.2754 5.15556 13.3333 5.33333 13.3333C5.51111 13.3333 5.62963 13.2754 5.74815 13.1594C5.92593 12.9855 10.6667 8.28986 10.6667 5.21739C10.6667 1.97101 7.94074 0 5.33333 0ZM5.33333 7.11111C4.32592 7.11111 3.55555 6.34074 3.55555 5.33333C3.55555 4.32592 4.32592 3.55555 5.33333 3.55555C6.34074 3.55555 7.11111 4.32592 7.11111 5.33333C7.11111 6.34074 6.34074 7.11111 5.33333 7.11111Z"
              fill="none"
            />
          </svg>
          {petDetails.location}
        </p>
        <ul>
          <li>
            <Buttons
              src={
                <img src="src/assets/img/icons/pawprint.svg" alt="pawprint" />
              }
            />
            {petDetails.breed}
          </li>
          <li>
            <Buttons />
            {petDetails.gender}
          </li>
        </ul>
        <p>{petDetails.long_description}</p>
      </section>
      <Link to={"/"}>
        <ButtonVegetta text={"Back"} />
      </Link>
    </div>
  );
}
