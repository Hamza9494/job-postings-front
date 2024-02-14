import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Show_jobs from "./Show_jobs";

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

  return <> {jobs && <Show_jobs jobs={jobs} />}</>;
};

export default Job_listings;
