import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "../../style/CardDetail.css";

import product1 from "../../img/product-toner.svg";
import product2 from "../../img/product-propolist.svg";

function CardDetail() {
  return (
    <>
      <div className="border rounded border-dark cardDetail-content">
        <Container>
          <Row>
            <Col xs={6} md={6}></Col>
            <Col xs={2} md={2}>
              <h6>Harga Satuan</h6>
            </Col>
            <Col xs={2} md={2}>
              <h6>Kuantitas</h6>
            </Col>
            <Col xs={2} md={2}>
              <h6>Total Harga</h6>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="border rounded border-dark cardDetail-content">
        <Container>
          <Row>
            <Col className="d-flex justify-content-start">
              <Form.Check aria-label="option 1" />
              <p className="mx-2">Somentic Reseller</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6} className="d-flex justify-content-start">
              <Row>
                <Col xs={1} md={1}>
                  <Form.Check className="mt-4" aria-label="option 1" />
                </Col>
                <Col xs={4} md={4}>
                  <img className="product-img mb-5" src={product1} alt="" />
                </Col>
                <Col xs={5} md={5}>
                  <p>
                    Somethinc SUPPLE POWER Hyaluronic 9+ Onsen Essence Toner -
                    ANNIVERSARY EDITION
                  </p>
                </Col>
                <Col xs={2} md={2}>
                  <p>Variasi :</p>
                </Col>
              </Row>
            </Col>
            <Col xs={2} md={2}>
              <p>Rp.89.000</p>
            </Col>
            <Col xs={2} md={2}>
              <Button variant="outline-secondary">-</Button>{" "}
              <Button variant="outline-secondary">1</Button>{" "}
              <Button variant="outline-secondary">+</Button>{" "}
            </Col>
            <Col xs={2} md={2}>
              <p className="text-cardDetail">Rp.89.000</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6} className="d-flex justify-content-start">
              <Row>
                <Col xs={1} md={1}>
                  <Form.Check className="mt-4" aria-label="option 1" />
                </Col>
                <Col xs={4} md={4}>
                  <img className="product-img mb-5" src={product2} alt="" />
                </Col>
                <Col xs={5} md={5}>
                  <p>SKIN GOALS Vita Propolis Glow Essence Toner</p>
                </Col>
                <Col xs={2} md={2}>
                  <p>Variasi :</p>
                </Col>
              </Row>
            </Col>
            <Col xs={2} md={2}>
              <p>Rp.139.000</p>
            </Col>
            <Col xs={2} md={2}>
              <Button variant="outline-secondary">-</Button>{" "}
              <Button variant="outline-secondary">1</Button>{" "}
              <Button variant="outline-secondary">+</Button>{" "}
            </Col>
            <Col xs={2} md={2}>
              <p className="text-cardDetail">Rp.139.000</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="border rounded border-dark cardDetail-content">
        <Container>
          <Row>
            <Col className="d-flex justify-content-start">
              <Form.Check aria-label="option 1" />
              <p className="mx-2">Pilih semua (2) </p>
              <p className="mx-2">Hapus</p>
            </Col>
            <Col xs={2} md={2}>
              <h6>Total (2 Produk) </h6>
            </Col>
            <Col xs={2} md={2}>
              <h6 className="text-cardDetail">Rp.228.000</h6>
            </Col>
            <Col xs={2} md={2}>
              <Button className="btn-cardDetail" type="submit">
                Order
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CardDetail;
