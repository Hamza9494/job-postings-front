import { Link } from "react-router-dom";
import "./show_jobs.css";
const Show_jobs = ({ jobs }) => {
  return (
    <div className="show-jobs">
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
    </div>
  );
};

export default Show_jobs;
