import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Autoplay]);

import SectionTitle from "./SectionTitle";
import FeatureCard from "./FeatureCard";

import img1 from "../assets/img/icons/project-management.svg";
import img2 from "../assets/img/icons/solution.svg";
import img3 from "../assets/img/icons/planning.svg";
import img4 from "../assets/img/icons/goal.svg";

const FEATURES_DATA = [
  {
    title: "SmartCity Analytics",
    text:
      "Admin dashboard with daa visualization for analytics purposes",
    image: img1
  },
  {
    title: "Deccentralized Waste Management",
    text:
      "Ethereum Blockchain based Decentralized Waste Management is effective",
    image: img2
  },
  {
    title: "Transparency in Value Chain,
    text:
      "City planner has full access to every endpoint, user terminal and actors of value chain",
    image: img4
  },
];

const Features = () => {
  const swiperParams = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: "#features-paginations",
      type: "bullets",
      clickable: true
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      575: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2
      },
      991: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      992: {
        slidesPerGroup: 3,
        slidesPerView: 3
      }
    }
  };
  return (
    <section className="pb-110" id="features">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={8}>
            <SectionTitle
              title="App Advance Features"
              text="Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt    mollit lorem ipsum anim id est laborum perspiciatis unde."
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl={10} lg={12}>
            <Swiper className="feature-carousel" {...swiperParams}>
              {FEATURES_DATA.map((feature, index) => (
                <SwiperSlide key={`feature-post-${index}`}>
                  <FeatureCard
                    title={feature.title}
                    text={feature.text}
                    image={feature.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              id="features-paginations"
              className="swiper-pagination d-flex justify-content-center align-items-center"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
