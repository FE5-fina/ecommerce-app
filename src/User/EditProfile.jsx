import React from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import "../style/EditProfile.css";
import { useNavigate } from "react-router-dom";

import user from "../img/user.png";

function EditProfile() {
  const navigate = useNavigate();

  return (
    <>
      <div className="editProfile-content">
        <Container>
          <Row>
            <Col xs={11} md={11}>
              <div className="editProfile-content">
                <div className="d-flex justify-content-center">
                  <img className="user-img" src={user} alt="" />
                </div>
                <Container className="justify-content-center mt-4">
                  <Row className="mt-2">
                    <Col>Nama</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control type="text" placeholder="Nama" />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>User Name</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control
                        type="text"
                        placeholder="Buat user yang unik"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Email</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control type="text" placeholder="Tambahkan email" />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Nomer Hanphone</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control type="text" placeholder="No handphone" />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Jenis Kelamin</Col>
                    <Col className="d-grid gap-2">
                      <Form.Select id="disabledSelect">
                        <option>Pilih Jenis Kelamin</option>
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Tanggal Lahir</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control type="date" />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Alamat</Col>
                    <Col className="d-grid gap-2">
                      <Form.Control type="text" placeholder="Alamat" />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>

            <Col xs={1} md={1}>
              <Button
                className="btn-edit"
                onClick={() => {
                  navigate("/profile");
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

export default EditProfile;
