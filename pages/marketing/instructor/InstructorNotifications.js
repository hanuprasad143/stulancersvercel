import React, { Fragment } from "react";
import { Col, Row, Card, ListGroup, CloseButton, Image } from "react-bootstrap";
import { ThumbsUp, Award, MessageSquare } from "react-feather";
import Link from "next/link";
import Head from "next/head";

// import widget/custom components
import { GKTippy } from "widgets";

// import custom components
import DotBadge from "components/bootstrap/DotBadge";

// import data files
import NotificationData from "./StulancerInstructorNotifications";
// import profile layout wrapper
import ProfileLayout from "layouts/marketing/instructor/ProfileLayout";

function NotificationsIcon(icon, color) {
  if (icon === "ThumbsUp") {
    return <ThumbsUp className={`text-${color} me-1`} size="12px" />;
  }
  if (icon === "Award") {
    return <Award className={`text-${color} me-1`} size="12px" />;
  }
  if (icon === "MessageSquare") {
    return <MessageSquare className={`text-${color} me-1`} size="12px" />;
  }
  return null;
}

function MarkAsRead(removable) {
  if (removable) {
    return (
      <Fragment>
        <GKTippy content="Mark as read" placement="left">
          <Link href="#">
            <DotBadge bg="info" className="mx-1" />
          </Link>
        </GKTippy>
        <GKTippy content="Remove" placement="left">
          <Link href="#">
            <CloseButton className="btn-close fs-6 d-block me-1" />
          </Link>
        </GKTippy>
      </Fragment>
    );
  } else {
    return (
      <GKTippy content="Mark as read" placement="left">
        <Link href="#">
          <DotBadge bg="secondary" className="mx-1" />
        </Link>
      </GKTippy>
    );
  }
}

const InstructorsNotifications = () => {
  return (
    <ProfileLayout>
      <Head>
        <title>Instructor Notifications</title>
        <meta
          name="description"
          content="View all your client-related notifications on Geeks platform."
        />
      </Head>
      <Row>
        <Col lg={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 h2 font-weight-bold">Notification History</h1>
              <p className="mb-0">Check your all notification and read it.</p>
            </div>
            <div>
              <Link href="#" className="btn btn-white">
                Mark all as read
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card className="rounded-3">
            <Card.Body className="rounded-3 p-0">
              <ListGroup>
                {NotificationData.map((item, index) => (
                  <ListGroup.Item className="py-4" key={index}>
                    <Row className="align-items-center">
                      <Col>
                        <div className="d-flex align-items-center">
                          <Link href="#">
                            <Image
                              src={item.image}
                              alt=""
                              className="avatar-lg rounded-circle"
                            />
                          </Link>
                          <div className="ms-3">
                            <Link href="#">
                              <p className="mb-0 text-body">
                                <span className="fw-bold mb-0 h5">
                                  {item.name}:
                                </span>{" "}
                                {item.notification}
                              </p>
                            </Link>
                            <span className="fs-6 text-muted">
                              <span>
                                {NotificationsIcon(item.icon, item.colorClass)}
                                {item.date},
                              </span>
                              <span className="ms-1">{item.time}</span>
                            </span>
                          </div>
                        </div>
                      </Col>
                      <Col xs="auto" className="text-center p-2">
                        {MarkAsRead(item.removable)}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </ProfileLayout>
  );
};

export default InstructorsNotifications;
