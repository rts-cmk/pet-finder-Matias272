import Buttons from "./Buttons";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__user">
        <div className="header__user__img">
        </div>
        <figcaption className="header__user__location">
          <img src="src/assets/img/icons/location.svg" alt="user location" />
          <select>
            <option value="New York">New York City</option>
          </select>
        </figcaption>
      </figure>
      <Buttons src={<img src="src\assets\img\icons\notification.svg" alt="" />} />
    </header>
  );
}
