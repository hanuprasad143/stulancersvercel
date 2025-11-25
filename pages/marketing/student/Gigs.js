// import node module libraries
import React, { Fragment, useState } from "react";
import { Row, Col, Breadcrumb, Offcanvas, Button } from "react-bootstrap";

// import sub components
import { OffcanvasGigsProjectForm } from "sub-components";

import { GigsListTable } from "sub-components";

// import profile layout wrapper
import ProfileLayout from "layouts/marketing/student/ProfileLayout";

// import widget/custom components
import { GeeksSEO } from "widgets";

const Gigs = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ProfileLayout>
      {/* Geeks SEO settings  */}
      <GeeksSEO title="Gigs" />

      <Fragment>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
              <div className="mb-3 mb-md-0">
                <h1 className="mb-1 h2 fw-bold">Gigs List</h1>
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
                  <Breadcrumb.Item active>List</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div>
                <Button onClick={handleShow}>Create Gig</Button>
                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  placement="end"
                  name="end"
                  style={{ width: "600px" }}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title as="h3">Create Gigs</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="pt-0">
                    <OffcanvasGigsProjectForm onClick={handleClose} />
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <GigsListTable onNewProject={handleShow} />
          </Col>
        </Row>
      </Fragment>
    </ProfileLayout>
  );
};

export default Gigs;
