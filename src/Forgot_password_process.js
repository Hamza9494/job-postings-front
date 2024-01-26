import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Forgot_password_process = () => {
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_confirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const new_password = {
      id,
      password,
      password_confirm,
    };
    axios
      .post(
        "http://localhost/projects/job-postings-backend/process_reset_password.php",
        new_password
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="process-forgot-password">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
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
        <button>reset</button>
      </form>
    </div>
  );
};

export default Forgot_password_process;