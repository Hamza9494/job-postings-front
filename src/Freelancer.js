import axios from "axios";
import { useEffect, useState } from "react";
import Show_jobs from "./Show_jobs";

const Freelancer = ({ user }) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/projects/job-postings-api/jobs.php", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setJobs(res.data[0]))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="freelancer">
      <h1>freelancer page</h1>
      <h2> welcome {user.name} </h2>
      <h2> {user.type} </h2>
      {jobs && <Show_jobs jobs={jobs} />}
    </div>
  );
};

export default Freelancer;
