// import node module libraries
import React, { useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";

// import widget/custom components
import { CourseCard, GeeksSEO } from "widgets";

// import profile layout wrapper
import ProfileLayout from "layouts/marketing/student/ProfileLayout";

// import data files
import { AllCoursesData } from "data/slider/AllCoursesData";

const Courses = () => {
  useEffect(() => {
    document.body.className = "bg-light";
  }, []);

  return (
    <ProfileLayout>
      {/* Geeks SEO settings  */}
      <GeeksSEO title="Courses | Stulancer" />

      <Card className="border-0">
        <Card.Header>
          <div>
            <h3 className="mb-2">My Courses</h3>
            <p className="mb-0">Manage and browse your courses below.</p>
          </div>
        </Card.Header>

        <Card.Body>
          <Row>
            {AllCoursesData.slice(0, 4).map((item, index) => (
              <Col lg={3} md={6} sm={12} key={index}>
                <CourseCard item={item} />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </ProfileLayout>
  );
};

export default Courses;
