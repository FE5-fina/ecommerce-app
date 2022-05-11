import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../../style/Payment.css";

import product1 from "../../img/product-toner.svg";
import product2 from "../../img/product-propolist.svg";
import map from "../../img/Union.svg";

function Payment() {
  return (
    <>
      <div className="border rounded border-dark payment-content">
        <Container className="d-flex justify-content-start">
          <img className="mb-1" src={map} alt="" />
          <h5 className="text-payment px-3">Alamat Pengiriman</h5>
        </Container>
        <Row className="my-4 d-flex justify-content-start">
          <Col xs={3} md={3}>
            <Form.Control className="mb-3" type="text" placeholder="Nama" />
            <Form.Control type="text" placeholder="No Handphone" />
          </Col>
          <Col xs={7} md={5}>
            <Form.Control type="text" placeholder="Alamat" />
          </Col>
          <Col xs={1} md={2}>
            <Form.Control type="text" placeholder="Utama" />
          </Col>
          <Col xs={1} md={1}>
            <Button variant="outline-secondary">Ubah</Button>{" "}
          </Col>
        </Row>
      </div>

      <div className="border rounded border-dark payment-content">
        <Container>
          <Row>
            <Col className="d-flex justify-content-start">
              <h5>Product dipesan</h5>
            </Col>
          </Row>
          <Row className="my-4">
            <Col xs={6} md={6}>
              Somentic Reseller
            </Col>
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
          <Row>
            <Col xs={6} md={6} className="d-flex justify-content-start">
              <Row>
                <Col xs={4} md={4}>
                  <img className="product-img mb-5" src={product1} alt="" />
                </Col>
                <Col xs={6} md={6}>
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
              <Button variant="outline-secondary">1</Button>{" "}
            </Col>
            <Col xs={2} md={2}>
              <p className="text-cardDetail">Rp.89.000</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6} className="d-flex justify-content-start">
              <Row>
                <Col xs={4} md={4}>
                  <img className="product-img mb-5" src={product2} alt="" />
                </Col>
                <Col xs={6} md={6}>
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
              <Button variant="outline-secondary">1</Button>{" "}
            </Col>
            <Col xs={2} md={2}>
              <p className="text-cardDetail">Rp.139.000</p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-start">
            <Col xs={1} md={1}>
              <p>Pesan :</p>
            </Col>
            <Col xs={5} md={5}>
              <Form.Control
                type="text"
                placeholder="(Optional) Tinggalkan pesan ke penjual"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="border rounded border-dark payment-content">
        <Row className="my-4 d-flex justify-content-start">
          <Col xs={6} md={6}></Col>
          <Col xs={2} md={2}>
            <p>Total pesanan</p>
            <p>Biaya penanganan</p>
            <p>Total pembayaran</p>
          </Col>
          <Col xs={2} md={2}>
            <p>(2 Product)</p>
          </Col>
          <Col xs={2} md={2}>
            <p>Rp.228.000</p>
            <p>Rp.1.000</p>
            <h5 className="text-payment">Rp.229.000</h5>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col className="d-flex justify-content-center">
            <Button className="btn-payment d-grid" type="submit">
              Buat Pesanan
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Payment;
