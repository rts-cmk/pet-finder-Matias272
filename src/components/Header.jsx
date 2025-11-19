import Buttons from "./Buttons";

export default function Header({ user }) {
  return (
    <header className="header">
      <figure className="header__user">
        <div className="header__user__img">
          <img src={user.image} alt="" />
        </div>

        <figcaption className="header__user__location">
          <img src="/src/assets/img/icons/location.svg" alt="location symbol" />
          <select>
            <option value="New York">{user.location}</option>
          </select>
          <img
            src="./src/assets/img/icons/alarm.svg"
            alt="select location symbol"
          />
        </figcaption>
      </figure>

      <Buttons
        src={
          <img
            src="/src/assets/img/icons/notification.svg"
            alt="notifications"
          />
        }
      />
    </header>
  );
}
