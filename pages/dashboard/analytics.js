import {
  Card,
  Container,
  ListGroup,
  Col,
  Row,
  Image,
  Form,
} from "react-bootstrap";
import Link from "next/link";
import { GeeksSEO } from "widgets";
import useMounted from "hooks/useMounted";
import { useState, useEffect } from "react";

const StudentBillingPlan = () => {
  const hasMounted = useMounted();

  // Countdown Logic
  const calculateTimeLeft = () => {
	let launchdate = "2025-06-04";
	const difference = +new Date(launchdate) - +new Date();
	let timeLeft = {};

	if (difference > 0) {
	  timeLeft = {
		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((difference / 1000 / 60) % 60),
		seconds: Math.floor((difference / 1000) % 60),
	  };
	}
	return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
	const timer = setTimeout(() => {
	  setTimeLeft(calculateTimeLeft());
	}, 1000);
	return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
	if (!timeLeft[interval]) return;

	timerComponents.push(
	  <ListGroup.Item
		as="li"
		bsPrefix="list-inline-item"
		key={index}
		className="me-md-5"
	  >
		<span className="display-5 fw-bold text-primary">
		  {String(timeLeft[interval]).padStart(2, "0")}
		</span>
		<p className="fs-4 mb-0">{interval}</p>
	  </ListGroup.Item>
	);
  });

  return (
	<>
	  <GeeksSEO title="Stulancer" />

	  <Card className="border-0 p-4 my-5">
		<Card.Body>
		  <Container className="d-flex flex-column">
			<Row className="align-items-center justify-content-center g-0 py-lg-10 py-5">
			  {/* Left Side Content */}
			  <Col lg={6} md={12} className="text-center text-lg-start">
				<h1 className="display-4 mb-2 fw-bold">
				  Something Amazing Is Coming Soon
				</h1>

				<p className="mb-4 fs-4">
				  Working hard to bring you an incredible experience. Stay tuned
				  for the big reveal!
				</p>

				{/* Countdown */}
				{/* <div className="countdown mb-4">
				  <ListGroup as="ul" bsPrefix="list-inline">
					{timerComponents.length && hasMounted ? (
					  timerComponents
					) : (
					  <ListGroup.Item as="li" bsPrefix="list-inline-item"></ListGroup.Item>
					)}
				  </ListGroup>
				</div> */}

				<hr className="my-4" />

				{/* Subscribe Form */}
				<h4 className="mb-3">Notify me when it’s ready</h4>
				<Form className="d-inline-flex justify-content-center justify-content-lg-start">
				  <Form.Group
					className="mb-3 col ps-0 me-2"
					controlId="emailInput"
				  >
					<Form.Control
					  type="email"
					  placeholder="Your email..."
					  required
					/>
				  </Form.Group>

				  <Form.Group className="mb-3 col-auto ps-0">
					<Link
					  href="/marketing/student/dashboard"
					  className="btn btn-primary mb-3 col-auto"
					>
					  Subscribe
					</Link>
				  </Form.Group>
				</Form>
			  </Col>

			  {/* Right Side Image */}
			  <Col lg={6} md={12} className="mt-5 mt-lg-0 text-center">
				<Image
				  src="/images/background/comingsoon.svg"
				  alt="Coming Soon"
				  className="w-75"
				/>
			  </Col>
			</Row>
		  </Container>
		</Card.Body>
	  </Card>
	</>
  );
};

export default StudentBillingPlan;
