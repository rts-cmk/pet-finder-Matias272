import { useLoaderData, Link } from "react-router";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Buttons from "../components/Buttons";

export default function Home() {
  const { pets: petsData, user } = useLoaderData();
  const categories = ["cats", "dogs", "birds", "other"];
  console.log(petsData);

  return (
    <div className="homepage_wrapper">
      <Header user={user} />
      <ul className="categories__ul">
        {categories.map((category) => {
          return (
            <li key={category}>
              <button className="category">{category}</button>
            </li>
          );
        })}
      </ul>
      <ul className="pet__ul">
        {petsData.map((pet) => {
          return (
            <Link key={pet.id} to={`/details/${pet.id}`}>
              <figure className="pet__card">
                <img src={pet.image} alt={pet.breed} />
                <figcaption className="pet__card__text">
                  <h3>{pet.breed}</h3>
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
                    {pet.location}
                  </p>
                  <p>{pet.short_description}</p>
                </figcaption>
                <Buttons
                  src={
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.4276 2.07925C13.085 1.80688 13.7895 1.66669 14.5011 1.66669C15.2126 1.66669 15.9172 1.80688 16.5745 2.07925C17.2318 2.35157 17.8289 2.75069 18.3319 3.25381C18.835 3.75677 19.2344 4.35419 19.5067 5.01142C19.7791 5.66876 19.9193 6.37333 19.9193 7.08487C19.9193 7.79642 19.7791 8.50099 19.5067 9.15833C19.2344 9.81562 18.8352 10.4128 18.332 10.9158C18.332 10.9158 18.3321 10.9158 18.332 10.9158L10.9653 18.2825C10.6399 18.6079 10.1123 18.6079 9.78683 18.2825L2.42016 10.9158C1.40414 9.89977 0.833344 8.52175 0.833344 7.08487C0.833344 5.648 1.40414 4.26998 2.42016 3.25395C3.43619 2.23793 4.81421 1.66713 6.25109 1.66713C7.68796 1.66713 9.06598 2.23793 10.082 3.25395L10.3761 3.54803L10.67 3.25409C10.67 3.25414 10.6701 3.25404 10.67 3.25409C11.173 2.7509 11.7703 2.3516 12.4276 2.07925ZM14.5011 3.33335C14.0085 3.33335 13.5207 3.43041 13.0656 3.61897C12.6105 3.80754 12.1971 4.08392 11.8488 4.43233L10.9653 5.3158C10.6399 5.64123 10.1123 5.64123 9.78683 5.3158L8.9035 4.43246C8.20003 3.729 7.24593 3.3338 6.25109 3.3338C5.25624 3.3338 4.30214 3.729 3.59867 4.43246C2.89521 5.13593 2.50001 6.09003 2.50001 7.08487C2.50001 8.07972 2.89521 9.03382 3.59867 9.73729L10.3761 16.5147L17.1535 9.73729C17.5019 9.38904 17.7784 8.97543 17.967 8.52034C18.1556 8.06526 18.2526 7.57748 18.2526 7.08487C18.2526 6.59227 18.1556 6.10449 17.967 5.64941C17.7784 5.19432 17.502 4.78084 17.1536 4.4326C16.8054 4.0842 16.3916 3.80754 15.9366 3.61897C15.4815 3.43041 14.9937 3.33335 14.5011 3.33335Z"
                        fill="#BDBDBD"
                      />
                    </svg>
                  }
                  on
                />
              </figure>
            </Link>
          );
        })}
      </ul>
      <NavBar />
    </div>
  );
}
