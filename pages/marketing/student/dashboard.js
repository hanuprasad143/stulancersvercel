import { useEffect, useState } from "react";
import {
  Col,
  Row,
  Nav,
  Tab,
  Card,
  Dropdown,
  ButtonGroup,
  Button,
  Form,
  Offcanvas,
} from "react-bootstrap";

import { ExploreSkillCourses } from "sub-components";
import { CourseCard, GeeksSEO, FormSelect } from "widgets";
import { ProjectCard, OffcanvasCreateProjectForm } from "sub-components";
import ProfileLayout from "layouts/marketing/student/ProfileLayout";
import { AllCoursesData } from "data/slider/AllCoursesData";
import NewProjectsGridData from "data/dashboard/projects/Newprojectslistdata";

const Courses = () => {
  const [filter, setFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("courses");
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [ProjectsList, setProjectsList] = useState(
    NewProjectsGridData.slice(0, 500)
  );

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Pagination Data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = AllCoursesData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(AllCoursesData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    document.body.className = "bg-light";
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setActiveTab("courses");
    setCurrentPage(1); // reset pagination on filter change
  };

  const getFilteredData = () => {
    switch (filter) {
      case "Free":
        return AllCoursesData.slice(0, 4);
      case "Paid":
        return AllCoursesData.slice(4, 8);
      case "Favorites":
        return AllCoursesData.slice(8, 12);
      default:
        return AllCoursesData;
    }
  };

  const filteredCourses = getFilteredData();

  const handleProjectSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term !== "") {
      const filtered = NewProjectsGridData.filter((project) =>
        Object.values(project)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase())
      );
      setProjectsList(filtered.slice(0, 500));
    } else {
      setProjectsList(NewProjectsGridData.slice(0, 500));
    }
  };

  const handleProjectFilter = (e) => {
    const term = e.target.value;
    if (term !== "") {
      const filtered = NewProjectsGridData.filter((project) =>
        Object.values(project)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase())
      );
      setProjectsList(filtered.slice(0, 500));
    } else {
      setProjectsList(NewProjectsGridData.slice(0, 500));
    }
  };

  return (
    <ProfileLayout>
      <GeeksSEO title="Student Home Page | Stulancer" />
      <Card className="border-0">
        <Tab.Container activeKey={activeTab}>
          <Card.Header className="border-0 p-0 bg-transparent d-flex justify-content-between align-items-center">
            <Nav className="nav-lb-tab">
              <Nav.Item className="mb-4">
                <Nav.Link
                  eventKey="courses"
                  onClick={() => setActiveTab("courses")}
                >
                  Courses
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="projects"
                  onClick={() => setActiveTab("projects")}
                >
                  Projects
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {activeTab === "courses" && (
              <Dropdown as={ButtonGroup}>
                <Button variant="outline-primary" disabled>
                  Filter: {filter}
                </Button>
                <Dropdown.Toggle
                  split
                  variant="outline-primary"
                  id="dropdown-split-basic"
                />
                <Dropdown.Menu align="end">
                  <Dropdown.Item onClick={() => handleFilterChange("All")}>
                    All
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFilterChange("Free")}>
                    Free
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFilterChange("Paid")}>
                    Paid
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => handleFilterChange("Favorites")}
                  >
                    Favorites
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Card.Header>

          <Card.Body className="p-0">
            <Tab.Content>
              {/* COURSES TAB */}
              <Tab.Pane eventKey="courses" className="p-4">
                {filter === "All" && (
                  <>
                    {/* PAGINATED CARDS */}
                    <Row className="mb-5 ms-1">
                      {currentCourses.map((item, index) => (
                        <Col
                          lg={3}
                          md={6}
                          sm={12}
                          key={index}
                          className="mb-4"
                        >
                          <CourseCard item={item} />
                        </Col>
                      ))}
                    </Row>

                    {/* SIMPLE PAGINATION */}
                    <div className="d-flex justify-content-center align-items-center gap-4">
                      <Button
                        variant="light"
                        onClick={prevPage}
                        disabled={currentPage === 1}
                      >
                        {"<"}
                      </Button>

                      <span style={{ fontSize: "18px", fontWeight: "600" }}>
                        {currentPage}
                      </span>

                      <Button
                        variant="light"
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                      >
                        {">"}
                      </Button>
                    </div>
                  </>
                )}

                {filter !== "All" && (
                  <>
                    <h4 className="mx-2 mb-5 ms-4 fw-bold">{filter}</h4>
                    <Row className="mb-5 ms-1">
                      {filteredCourses.map((item, index) => (
                        <Col
                          lg={3}
                          md={6}
                          sm={12}
                          key={index}
                          className="mb-4"
                        >
                          <CourseCard item={item} />
                        </Col>
                      ))}
                    </Row>
                  </>
                )}
              </Tab.Pane>

              {/* PROJECTS TAB */}
              <Tab.Pane eventKey="projects" className="p-4">
                <Row className="align-items-stretch justify-content-between mb-4">
                  <Col xs={12} md={6} lg={4} xl={3} className="mb-3 mb-md-0">
                    <Form.Control
                      type="search"
                      placeholder="Search by project name"
                      value={searchTerm}
                      onChange={handleProjectSearch}
                    />
                  </Col>

                  <Col xs={12} md={6} lg={3} xl={2} className="mb-3 mb-md-0">
                    <Form.Control
                      as={FormSelect}
                      placeholder="Filter"
                      options={[
                        { value: "All", label: "All" },
                        {
                          value: "Group Gig Allowed",
                          label: "Group Gig Allowed",
                        },
                      ]}
                      onChange={handleProjectFilter}
                    />
                  </Col>
                </Row>

                <Row>
                  {ProjectsList.length > 0 ? (
                    ProjectsList.slice(0, 12).map((item, index) => (
                      <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                        <ProjectCard item={item} />
                      </Col>
                    ))
                  ) : (
                    <Col>No matching projects found.</Col>
                  )}
                </Row>

                <Offcanvas
                  show={show}
                  onHide={() => setShow(false)}
                  placement="end"
                  style={{ width: "600px" }}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Create Project</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <OffcanvasCreateProjectForm
                      onClick={() => setShow(false)}
                    />
                  </Offcanvas.Body>
                </Offcanvas>
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Tab.Container>
      </Card>
    </ProfileLayout>
  );
};

export default Courses;
