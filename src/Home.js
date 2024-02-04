import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost/projects/jobb-postings-backend/index.php", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((res) => {
        console.log(res.data);
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
