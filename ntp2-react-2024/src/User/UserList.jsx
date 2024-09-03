import "./User.css";
import User from "./User";

const UserList = (props) => {
  return (
    <ul className="users-list">
      {props.users.map((usuario) => (
        <User
          UserName={usuario["Display name"]}
          Picture={`/img/${usuario["Display name"]}.jpg`}
          Title={usuario.Title}
          City={usuario.City}
        />
      ))}
    </ul>
  );
};

export default UserList;
