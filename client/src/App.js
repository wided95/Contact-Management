import "./App.css";
import Navbar from "./components/Navbar";
import Registre from "./components/Registre";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./screens/Home";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { current } from "./js/userSlice";
import PrivateRoute from "./route/PrivateRoute";
import { getcontacts } from "./js/contactSlice";
function App() {
  const [ping, setping] = useState(false);
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    if (isAuth) {
      dispatch(current());
    }
    dispatch(getcontacts());
  }, [ping]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home ping={ping} setping={setping} />} />
        <Route path="/register" element={<Registre />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
