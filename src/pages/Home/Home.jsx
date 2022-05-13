import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../style/Home.css";

import banner from "../../img/banner.png";
import ceramic from "../../img/ceramic.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* list product */}
      <Container>
        <div>
          <img className="size-benner" src={banner} alt="welcome-benner" />
        </div>

        <h3 className="product-title">All Products</h3>

        <div className="d-flex justify-content-between align-item-center flex-wrap">
          <Card style={{ width: "18rem" }} className="px-3 mb-3 justify-content-between">
            <Card.Img variant="top" src={ceramic} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Rp. 199.000</Card.Text>
              <Button
                className="w-80 mb-2 size-button"
                variant="success"
                onClick={() => {
                  navigate(`/detailproduct`);
                }}
              >
                Detail Product
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
      {/* list product */}
    </>
  );
}

export default Home;
