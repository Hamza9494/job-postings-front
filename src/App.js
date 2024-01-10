import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [inputFields, steInputFields] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    steInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const signup_data = {
      name: inputFields.name,
      email: inputFields.email,
      password: inputFields.password,
      password_confirm: inputFields.password_confirm,
    };
    axios
      .post(
        "http://localhost/projects/job-postings-backend/process_signup.php",
        signup_data
      )
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <h2>Signup</h2>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={inputFields.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={inputFields.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="password">password: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={inputFields.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="password_confirm">confirm password: </label>
            <input
              type="password_confirm"
              id="password_confirm"
              name="password_confirm"
              value={inputFields.password_confirm}
              onChange={handleChange}
            />
          </div>
          <button>Signup</button>
        </form>
      </div>
    </div>
  );
}

export default App;
