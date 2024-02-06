import "./show_job.css";
const Show_job = ({ job_listing }) => {
  return (
    <div className="show-job">
      <h1>Job Details</h1>
      <div className="job-info">
        <h3> client: {job_listing.client}</h3>
        <p> tech: {job_listing.technologies} </p>
        <p> job description: {job_listing.description} </p>
        <p> experience: {job_listing.experience} </p>
        <p> price: {job_listing.price} </p>
        <button>apply</button>
      </div>
    </div>
  );
};

export default Show_job;
