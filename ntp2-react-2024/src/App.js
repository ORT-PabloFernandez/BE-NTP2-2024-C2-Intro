import "./App.css";
import UserList from "./User/UserList";
import users from "./mocUsers.js";

function App() {
  return (
    <div className="App">
      <h3>Listado de usuarios</h3>
      <UserList users={users} />
    </div>
  );
}

export default App;
