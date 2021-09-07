import "./App.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      list: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .strict()
        .trim()
        .min(4, "Minimum 5 Character Required")
        .max(15, "Maximun 15 Character Required")
        .required("Name is Required"),
      email: yup.string().email().required("Email is Required"),
      list: yup.string().required("List is Required"),
      password: yup.string().required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf(
          [yup.ref("password"), null],
          "Confirm password and password must be same"
        )
        .required("Confirm Password is required"),
    }),
    onSubmit: (userInputData) => {
      //console.log(userInputData);
      toast.success("Saved Succesfully", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000,
      });
    },
  });
  return (
    <div className="container mt-5">
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="form-group">
          <label>Name : </label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.errors.name ? (
            <div className="text-danger">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Email : </label>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>List : </label>
          <select
            type="text"
            name="list"
            value={formik.values.list}
            onChange={formik.handleChange}
            className="form-control"
          >
            <option value="">-- Select One --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {formik.errors.list ? (
            <div className="text-danger">{formik.errors.list}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Password : </label>
          <input
            type="text"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.errors.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label>Confirm Password : </label>
          <input
            type="text"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.errors.confirmPassword ? (
            <div className="text-danger">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <div>
          <button className="form-control btn btn-primary mt-4" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
