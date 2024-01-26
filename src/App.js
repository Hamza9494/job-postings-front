import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";
import Activate from "./Activate";
import Login from "./Login";
import Home from "./Home";
import Forgot_password from "./Forgot_password";
import Signup_success from "./Signup_success";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-container">
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route
              path="/forgot_password"
              element={<Forgot_password />}
            ></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/signup_success" element={<Signup_success />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/activate/:id" element={<Activate />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
