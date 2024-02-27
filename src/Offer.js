import axios from "axios";
import { useState, useEffect } from "react";
import "./offer.css";

const Offer = () => {
  const [inputFields, steInputFields] = useState({
    title: "",
    description: "",
    price: "",
  });

  const [freelancerName, setFreelanceName] = useState("");
  const [user_id, set_user_id] = useState("");

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost/projects/jobb-postings-backend/index.php", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      })
      .then((res) => {
        setFreelanceName(res.data.name);
        set_user_id(res.data.id);
      })
      .catch((err) => console.log(`error is ${err}`));
  }, []);

  const handleChange = (e) => {
    steInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (submit) {
      const offer = {
        title: inputFields.title,
        description: inputFields.description,
        price: `$${inputFields.price}`,
        freelancerName,
        user_id,
      };
      axios
        .post(
          "http://localhost/projects/jobb-postings-backend/process_offer.php",
          offer
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="offer">
      <h1>add offer</h1>

      <form className="offer-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">title </label>
          <input
            type="text"
            id="title"
            name="title"
            value={inputFields.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="price">price </label>
          <input
            type="text"
            id="price"
            name="price"
            value={inputFields.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label htmlFor="description">description </label>
          <input
            id="description"
            name="description"
            value={inputFields.description}
            onChange={handleChange}
          />
        </div>
        <button className="btn">submit offer</button>
      </form>
    </div>
  );
};

export default Offer;
