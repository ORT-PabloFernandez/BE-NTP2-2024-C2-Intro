import "./User.css";
import User from "./User";

const UserList = (props) => {
  return (
    <ul className="users-list">
      {props.users.map((usuario) => (
        <User
          Id={usuario["Object Id"]}
          UserName={usuario["Display name"]}
          // Picture={`/img/${usuario["Display name"]}.jpg`}
          Picture={usuario.Picture}
          Title={usuario.Title}
          City={usuario.City}
        />
      ))}
    </ul>
  );
};

export default UserList;
