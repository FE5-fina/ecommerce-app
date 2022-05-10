import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function Signin() {
  return (
    <>
      <Form>
        <Container>
          <div></div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control type="texy" placeholder="username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Button className="w-100" variant="primary">
            Sign in
          </Button>
        </Container>
      </Form>
    </>
  );
}

export default Signin;
