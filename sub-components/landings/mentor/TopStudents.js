// import node module libraries
import Link from "next/link";
import { Col, Container, Form, Row } from "react-bootstrap";

// import data files
import MentorListData from "data/marketing/mentor/MentorListData"; // Update this path to your actual student data

// import required helper file
import { MentorCard } from "widgets"; // Update this if you have a specific StudentCard component

const TopStudentsSection = () => {
  return (
    <section className="py-6 py-lg-8 bg-light">
      <Container className="py-lg-6">
        <Row>
          <Col xl={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }}>
            <div className="text-center mb-6 d-flex flex-column gap-2">
              <h2 className="mb-0 mx-xl-8 h1">
                Meet Our Top Performing Students
              </h2>
              <p className="mb-0">
                Discover stories of achievement, dedication, and academic
                excellence
              </p>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col xs={12}>
            <div className="d-flex flex-md-row gap-2 flex-column justify-content-between">
              <Form>
                <Form.Control
                  type="search"
                  placeholder="Search by name, skills or achievements"
                />
              </Form>
              <div className="d-grid d-md-flex">
                <Link href="/marketing/mentor/list1" className="btn btn-primary">
                  View All Students
                </Link>
              </div>
            </div>
          </Col>

          {MentorListData.slice(4, 8).map((mentor, index) => {
            return (
              <Col key={index} xxl={3} xl={4} md={6} xs={12}>
                <MentorCard mentor={mentor} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default TopStudentsSection;
