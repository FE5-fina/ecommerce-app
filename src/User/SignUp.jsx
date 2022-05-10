import React from "react";
import { Form, Button } from "react-bootstrap";
import "../style/SignUp.css";

import user from "../img/user.png";

function SignUp() {
  return (
    <>
      <div className="border rounded border-dark signUp-content">
        <Form>
          <div className="d-flex justify-content-center">
            <img className="user-img" src={user} alt="" />
          </div>
          <h3 className="text-center text-signUp">SignUp</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User name</Form.Label>
            <Form.Control type="text" placeholder="UserName" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button className="btn" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
