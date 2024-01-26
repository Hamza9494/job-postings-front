import { useState } from "react";
import "./forgot_password.css";
import axios from "axios";
const Forgot_password = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/projects/job-postings-backend/process_forgot_password.php",
        { email }
      )
      .then((res) => console.log(res.data));
  };
  return (
    <div className="forgot-password">
      <h1>forgot password</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control-forgot">
          <label htmlFor="email">Enter email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Forgot_password;
