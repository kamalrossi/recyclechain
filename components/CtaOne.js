import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CtaOne = () => {
  return (
    <section className="border-top pt-110 pb-150">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={10}>
            <div className="download-app-inner text-center">
              <h2 className="h1">
               Are you an urban planner and worried about your waste!
              </h2>
              <h3>
               Lets start working with us
              </h3>
              <a href="#" className="btn">
                SCHEDULE CALL
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaOne;
;
