import "./App.css";
import User from "./User/User";

function App() {
  return (
    <div className="App">
      <h3>Listado de usuarios</h3>
      <User Nombre="Adele Vance" />
      <User Nombre="Juan Perez" />
      <User Nombre="Annita" />
    </div>
  );
}

export default App;
