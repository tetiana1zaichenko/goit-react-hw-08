import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log("Registration values:", values);
    dispatch(register(values));
  };

  return (
    <div>
      <h2>Register</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Name:</label>
            <Field type="text" name="name" required />
          </div>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" required />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" required />
          </div>
          <div>
            <Link to="/login">You already have account? Sign IN!</Link>
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
