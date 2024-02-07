import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./update_job.css";
const Update_job = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [client, setClient] = useState("");
  const [title, setTitle] = useState(" ");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (e) => {
    const updated_job = {
      title,
      price,
      description,
      technologies,
      experience,
    };
    e.preventDefault();
    axios
      .put(
        `http://localhost/projects/job-postings-api/jobs.php/${id}`,
        updated_job,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => navigate(`/job_details/${id}`))
      .catch((err) => console.log(err));
  };

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
    setTitle(data.title);
    setPrice(data.price);
    setTechnologies(data.technologies);
    setExperience(data.experience);
    setDescription(data.description);
  };
  useEffect(() => {
    get_job_details();
  }, []);
  return (
    <div className="update-job">
      <h1>update job</h1>

      <div className="form-update-container">
        <form onSubmit={handleSubmit} className="update-form">
          <div className="form-control-add">
            <label htmlFor="title">title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-control-add">
            <label htmlFor="price">price</label>
            <input
              type="text"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-control-add">
            <label htmlFor="technologies">technologies</label>
            <input
              type="text"
              name="technologies"
              id="technologies"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
            />
          </div>

          <div className="form-control-add">
            <label htmlFor="experience">experience</label>
            <input
              type="text"
              name="experience"
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>

          <div className="form-control-add">
            <label htmlFor="description">description</label>
            <textarea
              rows="10"
              cols="50"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button className="btn-update">update</button>
        </form>
      </div>
    </div>
  );
};

export default Update_job;
