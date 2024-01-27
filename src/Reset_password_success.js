import { Link } from "react-router-dom";
const Reset_password_success = () => {
  return (
    <div className="reset_pass_success">
      <h1>Password reset successfully</h1>
      <h3>
        you can now <Link to={"/login"}>login</Link> with your new password
      </h3>
    </div>
  );
};

export default Reset_password_success;
