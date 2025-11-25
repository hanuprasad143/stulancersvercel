import React, { useState } from "react";
import { Card, ListGroup, Button, Modal, Row, Col, Form, Image } from "react-bootstrap";
import Link from "next/link";

// import profile layout wrapper
import ProfileLayout from "layouts/marketing/student/ProfileLayout";

// import SEO
import { GeeksSEO } from "widgets";

const PricingCard = ({ content, pricingMode, onSelectPlan }) => {
  let plan = content[0];

  return (
    <Card className="border-0 mb-3">
      <Card.Body className="p-0">
        <div className="p-5 text-center">
          <Image src={plan.image} alt="" className="mb-5" />
          <div className="mb-5">
            <h2 className="fw-bold">{plan.plantitle}</h2>
            <p
              className="mb-0"
              dangerouslySetInnerHTML={{ __html: plan.description }}
            ></p>
          </div>
          <div className="d-flex justify-content-center mb-4">
            <span className="h3 mb-0 fw-bold">$</span>
            <span className="h1 mb-0 fw-bold">{pricingMode ? plan.yearly : plan.monthly}</span>
            <span className="align-self-end mb-1 ms-2 toggle-price-content">
              /{pricingMode ? 'Yearly' : 'Monthly'}
            </span>
          </div>
          <div className="d-grid">
            <Button
              variant={plan.buttonClass ? plan.buttonClass : 'outline-primary'}
              onClick={() => onSelectPlan(plan)}
            >
              {plan.buttonText}
            </Button>
          </div>
        </div>
        <hr className="m-0" />
        <div className="p-5">
          <h4 className="fw-bold mb-4">{plan.featureHeading}</h4>
          {/* List of features */}
          <ListGroup bsPrefix="list-unstyled">
            {plan.features.map((item, index) => {
              return (
                <ListGroup.Item
                  key={index}
                  className="mb-1"
                  bsPrefix="list-item"
                >
                  <span className="text-success me-2">
                    <i className="far fa-check-circle"></i>
                  </span>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.feature }}
                  ></span>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

const StudentBillingPlan = () => {
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [pricingMode, setPricingMode] = useState(false); // false = monthly, true = yearly

  // Sample pricing data - replace with your actual data
  const pricingPlans = [
    {
      image: "/images/svg/basic-plan.svg",
      plantitle: "Free",
      description: "Perfect for getting started",
      monthly: 9,
      yearly: 90,
      buttonText: "Select Plan",
      buttonClass: "outline-primary",
      featureHeading: "Features Include:",
      features: [
        { feature: "Access to basic courses" },
        { feature: "Community support" },
        { feature: "Monthly newsletter" },
        { feature: "Basic profile" }
      ]
    },
    {
      image: "/images/svg/premium-plan.svg",
      plantitle: "Basic",
      description: "Most popular for serious learners",
      monthly: 29,
      yearly: 290,
      buttonText: "Current Plan",
      buttonClass: "primary",
      featureHeading: "Everything in Basic, plus:",
      features: [
        { feature: "Access to all courses" },
        { feature: "Priority support" },
        { feature: "Certificate of completion" },
        { feature: "Advanced analytics" },
        { feature: "Career resources" }
      ]
    },
    {
      image: "/images/svg/pro-plan.svg",
      plantitle: "Premium",
      description: "For the ultimate learning experience",
      monthly: 49,
      yearly: 490,
      buttonText: "Upgrade to Pro",
      buttonClass: "outline-primary",
      featureHeading: "Everything in Premium, plus:",
      features: [
        { feature: "1-on-1 mentorship sessions" },
        { feature: "Exclusive masterclasses" },
        { feature: "Job placement assistance" },
        { feature: "Portfolio review" },
        { feature: "Lifetime access" },
        { feature: "Advanced certifications" }
      ]
    }
  ];

  const handleSelectPlan = (plan) => {
    setShowPricingModal(false);
    // Here you would typically handle the plan change logic
    alert(`Plan changed to: ${plan.plantitle}`);
  };

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
              <p>Premium Student - $29/month</p>
              <Button 
                variant="outline-primary" 
                size="sm"
                onClick={() => setShowPricingModal(true)}
              >
                Change Plan
              </Button>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Next Payment</h5>
              <p>Renews on: August 15, 2025</p>
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

      {/* Pricing Modal */}
      <Modal 
        show={showPricingModal} 
        onHide={() => setShowPricingModal(false)}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Choose Your Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-4">
            <Form.Check 
              type="switch"
              id="pricing-switch"
              label={pricingMode ? "Yearly (Save 20%)" : "Monthly"}
              checked={pricingMode}
              onChange={(e) => setPricingMode(e.target.checked)}
              className="d-inline-block"
            />
          </div>
          <Row>
            {pricingPlans.map((plan, index) => (
              <Col md={4} key={index}>
                <PricingCard 
                  content={[plan]} 
                  pricingMode={pricingMode}
                  onSelectPlan={handleSelectPlan}
                />
              </Col>
            ))}
          </Row>
        </Modal.Body>
      </Modal>
    </ProfileLayout>
  );
};

export default StudentBillingPlan;