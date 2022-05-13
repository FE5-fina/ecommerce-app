import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "../../style/CartDetail.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import product1 from "../../img/product-toner.svg";

function CartDetail() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log(localStorage.getItem("token"));
      try {
        const { data: response } = await axios.get(
          "http://54.179.30.163:8080/cart",

          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const totalPrice = () => {
    if (!data) return 0;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i].subTotal;
    }
    return total;
  };

  const totalProduct = () => {
    if (!data) return 0;
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].product.length; j++) {
        if (data[i].product[j].toBuy === "yes") total++;
      }
    }
    return total;
  };

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
          {data &&
            data.map((seller) => (
              <div>
                <Row>
                  <Col className="d-flex justify-content-start">
                    <Form.Check aria-label="option 1" />
                    <p className="mx-2">
                      <span>{seller.nameSeller}</span>
                    </p>
                  </Col>
                </Row>
                {seller.product.map((product) => (
                  <Row>
                    <Col xs={6} md={6} className="d-flex justify-content-start">
                      <Row>
                        <Col xs={1} md={1}>
                          <Form.Check className="mt-4" aria-label="option 1" />
                        </Col>
                        <Col xs={4} md={4}>
                          <img
                            className="product-img mb-5"
                            src={product1}
                            alt=""
                          />
                        </Col>
                        <Col xs={5} md={5}>
                          <h6>
                            <span>{product.nameProduct}</span>
                          </h6>
                        </Col>
                        <Col xs={2} md={2}></Col>
                      </Row>
                    </Col>
                    <Col xs={2} md={2}>
                      <span>Rp. {product.price}</span>
                    </Col>
                    <Col xs={2} md={2}>
                      <Button variant="outline-secondary">-</Button>{" "}
                      <Button variant="outline-secondary">{product.qty}</Button>{" "}
                      <Button variant="outline-secondary">+</Button>{" "}
                    </Col>
                    <Col xs={2} md={2}>
                      <p className="text-cardDetail">
                        <span>Rp. {product.price * product.qty}</span>
                      </p>
                    </Col>
                  </Row>
                ))}
              </div>
            ))}
        </Container>
      </div>
      <div className="border rounded border-dark cardDetail-content">
        <Container>
          <Row>
            <Col className="d-flex justify-content-start">
              <Form.Check aria-label="option 1" />
              <p className="mx-2">Pilih semua ({totalProduct()}) </p>
              <p className="mx-2">Hapus</p>
            </Col>
            <Col xs={2} md={2}>
              <h6>Total ({totalProduct()} Produk) </h6>
            </Col>
            <Col xs={2} md={2}>
              <h6 className="text-cardDetail">
                <span>Rp. {totalPrice()}</span>
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
