import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost/projects/jobb-postings-backend/index.php", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((res) => {
        setUsername(res.data.name);
      })
      .catch((err) => console.log(`error is ${err}`));
  }, []);
  return (
    <div className="home-container">
      <h1>Home</h1>
      {username && <p> welcome {username} </p>}
      <button>
        <Link to={"/add"}>Add job listing</Link>
      </button>
      <button>
        <Link to={"/job_listings"}>view my listings</Link>
      </button>
    </div>
  );
};

export default Home;
