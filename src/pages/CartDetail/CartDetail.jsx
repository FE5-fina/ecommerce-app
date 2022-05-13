import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "../../style/CardDetail.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import product1 from "../../img/product-toner.svg";

function CardDetail() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [quantity, setQuantity] = useState("2");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://54.179.30.163:8080/product"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

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
              <p className="mx-2">
                {data.map((e) => (
                  <span>{e.nameSeller}</span>
                ))}
              </p>
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
                  <h6>
                    {data.map((e) => (
                      <span>{e.name}</span>
                    ))}
                  </h6>
                  {data.map((e) => (
                    <span>{e.description}</span>
                  ))}
                </Col>
                <Col xs={2} md={2}></Col>
              </Row>
            </Col>
            <Col xs={2} md={2}>
              {data.map((e) => (
                <span>Rp. {e.price}</span>
              ))}
            </Col>
            <Col xs={2} md={2}>
              <Button variant="outline-secondary">-</Button>{" "}
              <Button variant="outline-secondary">{quantity}</Button>{" "}
              <Button variant="outline-secondary">+</Button>{" "}
            </Col>
            <Col xs={2} md={2}>
              <p className="text-cardDetail">
                {data.map((e) => (
                  <span>Rp. {e.price * quantity}</span>
                ))}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="border rounded border-dark cardDetail-content">
        <Container>
          <Row>
            <Col className="d-flex justify-content-start">
              <Form.Check aria-label="option 1" />
              <p className="mx-2">Pilih semua ({quantity}) </p>
              <p className="mx-2">Hapus</p>
            </Col>
            <Col xs={2} md={2}>
              <h6>Total ({quantity} Produk) </h6>
            </Col>
            <Col xs={2} md={2}>
              <h6 className="text-cardDetail">
                {data.map((e) => (
                  <span>Rp. {e.price * quantity}</span>
                ))}
              </h6>
            </Col>
            <Col xs={2} md={2}>
              <Button
                className="btn-cardDetail"
                onClick={() => navigate("/payment")}
              >
                {loading ? " Order..." : " Order"}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CartDetail;
