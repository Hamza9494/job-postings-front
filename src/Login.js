import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (submit) {
      const login_data = { email, password };
      axios
        .post(
          "http://localhost/projects/job-postings-backend/process_login.php",
          login_data
        )
        .then((res) => localStorage.setItem("token", res.data.token))
        .catch((err) => console.log(`the error is ${err}`));
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control-login">
          <label htmlFor="email">email </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-control-login">
          <label htmlFor="password">password </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn-login">Login</button>
      </form>
    </div>
  );
};

export default Login;
