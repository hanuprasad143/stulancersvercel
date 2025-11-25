// import node module libraries
import React from "react";
import { useRouter } from "next/router";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

// import profile layout wrapper
import ProfileLayoutWrap from "layouts/marketing/ProfileLayoutWrap";

// import widget/custom components
import { GeeksSEO } from "widgets";

const SkillsForm = () => {
  const location = useRouter();

  return (
    <ProfileLayoutWrap pathpara={location.pathname}>
      {/* Geeks SEO settings  */}
      <GeeksSEO title="Add Skills | Stulancer" />

      <Card className="border-0">
        <Card.Header>
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Your Skills</h3>
            <p className="mb-0">
              Add your skills and showcase your work with links.
            </p>
          </div>
        </Card.Header>
        <Card.Body>
          <Form>
            {/* Skill 1 */}
            <Row className="mb-4">
              <Col lg={3} md={4} sm={12}>
                <h5>Skill 1</h5>
              </Col>
              <Col lg={9} md={8} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Skill name (e.g., Web Development)"
                  className="mb-2"
                />
                <Form.Control
                  type="url"
                  placeholder="Skill link (e.g., GitHub Repo, Portfolio URL)"
                  className="mb-1"
                />
                <Form.Text className="text-muted">
                  Add a relevant work sample link.
                </Form.Text>
              </Col>
            </Row>

            {/* Skill 2 */}
            <Row className="mb-4">
              <Col lg={3} md={4} sm={12}>
                <h5>Skill 2</h5>
              </Col>
              <Col lg={9} md={8} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Skill name"
                  className="mb-2"
                />
                <Form.Control
                  type="url"
                  placeholder="Skill link"
                  className="mb-1"
                />
                {/* <Form.Text className="text-muted">Example: Portfolio, Behance, Dribbble, etc.</Form.Text> */}
              </Col>
            </Row>

            {/* Skill 3 */}
            <Row className="mb-4">
              <Col lg={3} md={4} sm={12}>
                <h5>Skill 3</h5>
              </Col>
              <Col lg={9} md={8} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Skill name"
                  className="mb-2"
                />
                <Form.Control
                  type="url"
                  placeholder="Skill link"
                  className="mb-1"
                />
                {/* <Form.Text className="text-muted">Add a relevant work sample link.</Form.Text> */}
              </Col>
            </Row>

            {/* Submit Button */}
            <Row>
              <Col lg={{ span: 6, offset: 3 }} sm={12}>
                <Button variant="primary" type="submit" className="w-100">
                  Save Skills
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </ProfileLayoutWrap>
  );
};

export default SkillsForm;
