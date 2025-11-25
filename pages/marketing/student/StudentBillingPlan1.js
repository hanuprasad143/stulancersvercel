import React from "react";
import { Card, ListGroup, Button, Table } from "react-bootstrap";
import Link from "next/link";

// import profile layout wrapper
import ProfileLayout from "layouts/marketing/student/ProfileLayout";

// import SEO
import { GeeksSEO } from "widgets";

const StudentBillingPlan = () => {
  return (
    <ProfileLayout>
      <GeeksSEO title="Billing Plan | Stulancer" />

      <Card className="border-0 mb-4">
        <Card.Header>
          <h3 className="mb-0">Your Billing Plan</h3>
          <p className="mb-0">
            Manage your current subscription and payment settings.
          </p>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h5>Current Plan</h5>
              <p>Premium Student -$29/month</p>
              <Button variant="outline-primary" size="sm">
                Change Plan
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Next Payment</h5>
              <p>Renews on: August 15, 2025</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Payment Method</h5>
              <p>Visa **** 1234</p>
              <Button variant="outline-secondary" size="sm">
                Update Payment Method
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Billing Address</h5>
              <p>123 Student Lane, City, Country</p>
              <Button variant="outline-secondary" size="sm">
                Edit Address
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card className="border-0">
        {/* <Card.Header>
          <h4 className="mb-0">Billing History</h4>
        </Card.Header> */}
        <Card.Body>
          {/* <Table responsive hover>
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#INV-1001</td>
                <td>June 15, 2025</td>
                <td>$29</td>
                <td><Link href="#">Download PDF</Link></td>
              </tr>
              <tr>
                <td>#INV-1000</td>
                <td>May 15, 2025</td>
                <td>$29</td>
                <td><Link href="#">Download PDF</Link></td>
              </tr>
            </tbody>
          </Table> */}
        </Card.Body>
      </Card>
    </ProfileLayout>
  );
};

export default StudentBillingPlan;
