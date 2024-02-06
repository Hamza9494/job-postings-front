import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";
import Activate from "./Activate";
import Login from "./Login";
import Home from "./Home";
import Forgot_password from "./Forgot_password";
import Signup_success from "./Signup_success";
import Forgot_password_process from "./Forgot_password_process";
import Email_sent from "./Email_sent";
import Reset_password_success from "./Reset_password_success";
import Add from "./Add";
import Job_listings from "./Job_listings";
import Job_details from "./Job_details";

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
            <Route
              path="/forgot_password_process/:id"
              element={<Forgot_password_process />}
            ></Route>
            <Route path="/signup_success" element={<Signup_success />}></Route>
            <Route path="/email_sent" element={<Email_sent />}></Route>
            <Route
              path="/reset_password_success"
              element={<Reset_password_success />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/job_listings" element={<Job_listings />}></Route>
            <Route path="/activate/:id" element={<Activate />}></Route>
            <Route path="/job_details/:id" element={<Job_details />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
