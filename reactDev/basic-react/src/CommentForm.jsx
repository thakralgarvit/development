import { useState } from "react";
import { useFormik } from "formik"; // very commonly used validator

export default function CommentForm({ addNewComment }) {
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    return errors;
  };

  //   let [formData, setFormData] = useState({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //   let handleInputChanges = (event) => {
  //     setFormData((currData) => {
  //       return { ...currData, [event.target.name]: event.target.value };
  //     });
  //   };

  //   let handleSubmit = (event) => {
  //     console.log(formData);
  //     addNewComment(formData);
  //     event.preventDefault();
  //     setFormData({
  //       username: "",
  //       remarks: "",
  //       rating: 5,
  //     });
  //   };

  return (
    <div>
      <h2>Leave a Comment</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          type="text"
          placeholder="username"
          value={formik.values.username}
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <p>{formik.errors.username}</p>
        ) : null}
        <br />
        <label htmlFor="remark">Remark:</label>
        <textarea
          name="remarks"
          id="remarks"
          value={formik.values.remarks}
          placeholder="Remarks"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
        <br />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          onChange={formik.handleChange}
          name="rating"
          type="number"
          min={1}
          max={5}
          placeholder="rating"
          value={formik.values.rating}
          onBlur={formik.handleBlur}
        />
        <br />
        <button type="submit">submit</button>
      </form>
      <hr />
    </div>
  );
}
