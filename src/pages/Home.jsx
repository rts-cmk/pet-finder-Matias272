import { useLoaderData } from "react-router";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Buttons from "../components/Buttons";

export default function Home() {
  const petsData = useLoaderData();
  console.log(petsData);

  return (
    <div className="homepage_wrapper">
      <Header />
      <ul>
        {petsData.map((pet) => {
          return (
            <figure key={pet.breed}>
              <img src={pet.image} alt={pet.breed} />
              <figcaption>
                <h2>{pet.breed}</h2>
                <p></p>
                <p>{pet.short_description}</p>
              </figcaption>
            </figure>
          );
        })}
      </ul>
      <NavBar />
    </div>
  );
}
