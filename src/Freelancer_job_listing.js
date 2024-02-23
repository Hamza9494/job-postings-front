import "./show_job.css";
import { Link } from "react-router-dom";

const Freelancer_job_listing = ({ job_listing, handleClick }) => {
  console.log(job_listing);
  return (
    <div className="freelancer-job-listing">
      <h1>Freelancer job details</h1>
      <div className="job-info">
        <h3> title: {job_listing.title}</h3>
        <p> tech: {job_listing.technologies} </p>
        <p> job description: {job_listing.description} </p>
        <p> experience: {job_listing.experience} </p>
        <p> price: ${job_listing.price} </p>

        <Link className="update" to={"/offer"}>
          Send Offer
        </Link>
      </div>
    </div>
  );
};

export default Freelancer_job_listing;
