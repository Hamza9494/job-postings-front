import Home from "./Home";
import Login_form from "./Login_form";

const Login = () => {
  const token = localStorage.getItem("token");
  return <div className="login">{token ? <Home /> : <Login_form />}</div>;
};

export default Login;
