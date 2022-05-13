import React, { useState } from "react";
import axios from "axios";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import "../../style/Address.css";
import { useNavigate } from "react-router-dom";

function Address() {
  const [recipient, setRecipient] = useState("");
  const [hp, setHp] = useState("");
  const [street, setStreet] = useState("");
  const [urbanVillage, setUrbanVillage] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit() {
    const body = {
      recipient,
      hp,
      street,
      urbanVillage,
      subDistrict,
      city,
      zip,
    };
    setIsLoading(true);

    axios
      .post("http://54.179.30.163:8080/address", body)
      .then(({ data }) => {
        console.log(data);

        navigate("/payment");
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
      <div className="address-content">
        <Container>
          <Row>
            <Col xs={11} md={11}>
              <div className="address-content">
                <Container className="justify-content-center mt-4">
                  <Row className="mt-2">
                    <Col>Nama</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control
                        type="text"
                        placeholder="Nama"
                        value={recipient}
                        onChange={(e) => {
                          setRecipient(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>No Hanphone</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control
                        type="text"
                        placeholder="No Hanphone"
                        value={hp}
                        onChange={(e) => {
                          setHp(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Jalan</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control
                        type="text"
                        placeholder=" Jalan"
                        value={street}
                        onChange={(e) => {
                          setStreet(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Kelurahan</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control
                        type="text"
                        placeholder="Kelurahan"
                        value={urbanVillage}
                        onChange={(e) => {
                          setUrbanVillage(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Kecamatan</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control
                        type="text"
                        placeholder="Kecamatan"
                        value={subDistrict}
                        onChange={(e) => {
                          setSubDistrict(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Kota</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control
                        type="text"
                        placeholder="Kota"
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col>Kode Pos</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control
                        type="text"
                        placeholder="Kode Pos"
                        value={zip}
                        onChange={(e) => {
                          setZip(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>

            <Col xs={1} md={1}>
              <Button className="btn-save" onClick={() => handleSubmit()}>
                {isLoading ? " Save..." : " Save"}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Address;
