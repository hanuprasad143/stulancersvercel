import React from "react";
import Link from "next/link";
import {
  Row,
  Col,
  Card,
  Table,
  Dropdown,
  Image,
  Breadcrumb,
} from "react-bootstrap";

// import widget/custom components
import { StatRightBadge, ApexCharts, GeeksSEO } from "widgets";
import { CreateProjectForm } from "sub-components";

// import data files
import BestSellingCoursesData from "data/courses/BestSellingCoursesData";
import {
  EarningsChartSeries,
  EarningsChartOptions,
  OrderColumnChartSeries,
  OrderColumnChartOptions,
} from "data/charts/ChartData";

// import profile layout wrapper
import ClientProfileLayout from "layouts/marketing/client/ClientProfileLayout";

const CreateClientProject = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </Link>
  ));
  CustomToggle.displayName = "CustomToggle";

  const ActionMenu = () => {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle}>
            <i className="fe fe-more-vertical text-muted"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Header>SETTINGS</Dropdown.Header>
            <Dropdown.Item eventKey="1">
              <i className="fe fe-edit dropdown-item-icon"></i> Edit
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              <i className="fe fe-trash dropdown-item-icon"></i> Remove
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };

  return (
    <ClientProfileLayout>
      {/* Geeks SEO settings  */}
      <GeeksSEO title="Client Create Project" />

      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">Create New Project</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Client Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Project</Breadcrumb.Item>
                <Breadcrumb.Item active>Create Project</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              {/* <Link href="/dashboard/projects/grid" className="btn btn-primary">
                Back to Project
              </Link> */}
              <Link href="#" className="btn btn-primary">
                Back to Project
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      {/* create project form  */}
      <div className="py-6">
        <Row>
          <Col xl={{ offset: 3, span: 6 }} md={12} xs={12}>
            <Card>
              <Card.Body className="p-lg-6">
                <CreateProjectForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </ClientProfileLayout>
  );
};

export default CreateClientProject;
