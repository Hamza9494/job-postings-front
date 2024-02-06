import axios from "axios";
import { useEffect, useState } from "react";

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
      <div className="job-listings">
        {jobs.map((job) => (
          <div className="job" key={job.id}>
            {job.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job_listings;