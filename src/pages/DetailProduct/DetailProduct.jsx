import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../style/DetailProduct.css";

import ceramic from "../../img/ceramic.jpg";

function DetailProduct() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-item-center">
          <Col sm={6} className="my-3">
            <img classNAme="position-photo" src={ceramic} alt="photo product" />
          </Col>

          <Col sm={6} className="my-3">
            <Col.Title className="title-product">Ceramic Skin Saviour Moisturizer Gel</Col.Title>
            <Col.Text className="detail-product">
              A lightweight moisturizing gel-cream with 10 skin-loving complete ingredients that have been tested to lock in moisture for up to 24 hours! Equipped with anti-aging and skin barrier repair ingredients such as Hydrolyzed Marine
              Collagen, Palmitoyl Tripeptide, and Ceramide
            </Col.Text>
            <Col.Text className="stock-product">stock : 88</Col.Text>
            <Col.Text className="price-product">Rp. 199.000</Col.Text>
          </Col>
        </Row>
        <Button
          className="btn my-3"
          onClick={() => {
            navigate(`/cart`);
          }}
        >
          add to cart
        </Button>
      </Container>
    </>
  );
}

export default DetailProduct;
