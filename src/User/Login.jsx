import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";

import user from "../img/logo-3.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit() {
    const body = {
      email,
      password,
    };

    setIsLoading(true);

    axios
      .post("http://54.179.30.163:8080/login", body)
      .then(({ data }) => {
        localStorage.setItem("token", data.data.Token);

        navigate("/");
      })
      .catch((err) => {
        alert(err?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

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
            <Form.Control
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
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

          <Button className="btn-login" onClick={() => handleSubmit()}>
            {isLoading ? " Login..." : " Login"}
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
