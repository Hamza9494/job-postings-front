import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./activate.css";

import "./activate.css";
const Activate = () => {
  const [activated, setActivated] = useState(false);
  let { id } = useParams();

  if (id) {
    axios
      .post(
        "http://localhost/projects/jobb-postings-backend/activate-account.php",
        [id]
      )
      .then((res) => {
        console.log(res.data);
        setActivated(true);
      })
      .catch((err) => console.log(`error is ${err}`));
  }

  return (
    <div className="activate">
      <h1>activate account</h1>
      {activated && <h2>account activated succesfully!</h2>}
      {activated && (
        <p>
          you can now <Link to={"/login"}>login</Link>
        </p>
      )}
    </div>
  );
};

export default Activate;
