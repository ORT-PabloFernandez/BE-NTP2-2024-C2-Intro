import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserPage from "./User/UserPage";
import UserDetails from "./User/UserDetails";

function App() {
  return (
    // <div className="App">
    //   <h3>Listado de usuarios</h3>
    //   <UserPage />
    // </div>

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
