import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../style/Signup.css";

import logo from "../img/logo.png";
import Login from "./Login";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const signUpSubmit = () => {
    const body = {
      name,
      email,
      phone,
      password,
    };
    console.log(body);

    setIsLoading(true);

    axios
      .post("http://54.179.30.163:8080/user", body)
      .then(({ data }) => {
        console.log(data);
        navigate(`/login`);
      })
      .catch((err) => {
        alert(err?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <div className="border rounded border-dark signUp-content">
        <Form>
          <div className="d-flex justify-content-center">
            <img className="user-img" src={logo} alt="" />
          </div>
          <h3 className="text-center text-signUp">SignUp</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User name</Form.Label>
            <Form.Control
              type="text"
              placeholder="UserName"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button className="btn-signUp" onClick={() => signUpSubmit()}>
            {isLoading ? "Submitting.." : "Submit"}
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Signup;
