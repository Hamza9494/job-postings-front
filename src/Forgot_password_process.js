import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./forget_password_process.css";

const Forgot_password_process = () => {
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_confirm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const new_password = {
      id,
      password,
      password_confirm,
    };
    axios
      .post(
        "http://localhost/projects/jobb-postings-backend/process_reset_password.php",
        new_password
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.done) {
          navigate("/reset_password_success");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="process-forgot-password">
      <h1>Reset Password</h1>
      <form
        onSubmit={handleSubmit}
        className="forget-process-form"
        style={{
          width: "500px",
          margin: "1rem auto",
          padding: "1rem 2rem",
        }}
      >
        <div className="reset-form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="reset-form-control">
          <label htmlFor="password_reset">Confirm password</label>
          <input
            id="password_reset"
            name="password_reset"
            type="password"
            value={password_confirm}
            onChange={(e) => setPassword_confirm(e.target.value)}
          />
        </div>
        <button className="forget-process-btn">reset</button>
      </form>
    </div>
  );
};

export default Forgot_password_process;
