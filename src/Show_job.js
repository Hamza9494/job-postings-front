import { Link } from "react-router-dom";
import "./show_job.css";
const Show_job = ({ job_listing }) => {
  return (
    <div className="show-job">
      <h1>Job Details</h1>
      <div className="job-info">
        <h3> title: {job_listing.title}</h3>
        <p> tech: {job_listing.technologies} </p>
        <p> job description: {job_listing.description} </p>
        <p> experience: {job_listing.experience} </p>
        <p> price: ${job_listing.price} </p>
        <Link className="update" to={`/update_job/${job_listing.id}`}>
          update
        </Link>
        <Link className="delete">delete</Link>
      </div>
    </div>
  );
};

export default Show_job;
