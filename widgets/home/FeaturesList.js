// import node module libraries
import { Col, Row, Container } from "react-bootstrap";

// import custom components
import FeatureLeftIcon from "widgets/features/FeatureLeftIcon";

const FeaturesList = () => {
  const features = [
    {
      id: 1,
      title: "5,000 + Stulancers",
      description: "Connect with over 5,000 stulancers across domains.",
      icon: "user-check",
      colorclass: "warning",
    },
    {
      id: 2,
      title: "500 + Courses",
      description: "Access a growing library of 500+ practical courses.",
      icon: "book-open",
      colorclass: "warning",
    },
    {
      id: 3,
      title: "1000 + Instructors",
      description: "Learn from 1,000+ expert mentors anytime, anywhere.",
      icon: "users",
      colorclass: "warning",
    },
  ];
  return (
    <section className="bg-white py-4 shadow-sm">
      <Container>
        <Row className="align-items-center g-0">
          {features.map((item, index) => {
            return (
              <Col xl={4} lg={4} md={6} className="mb-lg-0 mb-4" key={index}>
                <FeatureLeftIcon item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
export default FeaturesList;
