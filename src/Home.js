import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost/projects/job-postings-backend/index.php", {
        token,
      })
      .then((res) => {
        console.log(res.data);
        setUsername(res.data[0].name);
      })
      .catch((err) => console.log(`error is ${err}`));
  }, []);
  return (
    <div className="home-container">
      <h1>Home</h1>
      {username && <p> hello {username} </p>}
    </div>
  );
};

export default Home;
