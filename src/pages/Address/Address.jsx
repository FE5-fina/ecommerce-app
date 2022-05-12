import React from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import "../../style/Address.css";
import { useNavigate } from "react-router-dom";

function Address() {
  const navigate = useNavigate();

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
                      <Form.Control type="text" placeholder="Nama" />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>No Hanphone</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control type="text" placeholder="No Hanphone" />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Jalan</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control type="text" placeholder=" Jalan" />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Kelurahan</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control type="text" placeholder="Kelurahan" />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Kecamatan</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control type="text" placeholder="Kecamatan" />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Kota</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control type="text" placeholder="Kota" />
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col>Kode Pos</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control type="text" placeholder="Kode Pos" />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>

            <Col xs={1} md={1}>
              <Button
                className="btn-save"
                onClick={() => {
                  navigate("/payment");
                }}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Address;
