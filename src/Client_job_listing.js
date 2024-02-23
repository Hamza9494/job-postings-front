import "./show_job.css";
import { Link } from "react-router-dom";

const Client_job_listing = ({ job_listing, handleDelete }) => {
  return (
    <div className="client-job-listing">
      <h1>client job listing</h1>
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
        <Link className="delete" onClick={handleDelete}>
          delete
        </Link>
      </div>
    </div>
  );
};

export default Client_job_listing;
