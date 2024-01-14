import axios from "axios";
import { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [inputFields, steInputFields] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    steInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const validateFields = (fields) => {
    let errors = {};
    if (fields.name.length < 8) {
      errors.name = "name field cannot be less than 8 characters";
    }

    const emailReg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailReg.test(fields.email)) {
      errors.email = "Invalid email";
    }

    if (fields.password.length < 12) {
      errors.password = "password cannot be less than 12 characters";
    }
    if (fields.password_confirm !== fields.password) {
      errors.password_confirm = "password do not match ";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    setSubmit(true);
    e.preventDefault();

    const signup_data = {
      name: inputFields.name,
      email: inputFields.email,
      password: inputFields.password,
      password_confirm: inputFields.password_confirm,
    };

    setErrors(validateFields(signup_data));

    if (submit && Object.keys(errors).length === 0)
      axios
        .post(
          "http://localhost/projects/job-posting-backend/process_signup.php",
          signup_data
        )
        .then((data) => console.log(data));
  };
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="error-info">
          {errors.name && <p> {errors.name} </p>}
        </div>

        <div className="form-control">
          <label htmlFor="name">name </label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputFields.name}
            onChange={handleChange}
          />
        </div>
        <div className="error-info">
          {errors.email && <p> {errors.email} </p>}
        </div>
        <div className="form-control">
          <label htmlFor="email">email </label>
          <input
            type="text"
            id="email"
            name="email"
            value={inputFields.email}
            onChange={handleChange}
          />
        </div>
        <div className="error-info">
          {errors.password && <p> {errors.password} </p>}
        </div>
        <div className="form-control">
          <label htmlFor="password">password </label>
          <input
            type="password"
            id="password"
            name="password"
            value={inputFields.password}
            onChange={handleChange}
          />
        </div>
        <div className="error-info">
          {errors.password_confirm && <p> {errors.password_confirm} </p>}
        </div>
        <div className="form-control">
          <label htmlFor="password_confirm">confirm password </label>
          <input
            type="password"
            id="password_confirm"
            name="password_confirm"
            value={inputFields.password_confirm}
            onChange={handleChange}
          />
        </div>
        <button>Signup </button>
      </form>
    </div>
  );
};

export default Signup;
