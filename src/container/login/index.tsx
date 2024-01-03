import React from "react";
import { Button, Col, Container, Form, FormControl, Image, Row } from "react-bootstrap";
import "../../assets/stylesheets/pages/login.scss";
import chatBot from "../../assets/images/chatbot.png";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../reducers/auth";
import { regexExpressions } from "../../utils";



const Login = () => {

  const dispatch = useDispatch();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: (values, { setSubmitting }) => {
      dispatch(
        loginRequest(
          {
            ...(regexExpressions.username.test(values.username) ? { username: values?.username } : {}),
            password: values?.password,
          }
        )
      );
      setSubmitting(false);
    }
  });
  return (
    <Container fluid className="login__container">
      <Row>
        <Col xs={12} lg={8} className="bg__hldr p-0">
          <section className="login-bg"></section>
        </Col>
        <Col xs={12} xl={4} className="p-0">
          <section className="login-card">
            <Image src={chatBot} alt="brand" className="login_brand" />

            <section className="login_form--section">
              <aside className="greeting_hldr">
                <h3 className="login_greeting fw-bold">Welcome back!</h3>
                <h6>Please enter your details</h6>
              </aside>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <FormControl
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleChange}
                    value={values.username.toLowerCase()}
                    isInvalid={!!(errors.username !== undefined && touched.username !== undefined)}
                  />
                  <FormControl.Feedback type="invalid">
                    {errors.username !== undefined && touched.username !== undefined ? errors.username : null}
                  </FormControl.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <FormControl
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password.toLowerCase()}
                    isInvalid={!!(errors.password !== undefined && touched.password !== undefined)}
                  />
                  <FormControl.Feedback type="invalid">
                    {errors.password !== undefined && touched.password !== undefined ? errors.password : null}
                  </FormControl.Feedback>
                </Form.Group>
                <div className="d-flex align-items-center justify-content-between">
                  <Form.Check type="checkbox" label="Remember me!" />
                  <Button variant="link" className="text-secondary">Forgot Password?</Button>
                </div>
                <div className="d-flex flex-column align-items-center gap-3 pt-3 footer-btn">
                  <Button variant="dark" className="login-btn w-100"
                    disabled={isSubmitting ||
                      Object.values(values).filter(it => it === "").length !== 0 ||
                      Object.values(errors).filter(it => it !== "").length !== 0}
                    type="submit"
                  >Login</Button>
                  <Button variant="light" className="w-100">Login with google</Button>
                </div>
              </Form>
            </section>
            <Button variant="link" className="text-secondary">Dont have an account? Sign Up</Button>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;