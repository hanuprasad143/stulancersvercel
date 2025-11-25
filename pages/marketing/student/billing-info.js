// import node module libraries
import React, { useState, useEffect } from "react";
import { Card, ListGroup, Row, Col, Form, Modal, Button } from "react-bootstrap";
import Link from "next/link";

// import widget/custom components
import { GeeksSEO } from "widgets";

// import profile layout wrapper
import ProfileLayout from "layouts/marketing/student/ProfileLayout";

const BillingInfo = () => {
  // -----------------------------------------------------------------
  // ADDRESS LIST — Load from localStorage
  // -----------------------------------------------------------------
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("billingAddresses");
    if (saved) {
      setAddresses(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever addresses update
  useEffect(() => {
    localStorage.setItem("billingAddresses", JSON.stringify(addresses));
  }, [addresses]);

  const [selectedAddress, setSelectedAddress] = useState(null);

  // -----------------------------------------------------------------
  // ADD MODAL
  // -----------------------------------------------------------------
  const [showAdd, setShowAdd] = useState(false);
  const handleShowAdd = () => {
    setFormData({ title: "", details: "" });
    setShowAdd(true);
  };
  const handleCloseAdd = () => setShowAdd(false);

  // -----------------------------------------------------------------
  // EDIT MODAL
  // -----------------------------------------------------------------
  const [showEdit, setShowEdit] = useState(false);
  const handleShowEdit = (address) => {
    setSelectedAddress(address);
    setFormData({
      title: address.title,
      details: address.details,
    });
    setShowEdit(true);
  };
  const handleCloseEdit = () => setShowEdit(false);

  // -----------------------------------------------------------------
  // FORM DATA
  // -----------------------------------------------------------------
  const [formData, setFormData] = useState({
    title: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // -----------------------------------------------------------------
  // SAVE NEW ADDRESS
  // -----------------------------------------------------------------
  const handleSaveNew = () => {
    const newAddress = {
      id: Date.now(),
      title: formData.title || "Billing Address",
      details: formData.details,
    };

    setAddresses([...addresses, newAddress]);
    handleCloseAdd();
  };

  // -----------------------------------------------------------------
  // SAVE EDITED ADDRESS
  // -----------------------------------------------------------------
  const handleSaveEdit = () => {
    setAddresses(
      addresses.map((a) =>
        a.id === selectedAddress.id
          ? { ...a, title: formData.title, details: formData.details }
          : a
      )
    );

    handleCloseEdit();
  };

  // -----------------------------------------------------------------
  // DELETE ADDRESS
  // -----------------------------------------------------------------
  const handleDelete = (id) => {
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  return (
    <ProfileLayout>
      <GeeksSEO title="Billing Info | Geeks Nextjs Template" />

      <Card className="border-0">
        <Card.Header>
          <h3 className="mb-0">Billing Address</h3>
          <p className="mb-0">Manage and update your saved billing addresses.</p>
        </Card.Header>

        <Card.Body>
          <ListGroup variant="flush" className="mb-4">
            {addresses.length === 0 && (
              <p className="text-muted">No billing addresses added yet.</p>
            )}

            {addresses.map((address) => (
              <ListGroup.Item key={address.id} className="px-0 py-4 border-bottom">
                <Row>
                  <Col>
                    <Form.Check type="radio">
                      <Form.Check.Input type="radio" name="address" className="me-1" />
                      <Form.Check.Label>
                        <span className="h5 d-block">{address.title}</span>
                        <span className="d-block">{address.details}</span>
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>

                  <Col xs="auto" className="d-flex gap-2">
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={() => handleShowEdit(address)}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(address.id)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Button className="btn btn-primary mb-5" onClick={handleShowAdd}>
            Add New Address
          </Button>
        </Card.Body>
      </Card>

      {/* -----------------------------------------------------------------
          ADD NEW ADDRESS MODAL
      ----------------------------------------------------------------- */}
      <Modal show={showAdd} onHide={handleCloseAdd} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Address</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Address Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Ex: Home, Office"
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Full Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="details"
                placeholder="Enter complete address"
                value={formData.details}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveNew}>
            Save Address
          </Button>
        </Modal.Footer>
      </Modal>

      {/* -----------------------------------------------------------------
          EDIT ADDRESS MODAL
      ----------------------------------------------------------------- */}
      <Modal show={showEdit} onHide={handleCloseEdit} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Address Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Full Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="details"
                value={formData.details}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </ProfileLayout>
  );
};

export default BillingInfo;
