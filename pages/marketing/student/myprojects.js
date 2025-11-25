// import node module libraries
import React, { Fragment, useState } from "react";
import Link from "next/link";
import {
  Row,
  Col,
  Card,
  Table,
  Dropdown,
  Image,
  Breadcrumb,
  Button,
  Offcanvas,
  Form,Tab,Nav
} from "react-bootstrap";

// import sub components
import { CoursesTable } from "sub-components";

// import widget/custom components
import { StatRightBadge, ApexCharts, GeeksSEO } from "widgets";
// import sub components
import { ProjectCard, OffcanvasCreateProjectForm } from "sub-components";
// import widget/custom components
import { FormSelect } from "widgets";
import ProfileLayout from "layouts/marketing/student/ProfileLayout";
// import {
//   allcourses,
//   allapprovedcourses,
//   allpendingcourses,
//   allrejectedcourses,
// } from "data/courses/AllCoursesData";
import {
 allcourses,
  allapprovedcourses,
  allpendingcourses,
  allrejectedcourses} from "data/dashboard/projects/ProjectsGridData";

const StudentProjects = () => {
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [ProjectsList, setProjectsList] = useState(
  //   ProjectsGridData.slice(0, 500)
  // );
  // paging start
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 400;
  // const pagesVisited = pageNumber * projectsPerPage;

  // const displayProjects = ProjectsList.slice(
  //   pagesVisited,
  //   pagesVisited + projectsPerPage
  // ).map((item, index) => {
  //   return (
  //     <Col
  //       xxl={4}
  //       xl={4}
  //       lg={4}
  //       xs={12}
  //       md={6}
  //       xs={12}
  //       className="mb-4"
  //       key={index}
  //     >
  //       <ProjectCard item={item} />
  //     </Col>
  //   );
  // });
  // end of paging
  // const filterOptions = [
  //   { value: "In Progress", label: "In Progress" },
  //   { value: "Pending", label: "Pending" },
  //   { value: "Modified", label: "Modified" },
  //   { value: "Finished", label: "Finished" },
  //   { value: "Cancel", label: "Cancel" },
  // ];

  // searching code started
  // const [searchTerm, setSearchTerm] = useState("");

  // const getSearchTerm = (event) => {
  //   let searchTerm = event.target.value;
  //   setSearchTerm(searchTerm);
  //   if (searchTerm !== "") {
  //     const newProjectsList = ProjectsGridData.filter((project) => {
  //       return Object.values(project)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase());
  //     });
  //     setProjectsList(newProjectsList.slice(0, 500));
  //     setPageNumber(0);
  //   } else {
  //     setProjectsList(ProjectsGridData.slice(0, 500));
  //   }
  // };
  // const getFilterTerm = (event) => {
  //   let filterTerm = event.target.value;
  //   if (filterTerm !== "") {
  //     const newProjectsList = ProjectsGridData.filter((project) => {
  //       return Object.values(project)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(filterTerm.toLowerCase());
  //     });
  //     setProjectsList(newProjectsList.slice(0, 500));
  //     setPageNumber(0);
  //   } else {
  //     setProjectsList(ProjectsGridData.slice(0, 500));
  //   }
  // };
  // end of searching code

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
    <ProfileLayout>
      {/* Geeks SEO settings  */}
      <GeeksSEO title="Projects" />
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 fw-bold">Projects</h1>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Student Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item active>Projects</Breadcrumb.Item>
                {/* <Breadcrumb.Item active>Grid</Breadcrumb.Item> */}
              </Breadcrumb>
            </div>
            <div>
              <Button onClick={handleShow}>Create a Project</Button>
              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="end"
                name="end"
                style={{ width: "600px" }}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title as="h3">Create Project</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="pt-0">
                  <OffcanvasCreateProjectForm onClick={handleClose} />
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </Col>
      </Row>
      {/*clear*/}
      

            <Tab.Container defaultActiveKey="all">
  <Card>
    <Card.Header className="border-bottom-0 p-0 bg-white">
      <Nav className="nav-lb-tab">
        <Nav.Item>
          <Nav.Link eventKey="all">All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="approved">Approved</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="pending">Pending</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="rejected">Rejected</Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>

    <Card.Body>
      <Tab.Content>
        {/* All Projects */}
        <Tab.Pane eventKey="all">
          <Row>
            {allcourses.map((item, index) => (
              <Col
                xxl={4}
                xl={4}
                lg={4}
                md={6}
                xs={12}
                key={index}
                className="mb-4"
              >
                <ProjectCard item={item} />
              </Col>
            ))}
          </Row>
        </Tab.Pane>

        {/* Approved Projects */}
        <Tab.Pane eventKey="approved">
          <Row>
            {allapprovedcourses.map((item, index) => (
              <Col
                xxl={4}
                xl={4}
                lg={4}
                md={6}
                xs={12}
                key={index}
                className="mb-4"
              >
                <ProjectCard item={item} />
              </Col>
            ))}
          </Row>
        </Tab.Pane>

        {/* Pending Projects */}
        <Tab.Pane eventKey="pending">
          <Row>
            {allpendingcourses.map((item, index) => (
              <Col
                xxl={4}
                xl={4}
                lg={4}
                md={6}
                xs={12}
                key={index}
                className="mb-4"
              >
                <ProjectCard item={item} />
              </Col>
            ))}
          </Row>
        </Tab.Pane>

        {/* Rejected Projects */}
        <Tab.Pane eventKey="rejected">
          <Row>
            {allrejectedcourses.map((item, index) => (
              <Col
                xxl={4}
                xl={4}
                lg={4}
                md={6}
                xs={12}
                key={index}
                className="mb-4"
              >
                <ProjectCard item={item} />
              </Col>
            ))}
          </Row>
        </Tab.Pane>
      </Tab.Content>
    </Card.Body>
  </Card>
</Tab.Container>




      {/* <Row className="justify-content-md-between mb-4 mb-xl-0 ">
        <Col xl={2} lg={4} md={6} xs={12}>  */}
          {/* search records */}
           {/* <div className="mb-2 mb-lg-4">
            <Form.Control
              type="search"
              placeholder="Search by project name"
              value={searchTerm}
              onChange={getSearchTerm}
            />
          </div> 
        </Col>
        <Col xxl={2} lg={2} md={6} xs={12}>  */}
          {/* records filtering options */}
          {/* <Form.Control
            as={FormSelect}
            placeholder="Filter"
            options={filterOptions}
            onChange={getFilterTerm}
          />
        </Col>
      </Row>  */}
      {/* displaying records */}
      {/* <Row>
        {displayProjects.length > 0 ? (
          displayProjects
        ) : (
          <Col>No matching projects found.</Col>
        )}
      </Row> */}

      {/* end of Page Content section*/}
    </ProfileLayout>
  );
};

export default StudentProjects;
