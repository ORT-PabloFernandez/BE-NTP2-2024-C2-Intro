import { Link } from "react-router-dom";
import "./User.css";
import { useState } from "react";

function User(props) {
  const [contador, setContador] = useState(0);

  const Handler_ClickUser = () => {
    setContador(contador + 1);
    console.log(contador);
  };

  return (
    <li className="user-item" onClick={Handler_ClickUser}>
      <div className="card user-item__content">
        <Link to={`/users/${props.Id}`}>
          <div className="user-item__image avatar">
            <img src={props.Picture} alt={props.UserName} />
          </div>
          <div className="user-item__info">
            <h2>{props.UserName}</h2>
            <h2>{props.Title}</h2>
            <h3>{props.City}</h3>
            <h3>{contador}</h3>
          </div>
        </Link>
      </div>
    </li>
  );
}

export default User;
