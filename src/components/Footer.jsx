import React from "react";
import { Row, Col } from "react-bootstrap";
import "../style/Footer.css";

import fb from "../img/fb.svg";
import twitter from "../img/twitter.svg";
import ig from "../img/ig.svg";
import tiktok from "../img/tiktok.svg";
import linkedin from "../img/linkedin.svg";
import youtube from "../img/youtube.svg";

function Footer() {
  return (
    <>
      <div className="text-center pt-3 pb-3 content-footer text-align-left">
        <Row>
          <Col>VIOLET</Col>
          <Col>Pelayanan</Col>
          <Col>Follow Kami</Col>
        </Row>
        <Row>
          <Col>Tentang VIOLET</Col>
          <Col>Bantuan</Col>
          <Col>
            <img className="sosmed" src={fb} alt="" />
            <img className="sosmed" src={twitter} alt="" />
            <img className="sosmed" src={ig} alt="" />
            <img className="sosmed" src={tiktok} alt="" />
            <img className="sosmed" src={linkedin} alt="" />
            <img className="sosmed" src={youtube} alt="" />
          </Col>
        </Row>
        <Row>
          <Col>VIOLET Care</Col>
          <Col>Hubungi Kami</Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>Blog</Col>
          <Col>Kebijakan Privasi</Col>
          <Col></Col>
        </Row>
      </div>
    </>
  );
}
export default Footer;
