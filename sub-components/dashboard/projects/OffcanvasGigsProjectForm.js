// import node module libraries
import { useState } from "react";
import { Col, Row, Form, Button, Table, Modal } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";

const OffcanvasGigsProjectForm = ({ onClick }) => {
  const [groupGigName, setGroupGigName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [savedGroupGigs, setSavedGroupGigs] = useState([]);

  // state for delete confirmation
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [gigToDelete, setGigToDelete] = useState(null);
  

    // Success modal
    const [showSuccessModal, setShowSuccessModal] = useState(false);




      // Submit Bid modal
  const handleSubmitBidModal = () => {


      if (!searchQuery) {
    alert("Please enter stulancer.");
    return;
  }

  if (!groupGigName) {
    alert("Please enter group gig name.");
    return;
  }

  
    // setShowBidModal(false);
    setShowSuccessModal(true);
    setSearchQuery("");
    setGroupGigName("");
  };

  // Add new Group Gig row
  const handleAddNew = () => {
    if (!groupGigName) return;

    setSavedGroupGigs([
      ...savedGroupGigs,
      {
        id: Date.now(),
        name: groupGigName,
        stulancerSearch: searchQuery, 
      },
    ]);

    setGroupGigName("");
    setSearchQuery("");
  };


  const confirmDelete = (id) => {
    setGigToDelete(id);
    setShowDeleteModal(true);
  };


  const handleDelete = () => {
    if (gigToDelete) {
      setSavedGroupGigs(savedGroupGigs.filter((gig) => gig.id !== gigToDelete));
    }
    setShowDeleteModal(false);
    setGigToDelete(null);
  };

  return (
    <>
      <Form>
        <Row>
          {/* Group Gig Name */}
          <Col xs={12} className="mb-3">
            <Form.Group controlId="formGroupGigName">
              <Form.Label>
                Group Gig Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Group Gig Name"
                value={groupGigName}
                onChange={(e) => setGroupGigName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          {/* Search Stulancer */}
          <Col xs={12} className="mb-3">
            <Form.Label>Search Stulancer</Form.Label>
            <Form.Control
              type="search"
              placeholder="Search Stulancer"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Col>

          {/* Add Button */}
          <Col xs={12} className="mb-3 mt-3 d-flex justify-content-end">
            <Button
              variant="primary"
              className="d-flex align-items-center"
              onClick={handleAddNew}
            >
              <Plus className="me-2" />
              Add New
            </Button>
          </Col>
        </Row>
      </Form>

     
      {savedGroupGigs.length > 0 && (
        <Table bordered hover responsive className="mt-4">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Group Gig Name</th>
              <th>Searched Stulancer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {savedGroupGigs.map((gig, index) => (
              <tr key={gig.id}>
                <td>{index + 1}</td>
                <td>{gig.name}</td>
                <td>{gig.stulancerSearch || "None"}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => confirmDelete(gig.id)}
                  >
                    ✖️ Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

    
      {/* <div className="mt-4 d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button onClick={onClick} variant="outline-primary" className="ms-2">
          Close
        </Button>
      </div> */}

      <Button variant="primary" onClick={handleSubmitBidModal}>
                Final Submit
              </Button>


         <Button onClick={onClick} variant="outline-primary" className="ms-2">
          Close
        </Button>
     
           {/* ---------- Success Modal ---------- */}
           <Modal
             show={showSuccessModal}
             onHide={() => setShowSuccessModal(false)}
             centered
           >
             <Modal.Header closeButton>
               <Modal.Title>Success</Modal.Title>
             </Modal.Header>
             <Modal.Body>Your Gig has been successfully submitted!</Modal.Body>
             <Modal.Footer>
               <Button variant="primary" onClick={() => setShowSuccessModal(false)}>
                 Continue
               </Button>
             </Modal.Footer>
           </Modal>



      
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this group gig?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>




    </>
  );
};

export default OffcanvasGigsProjectForm;