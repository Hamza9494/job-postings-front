import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forgot_password.css";
import axios from "axios";
const Forgot_password = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/projects/jobb-postings-backend/send_reset_mail.php",
        { email }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/email_sent");
      });
  };
  return (
    <div className="forgot-password">
      <h1>forgot password</h1>
      <form onSubmit={handleSubmit} className="forgot-form">
        <div className="form-control-forgot">
          <label htmlFor="email">Enter email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn-forgot">submit</button>
      </form>
    </div>
  );
};

export default Forgot_password;
