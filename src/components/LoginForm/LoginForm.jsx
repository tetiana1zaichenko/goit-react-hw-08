// использовать ф-цию логин из аут оператион
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log("Login values:", values);
    dispatch(login(values));
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" required />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" required />
          </div>
          <div>
            <Link to="/register">You don't have account? Sign UP!</Link>
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
