// import node module libraries
import React, { useState } from "react";
import { Card, Image, Button, Form } from "react-bootstrap";
import Link from "next/link";

// import widget/custom components
import { GeeksSEO } from "widgets";

// import profile layout wrapper
import ProfileLayout from "layouts/marketing/student/ProfileLayout";

const Payment = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  return (
    <ProfileLayout>
      {/* Geeks SEO settings */}
      <GeeksSEO title="Payment" />

      <Card className="border-0 mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="mb-0">Current Plan</h3>
            <span>Below is your current active plan.</span>
          </div>
          <Link href="#" className="btn btn-outline-primary btn-sm">
            Switch to Annual Billing
          </Link>
        </Card.Header>
        <Card.Body>
          <h2 className="fw-bold mb-0">$1500/Monthly</h2>
          <p className="mb-0">
            Your next monthly charge will be applied on{" "}
            <span className="text-success">July 20, 2025</span>
          </p>
        </Card.Body>
      </Card>

      <Card className="border-0">
        <Card.Header>
          <h3 className="mb-0">Payment via QR</h3>
          <span>Scan & complete your transaction</span>
        </Card.Header>

        <Card.Body className="text-center">
          {/* QR CODE */}
          <Image
            src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=Payment"
// <- replace with your QR image path
            alt="QR Code"
            width={220}
            height={220}
            className="mb-4 shadow rounded"
          />

          <h5 className="mb-3">Upload Transaction Screenshot</h5>

          {/* Upload Input */}
          <Form.Group>
            <Form.Control type="file" accept="image/*" onChange={handleUpload} />
          </Form.Group>

          {/* Preview */}
          {uploadedImage && (
            <div className="mt-4">
              <h6 className="mb-2">Uploaded Image Preview:</h6>
              <Image
                src={uploadedImage}
                alt="Uploaded Proof"
                width={300}
                height={300}
                className="rounded border"
              />
            </div>
          )}

          {/* Submit Button */}
          <Button variant="primary" className="mt-4">
            Submit Payment Proof
          </Button>
        </Card.Body>
      </Card>
    </ProfileLayout>
  );
};

export default Payment;