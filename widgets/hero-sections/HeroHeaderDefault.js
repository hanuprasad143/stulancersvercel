import { Col, Row, Container, Image } from "react-bootstrap";
import Link from "next/link";
import React from "react";

const HeroHeaderDefault = ({
  title = "Welcome to Stulancers Learning Platform",
  description = "Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.",
  buttonText1 = "Browse Courses",
  buttonLink1 = "#",
  buttonText2 = "Are You Instructor?",
  buttonLink2 = "#",
}) => {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{ height: "80vh" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute w-100 h-70 object-fit-cover"
        style={{ top: 0, left: 0, zIndex: -1 }}
      >
        <source src="/videos/stulancers_home_page_video.mp4" type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>

      {/* Content */}
      <Container className="h-100 d-flex align-items-center">
        <Row className="align-items-center w-100">
          <Col xl={5} lg={6} md={12}>
            <div className="py-5 py-lg-0 text-white">
              <h1 className="display-4 fw-bold" style={{ color: "#ffffff" }}>
                {title}
              </h1>
              <p className="text-white-50 mb-4 lead">{description}</p>
              <Link href={buttonLink1} scroll={false} className="btn btn-dark">
                {buttonText1}
              </Link>{" "}
              <Link href={buttonLink2} scroll={false} className="btn btn-light">
                {buttonText2}
              </Link>
            </div>
          </Col>
          {/* <Col
            xl={7}
            lg={6}
            md={12}
            className="text-lg-end text-center d-none d-lg-block"
          >
            <Image
              src="/images/hero/female_image.PNG"
              alt=""
              className="img-fluid"
            />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default HeroHeaderDefault;
