import { Col, Row, Container } from "react-bootstrap";

// import widget/custom components
import { SkillCourseCard } from "widgets";
import Link from "next/link";
// import data files
import SkillCoursesData from "data/marketing/landing-education/SkillCoursesData";

const ExploreSkillCourses = () => {
  return (
    <section className="py-lg-14 py-6">
      <Container>
        <Row className="align-items-center mb-6 mb-lg-8">
  <Col md={8} xs={12}>
    <h2 className="h1 fw-bold">
      Explore{" "}
      <u className="text-warning">
        <span className="text-primary">skill courses</span>
      </u>
    </h2>
    <p className="mb-0 lead">
      Online video courses with new additions published every month.
    </p>
  </Col>

  <Col
    md={4}
    xs={12}
    className="text-md-end mt-3 mt-md-0 d-flex justify-content-md-end"
  >
    <Link href="/marketing/mentor/list2" className="btn btn-primary">
      Explore all Courses
    </Link>
  </Col>
</Row>

        <Row>
          {SkillCoursesData.slice(0, 4).map((item, index) => (
            <Col xl={3} md={6} xs={12} key={index}>
              <SkillCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ExploreSkillCourses;
