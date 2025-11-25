// import {
//   Card,
//   Container,
//   ListGroup,
//   Col,
//   Row,
//   Image,
//   Form,
// } from "react-bootstrap";
// import Link from "next/link";
// import { GeeksSEO } from "widgets";
// import useMounted from "hooks/useMounted";
// import { useState, useEffect } from "react";

// const StudentBillingPlan = () => {
//   const hasMounted = useMounted();

//   // Countdown Logic
//   const calculateTimeLeft = () => {
// 	let launchdate = "2025-06-04";
// 	const difference = +new Date(launchdate) - +new Date();
// 	let timeLeft = {};

// 	if (difference > 0) {
// 	  timeLeft = {
// 		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
// 		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
// 		minutes: Math.floor((difference / 1000 / 60) % 60),
// 		seconds: Math.floor((difference / 1000) % 60),
// 	  };
// 	}
// 	return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
// 	const timer = setTimeout(() => {
// 	  setTimeLeft(calculateTimeLeft());
// 	}, 1000);
// 	return () => clearTimeout(timer);
//   });

//   const timerComponents = [];

//   Object.keys(timeLeft).forEach((interval, index) => {
// 	if (!timeLeft[interval]) return;

// 	timerComponents.push(
// 	  <ListGroup.Item
// 		as="li"
// 		bsPrefix="list-inline-item"
// 		key={index}
// 		className="me-md-5"
// 	  >
// 		<span className="display-5 fw-bold text-primary">
// 		  {String(timeLeft[interval]).padStart(2, "0")}
// 		</span>
// 		<p className="fs-4 mb-0">{interval}</p>
// 	  </ListGroup.Item>
// 	);
//   });

//   return (
// 	<>
// 	  <GeeksSEO title=" Stulancer" />

// 	  <Card className="border-0 p-4 my-5">
// 		<Card.Body>
// 		  <Container className="d-flex flex-column">
// 			<Row className="align-items-center justify-content-center g-0 py-lg-10 py-5">
// 			  {/* Left Side Content */}
// 			  <Col lg={6} md={12} className="text-center text-lg-start">
// 				<h1 className="display-4 mb-2 fw-bold">
// 				  Something Amazing Is Coming Soon
// 				</h1>

// 				<p className="mb-4 fs-4">
// 				  Working hard to bring you an incredible experience. Stay tuned
// 				  for the big reveal!
// 				</p>

// 				{/* Countdown */}
// 				{/* <div className="countdown mb-4">
// 				  <ListGroup as="ul" bsPrefix="list-inline">
// 					{timerComponents.length && hasMounted ? (
// 					  timerComponents
// 					) : (
// 					  <ListGroup.Item as="li" bsPrefix="list-inline-item"></ListGroup.Item>
// 					)}
// 				  </ListGroup>
// 				</div> */}

// 				<hr className="my-4" />

// 				{/* Subscribe Form */}
// 				<h4 className="mb-3">Notify me when it’s ready</h4>
// 				<Form className="d-inline-flex justify-content-center justify-content-lg-start">
// 				  <Form.Group
// 					className="mb-3 col ps-0 me-2"
// 					controlId="emailInput"
// 				  >
// 					<Form.Control
// 					  type="email"
// 					  placeholder="Your email..."
// 					  required
// 					/>
// 				  </Form.Group>

// 				  <Form.Group className="mb-3 col-auto ps-0">
// 					<Link
// 					  href="/marketing/student/dashboard"
// 					  className="btn btn-primary mb-3 col-auto"
// 					>
// 					  Subscribe
// 					</Link>
// 				  </Form.Group>
// 				</Form>
// 			  </Col>

// 			  {/* Right Side Image */}
// 			  <Col lg={6} md={12} className="mt-5 mt-lg-0 text-center">
// 				<Image
// 				  src="/images/background/comingsoon.svg"
// 				  alt="Coming Soon"
// 				  className="w-75"
// 				/>
// 			  </Col>
// 			</Row>
// 		  </Container>
// 		</Card.Body>
// 	  </Card>
// 	</>
//   );
// };

// export default StudentBillingPlan;




