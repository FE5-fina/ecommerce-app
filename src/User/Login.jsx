import React from "react";
import { Form, Button } from "react-bootstrap";
import "../style/Login.css";

import user from "../img/logo-3.svg";

function Login() {
  return (
    <>
      <div className="border rounded border-dark login-content">
        <Form>
          <div className="d-flex justify-content-center">
            <img className="user-img" src={user} alt="" />
          </div>
          <h3 className="text-center text-login">Login</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button className="btn-login" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
