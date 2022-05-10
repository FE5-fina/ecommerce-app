import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../style/EditProfile.css";

import user from "../img/user.png";

function EditProfile() {
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
                      <Button variant="outline-secondary">Nama</Button>{" "}
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>User Name</Col>
                    <Col className="d-grid gap-2">
                      <Button variant="outline-secondary">
                        Buat User Name Yang Unik
                      </Button>{" "}
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Email</Col>
                    <Col className="d-grid gap-2">
                      <Button variant="outline-secondary">
                        Tambahkan Email
                      </Button>{" "}
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Nomer Hanphone</Col>
                    <Col className="d-grid gap-2">
                      <Button variant="outline-secondary">
                        Nomer Handphone
                      </Button>{" "}
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Jenis Kelamin</Col>
                    <Col className="d-grid gap-2">
                      <Button variant="outline-secondary">
                        Pilih Jenis Kelamin
                      </Button>{" "}
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Tanggal Lahir</Col>
                    <Col className="d-grid gap-2">
                      <Button variant="outline-secondary">
                        Pilih Tanggal Lahir
                      </Button>{" "}
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>Alamat</Col>
                    <Col className="d-grid gap-2">
                      <Button variant="outline-secondary">Alamat</Button>{" "}
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>

            <Col xs={1} md={1}>
              <Button className="btn-edit" type="submit">
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