// import node module libraries
import React, { Fragment, useState } from "react";
import {
  Col,
  Row,
  Breadcrumb,
  Form,
  Offcanvas,
  Button,
  Tab,
  Nav,
  Card
} from "react-bootstrap";

// import widget/custom components
import { FormSelect } from "widgets";

// import sub components
import { ProjectCard1, OffcanvasCreateProjectForm } from "sub-components";

// import data files (after fixing structure)
import ProjectsGridData1 from "data/dashboard/projects/ProjectsGridData1";

const ProjectGrid = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // SEARCH
  const [searchTerm, setSearchTerm] = useState("");

  const filterOptions = [
	{ value: "In Progress", label: "In Progress" },
	{ value: "Pending", label: "Pending" },
	{ value: "Modified", label: "Modified" },
	{ value: "Finished", label: "Finished" },
	{ value: "Cancel", label: "Cancel" }
  ];

  // SEARCH FUNCTION
  const filterData = (list) => {
	return list.filter((project) =>
	  Object.values(project)
		.join(" ")
		.toLowerCase()
		.includes(searchTerm.toLowerCase())
	);
  };

  return (
	<Fragment>
	  <Row>
		<Col lg={12}>
		  <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
			<div>
			  <h1 className="mb-1 h2 fw-bold">Projects</h1>
			  <Breadcrumb>
				<Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
				<Breadcrumb.Item href="#">Project</Breadcrumb.Item>
				<Breadcrumb.Item active>Grid</Breadcrumb.Item>
			  </Breadcrumb>
			</div>

			<div>
			  <Button onClick={handleShow}>Create a Project</Button>
			  <Offcanvas
				show={show}
				onHide={handleClose}
				placement="end"
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

	  {/* Search + Filter */}
	  <Row className="justify-content-md-between mb-4">
		<Col xl={3} lg={4} md={6} xs={12}>
		  <Form.Control
			type="search"
			placeholder="Search by project name"
			value={searchTerm}
			onChange={(e) => setSearchTerm(e.target.value)}
			className="mb-3"
		  />
		</Col>

		<Col xl={2} lg={3} md={6} xs={12}>
		  <Form.Control as={FormSelect} placeholder="Filter" options={filterOptions} />
		</Col>
	  </Row>

	  {/* TABS */}
	  <Tab.Container defaultActiveKey="all">
		<Card>
		  <Card.Header className="p-0 bg-white">
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
			  {/* ALL */}
			  <Tab.Pane eventKey="all">
				<Row>
				  {filterData(ProjectsGridData1.all).map((item, index) => (
					<Col xxl={3} xl={4} lg={6} xs={12} className="mb-4" key={index}>
					  <ProjectCard1 item={item} />
					</Col>
				  ))}
				</Row>
			  </Tab.Pane>

			  {/* APPROVED */}
			  <Tab.Pane eventKey="approved">
				<Row>
				  {filterData(ProjectsGridData1.approved).map((item, index) => (
					<Col xxl={3} xl={4} lg={6} xs={12} className="mb-4" key={index}>
					  <ProjectCard1 item={item} />
					</Col>
				  ))}
				</Row>
			  </Tab.Pane>

			  {/* PENDING */}
			  <Tab.Pane eventKey="pending">
				<Row>
				  {filterData(ProjectsGridData1.pending).map((item, index) => (
					<Col xxl={3} xl={4} lg={6} xs={12} className="mb-4" key={index}>
					  <ProjectCard1 item={item} />
					</Col>
				  ))}
				</Row>
			  </Tab.Pane>

			  {/* REJECTED */}
			  <Tab.Pane eventKey="rejected">
				<Row>
				  {filterData(ProjectsGridData1.rejected).map((item, index) => (
					<Col xxl={3} xl={4} lg={6} xs={12} className="mb-4" key={index}>
					  <ProjectCard1 item={item} />
					</Col>
				  ))}
				</Row>
			  </Tab.Pane>
			</Tab.Content>
		  </Card.Body>
		</Card>
	  </Tab.Container>
	</Fragment>
  );
};

export default ProjectGrid;






















