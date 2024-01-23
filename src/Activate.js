import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
<<<<<<< HEAD
import "./activate.css";

=======
import "./activate.css"
>>>>>>> e6a7268cfcf20be24d3e36cccf1424020a81992e
const Activate = () => {
  const [activated, setActivated] = useState(false);
  let { id } = useParams();

  if (id) {
    axios
      .post(
        "http://localhost/projects/job-postings-backend/activate-account.php",
        { token: id }
      )
      .then((res) => setActivated(true))
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
