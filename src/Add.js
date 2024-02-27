import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./add.css";
import axios from "axios";

const Add = () => {
  const [client, setClient] = useState("");
  const [title, setTitle] = useState(" ");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost/projects/jobb-postings-backend/index.php", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      })
      .then((res) => {
        setClient(res.data.name);
        console.log(res.data);
      });
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = {
      client,
      title,
      price,
      description,
      technologies,
      experience,
    };

    axios
      .post("http://localhost/projects/job-postings-api/jobs.php", job, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => navigate("/job_listings"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-job-container">
      <h1>Add a job</h1>

      <div className="form-add-container">
        <form onSubmit={handleSubmit} className="add-form">
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

          <button className="btn-add">add blog</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
