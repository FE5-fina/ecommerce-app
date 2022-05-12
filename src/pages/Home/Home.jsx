import React from "react";
import { Card, Button, Container } from "react-bootstrap";

import banner from "./img/banner.png";

function Home() {
  return (
    <div>
      {/* list product */}
      <Container>
        <div>
          <img src={banner} alt="welcome-benner" />
        </div>
        <Card style={{ width: "18rem" }} className="px-3 justify-content-around">
          <Card.Img />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            <Button variant="primary">Detail Product</Button>
          </Card.Body>
        </Card>
      </Container>
      {/* list product */}
    </div>
  );
}

export default Home;
