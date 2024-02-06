import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Show_job from "./Show_job";

const Job_details = () => {
  const [blog_details, setBlog_details] = useState({});

  let { id } = useParams();
  const get_job_details = async () => {
    const res = await axios.get(
      `http://localhost/projects/job-postings-api/jobs.php/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await res.data;
    setBlog_details(data);
  };
  useEffect(() => {
    get_job_details();
  }, []);
  return (
    <div className="job-details">
      {blog_details && <Show_job job_listing={blog_details} />}
    </div>
  );
};

export default Job_details;
