import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Freelancer_job_listing from "./Freelancer_job_listing";
import Client_job_listing from "./Client_job_listing";
const Show_job = ({ job_listing }) => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const handleDelete = () => {
    axios
      .delete(
        `http://localhost/projects/job-postings-api/jobs.php/${job_listing.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => navigate("/job_listings"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost/projects/jobb-postings-backend/index.php", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      })
      .then((res) => {
        setUserType(res.data.type);
      });
  }, []);
  return (
    <div className="show-job">
      {userType === "freelancer" ? (
        <Freelancer_job_listing
          job_listing={job_listing}
          handleDelete={handleDelete}
        />
      ) : (
        <Client_job_listing
          job_listing={job_listing}
          handleDelet={handleDelete}
        />
      )}
    </div>
  );
};

export default Show_job;
