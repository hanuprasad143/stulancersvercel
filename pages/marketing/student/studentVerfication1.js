// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Table } from 'react-bootstrap';
import ProfileLayout from "layouts/marketing/student/ProfileLayout";
import { GeeksSEO } from "widgets";

// Example Student Verification Data
const studentData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Verified" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Pending" },
  { id: 3, name: "Alex Brown", email: "alex@example.com", status: "Rejected" },
];

const StudentVerification = () => {
  return (
    <ProfileLayout>
        <GeeksSEO title="Analytics | Stulancer" />
    <Fragment>
      <Row>
        <Col lg={12}>
          <div className="border-bottom pb-4 mb-4 d-flex justify-content-between align-items-center">
            <h1 className="mb-0 h2 fw-bold">Student Verification</h1>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h4 className="mb-0">Verification Requests</h4>
            </Card.Header>
            <Card.Body className="p-0">
              <Table hover responsive className="mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Student Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>
                        <span
                          className={`badge${
                            student.status === "Verified"
                              ? "bg-success"
                              : student.status === "Pending"
                              ? "bg-warning text-dark"
                              : "bg-danger"
                          }`}
                        >
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
    </ProfileLayout>
  );
};

export default StudentVerification;
