import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./job_listings.css";

const Job_listings = () => {
  const [jobs, setJobs] = useState([]);
  const get_data = async () => {
    const res = await axios.get(
      "http://localhost/projects/job-postings-api/jobs.php",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.data;
    setJobs(data[0]);
  };
  useEffect(() => {
    get_data();
  }, []);

  return (
    <div className="job-listings">
      <h1>Job listings</h1>
      <div className="job-listings-container">
        {jobs.map((job) => (
          <Link key={job.id} to={`/job_details/${job.id}`}>
            <div className="single-job-listing">
              <h3>{job.technologies}</h3>
              <p>${job.price}</p>
              <p> {job.experience} </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Job_listings;
