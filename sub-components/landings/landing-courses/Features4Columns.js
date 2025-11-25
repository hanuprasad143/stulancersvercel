// Section : Features
// Style : Four Columns Features Section

// import node module libraries
import { Col, Row, Container } from "react-bootstrap";

// import widget/custom components
import { SectionHeadingCenter, FeatureTopIcon } from "widgets";

const Features4Columns = () => {
  const title = "Build better skills,faster";
  const subtitle = "Why Learn with Stulancer";
  const description = `Explore new skills, deepen existing passions, and get lost in creativity. What you find
    just might surprise and inspire you.`;

  const features = [
    {
      id: 1,
      icon: "settings",
      title: "Learn the latest skills",
      description: `Stay ahead with cutting-edge skills in technology, business, and more.`,
    },
    {
      id: 2,
      icon: "user",
      title: "Get ready for a career",
      description: `Build job-ready skills and gain real-world experience to launch your career.`,
    },
    {
      id: 3,
      icon: "award",
      title: "Earn a Certificate",
      description: `Get recognized for your skills with a certificate you can share and showcase.`,
    },
    {
      id: 4,
      icon: "users",
      title: "Upskill your organization",
      description: `Empower your teams with training programs that drive productivity and growth.`,
    },
  ];

  return (
    <section className="py-8 py-lg-18 bg-white">
      <Container>
        <SectionHeadingCenter
          title={title}
          description={description}
          subtitle={subtitle}
        />
        <Row>
          {features.map((item, index) => {
            return (
              <Col lg={3} md={6} sm={12} key={index}>
                <FeatureTopIcon item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Features4Columns;
