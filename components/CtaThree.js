import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../assets/img/banner/smarticity.png";
import img2 from "../assets/img/banner/smarticity2.png";

const CtaThree = () => {
  return (
    <section className="pt-120 pb-120">
      <Container>
        <Row>
          <Col lg={5} sm={5}>
            <div className="user-interact-inner">
              <div className="interact-icon">
                <img src={img1} className="svg" alt="" />
              </div>
              <h2> Visual  Data Analytics</h2>
              <p>
   We provide Admin Dashboard with visualization technology for
     City governance 
              </p>
              <a href="#" className="btn">
                Free Trial
              </a>
            </div>
          </Col>
          <Col lg={7} sm={7}>
            <div className="user-interact-image type2">
              <img src={img2} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaThree;
