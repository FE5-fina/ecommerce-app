import React from "react";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import "../style/Profile.css";

import user from "../img/user.png";
import chair from "../img/chair.svg";

function Profile() {
  return (
    <>
      <div className="profile-content">
        <Container>
          <Row className="justify-content-start">
            <Col xs={2} md={3}>
              <img className="user-img" src={user} alt="" />
            </Col>
            <Col xs={4} md={3}>
              <p>Username</p>
              <p>Email</p>
              <p>Nomer Hanphone</p>
            </Col>
            <Col xs={5} md={5}>
              Alamat
            </Col>
            <Col xs={1} md={1}>
              <Button className="btn-edit" type="submit">
                Edit
              </Button>
            </Col>
          </Row>
        </Container>
        <Card className="mt-5" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={chair} />
          <Card.Body>
            <Card.Title>Dinning Chair</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Profile;
