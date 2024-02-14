import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Client from "./Client";
import Freelancer from "./Freelancer";

const Home = () => {
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost/projects/jobb-postings-backend/index.php", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((res) => {
        setUserType(res.data.type);
        setUsername(res.data.name);
        setUser(res.data);
      })
      .catch((err) => console.log(`error is ${err}`));
  }, []);
  return (
    <div className="home ">
      <>
        {userType === "client" ? (
          <Client user={user} />
        ) : (
          <Freelancer user={user} />
        )}
      </>
    </div>
  );
};

export default Home;
