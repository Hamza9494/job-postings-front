import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

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
    <div className="home ">
      <h1>Home</h1>
      <div className="home-container">
        <div>{username && <h3> welcome {username} </h3>}</div>

        <div className="home-btn-container">
          <Link to={"/add"}>
            <button className="home-add-btn">add job listing</button>
          </Link>

          <Link to={"/job_listings"}>
            <button className="home-view-btn">view my listings</button>
          </Link>
        </div>
        <div>logout</div>
      </div>
    </div>
  );
};

export default Home;
