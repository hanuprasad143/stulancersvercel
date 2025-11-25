// Updated SignUp component with Verify buttons and OTP modal
import { Fragment, useState } from "react";
import { Col, Row, Card, Form, Button, Image, Modal } from "react-bootstrap";
import Link from "next/link";
import { GeeksSEO } from "widgets";
import AuthLayout from "layouts/dashboard/AuthLayout";

const SignUp = () => {
  const [showEmailOTP, setShowEmailOTP] = useState(false);
  const [showMobileOTP, setShowMobileOTP] = useState(false);
  const [otp, setOtp] = useState("");

  const handleVerifyEmail = () => {
    setShowEmailOTP(true);
  };

  const handleVerifyMobile = () => {
    setShowMobileOTP(true);
  };

  const handleOTPSubmit = () => {
    
    setShowEmailOTP(false);
    setShowMobileOTP(false);
    setOtp("");
  };

  return (
    <Fragment>
      <GeeksSEO title="Sign Up" />

      <Row className="align-items-center justify-content-center g-0 min-vh-100">
        <Col lg={5} md={5} className="py-8 py-xl-0">
          <Card>
            <Card.Body className="p-6">
              <div className="mb-4">
                <Link href="/">
                  <Image
                    src="/images/brand/logo/LOGO_FINAL_HEADER.svg"
                    className="mb-4"
                    alt="logo"
                    width={120}
                    height={70}
                  />
                </Link>
                <h1 className="mb-1 fw-bold">Sign up</h1>
                <span>
                  Already have an account?{" "}
                  <Link href="/authentication/sign-in" className="ms-1">
                    Sign in
                  </Link>
                </span>
              </div>

              <Form>
                <Row>
                  <Col lg={12} md={12} className="mb-3">
                    <Form.Label>Select Role</Form.Label>
                    <Form.Select id="role" required>
                      <option value="">Choose Role</option>
                      <option value="student">Student</option>
                      <option value="client">Client</option>
                      <option value="instructor">Instructor</option>
                      <option value="admin">Admin</option>

                    </Form.Select>
                  </Col>

                  <Col lg={12} md={12} className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" id="username" placeholder="User Name" required />
                  </Col>

                  
                  <Col lg={12} md={12} className="mb-3 d-flex align-items-end gap-2">
                    <div className="flex-grow-1">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" id="email" placeholder="Email address here" required />
                    </div>
                    <Button variant="outline-primary" onClick={handleVerifyEmail}>Verify</Button>
                  </Col>

                  <Col lg={12} md={12} className="mb-3 d-flex align-items-end gap-2">
                    <div className="flex-grow-1">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="text" id="mobilenumber" placeholder="Enter mobile number here" required />
                    </div>
                    {/* <Button variant="outline-primary" onClick={handleVerifyMobile}>Verify</Button> */}
                  </Col>

                  <Col lg={12} md={12} className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" placeholder="**************" required />
                  </Col>

                  <Col lg={12} md={12} className="mb-3">
                    <Form.Check type="checkbox" id="check-api-checkbox">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label>
                        I agree to the{" "}
                        <Link href="/marketing/specialty/terms-and-conditions/">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/marketing/specialty/terms-and-conditions/">
                          Privacy Policy.
                        </Link>
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>

                  <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                    <Button variant="primary" type="submit">
                      Sign in
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Modal show={showEmailOTP || showMobileOTP} onHide={() => { setShowEmailOTP(false); setShowMobileOTP(false); }} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>OTP</Form.Label>
            <Form.Control type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShowEmailOTP(false); setShowMobileOTP(false); }}>Cancel</Button>
          <Button variant="primary" onClick={handleOTPSubmit}>Verify</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

SignUp.Layout = AuthLayout;
export default SignUp;
