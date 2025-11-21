import { useLoaderData } from "react-router";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

export default function Profile() {
  const userData = useLoaderData();
  console.log(userData);
  return (
    <div className="profilepage__wrapper">
      <Header user={userData} />
      <figure className="profile">
        <div className="profile__img">
          <img src={userData.image} alt="profileImg" />
        </div>
        <figcaption className="profile__des">
          <h2>{userData.name}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            dolorem tempore ducimus dignissimos veniam id, ad molestias
            excepturi est quis debitis illum dolor laborum inventore suscipit
            nobis aliquid, tenetur voluptatibus.
          </p>
        </figcaption>
      </figure>
      <NavBar />
    </div>
  );
}
