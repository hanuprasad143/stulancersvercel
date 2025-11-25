// import node module libraries
import React, { useState } from "react";
import { Card, Form, Row, Col, Button, Table, Badge, Alert } from "react-bootstrap";
import { useRouter } from "next/router";
import { Edit2, Trash2, Upload } from "react-feather";

// import widget/custom components
import { FormSelect } from "widgets";
// import profile layout wrapper
// import profile layout wrapper
// import ProfileLayout from "layouts/marketing/student/ProfileLayout";
import ClientProfileLayout from "layouts/marketing/client/ClientProfileLayout";
import { GeeksSEO } from "widgets";

const EducationForm = () => {
  const location = useRouter();

  const educationlist = [
    { value: "class10", label: "Class X" },
    { value: "class12", label: "Class XII" },
    { value: "undergraduate", label: "Undergraduate" },
    { value: "postgraduate", label: "Postgraduate" },
    { value: "diploma", label: "Diploma" },
    { value: "phd", label: "PhD" },
  ];

  const yearlist = [
    { value: "1", label: "1st Year" },
    { value: "2", label: "2nd Year" },
    { value: "3", label: "3rd Year" },
    { value: "4", label: "4th Year" },
  ];

  const semesterlist = [
    { value: "1", label: "Semester 1" },
    { value: "2", label: "Semester 2" },
    { value: "3", label: "Semester 3" },
    { value: "4", label: "Semester 4" },
    { value: "5", label: "Semester 5" },
    { value: "6", label: "Semester 6" },
    { value: "7", label: "Semester 7" },
    { value: "8", label: "Semester 8" },
  ];

  const [selectedEducationLevel, setSelectedEducationLevel] = useState("");
  const [savedEducations, setSavedEducations] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Document state
  const [documentData, setDocumentData] = useState({
    aadhaarNumber: "",
    aadhaarFile: null,
    aadhaarFileName: "",
    panNumber: "",
    panFile: null,
    panFileName: "",
  });

  // Form state
  const [formData, setFormData] = useState({
    level: "",
    institution: "",
    board: "",
    stream: "",
    courseName: "",
    branchName: "",
    year: "",
    semester: "",
    percentage: "",
    yearOfPassing: "",
  });

  const resetForm = () => {
    setFormData({
      level: "",
      institution: "",
      board: "",
      stream: "",
      courseName: "",
      branchName: "",
      year: "",
      semester: "",
      percentage: "",
      yearOfPassing: "",
    });
    setSelectedEducationLevel("");
    setEditingIndex(null);
  };

  const handleEducationLevelChange = (value) => {
    setSelectedEducationLevel(value);
    setFormData({ ...formData, level: value });
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleDocumentChange = (field, value) => {
    setDocumentData({ ...documentData, [field]: value });
  };

  const handleFileUpload = (field, fileNameField, event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload only PDF, JPG, JPEG, or PNG files');
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should not exceed 5MB');
        return;
      }

      setDocumentData({
        ...documentData,
        [field]: file,
        [fileNameField]: file.name
      });
    }
  };

  const validateAadhaar = (number) => {
    // Aadhaar should be 12 digits
    const aadhaarRegex = /^\d{12}$/;
    return aadhaarRegex.test(number.replace(/\s/g, ''));
  };

  const validatePAN = (number) => {
    // PAN should be in format: ABCDE1234F
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(number.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingIndex !== null) {
      // Update existing entry
      const updated = [...savedEducations];
      updated[editingIndex] = { ...formData };
      setSavedEducations(updated);
    } else {
      // Add new entry
      setSavedEducations([...savedEducations, { ...formData }]);
    }
    
    resetForm();
  };

  const handleFinalSubmit = () => {
    // Validate Aadhaar
    if (!documentData.aadhaarNumber) {
      alert('Please enter Aadhaar number');
      return;
    }
    if (!validateAadhaar(documentData.aadhaarNumber)) {
      alert('Please enter a valid 12-digit Aadhaar number');
      return;
    }
    if (!documentData.aadhaarFile) {
      alert('Please upload Aadhaar proof');
      return;
    }

    // Validate PAN
    if (!documentData.panNumber) {
      alert('Please enter PAN number');
      return;
    }
    if (!validatePAN(documentData.panNumber)) {
      alert('Please enter a valid PAN number (e.g., ABCDE1234F)');
      return;
    }
    if (!documentData.panFile) {
      alert('Please upload PAN proof');
      return;
    }

    // Validate education entries
    if (savedEducations.length === 0) {
      alert('Please add at least one education entry');
      return;
    }

    console.log("Final submission:", {
      educations: savedEducations,
      documents: documentData
    });
    alert("Education details and documents submitted successfully!");
  };

  const handleEdit = (index) => {
    const education = savedEducations[index];
    setFormData(education);
    setSelectedEducationLevel(education.level);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = savedEducations.filter((_, i) => i !== index);
    setSavedEducations(updated);
  };

  const getLevelLabel = (level) => {
    return educationlist.find(e => e.value === level)?.label || level;
  };

  const formatAadhaar = (value) => {
    // Format Aadhaar as XXXX XXXX XXXX
    const numbers = value.replace(/\s/g, '');
    if (numbers.length <= 4) return numbers;
    if (numbers.length <= 8) return `${numbers.slice(0, 4)}${numbers.slice(4)}`;
    return `${numbers.slice(0, 4)}${numbers.slice(4, 8)}${numbers.slice(8, 12)}`;
  };

  const renderFormFields = () => {
    if (!selectedEducationLevel) return null;

    const isClass10 = selectedEducationLevel === "class10";
    const isClass12 = selectedEducationLevel === "class12";
    const isHigherEducation = ["highschool", "undergraduate", "postgraduate", "diploma", "phd"].includes(selectedEducationLevel);

    return (
      <>
        <Row>
          <Col md={6} sm={12} className="mb-3">
            <Form.Group controlId="institution">
              <Form.Label>
                {isClass10 || isClass12 ? "School Name" : "Institution Name"} <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter institution name"
                value={formData.institution}
                onChange={(e) => handleInputChange('institution', e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          {(isClass10 || isClass12) && (
            <Col md={6} sm={12} className="mb-3">
              <Form.Group controlId="board">
                <Form.Label>
                  Board <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., CBSE, ICSE, State Board"
                  value={formData.board}
                  onChange={(e) => handleInputChange('board', e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          )}

          {isClass12 && (
            <Col md={6} sm={12} className="mb-3">
              <Form.Group controlId="stream">
                <Form.Label>
                  Stream <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., Science, Commerce, Arts"
                  value={formData.stream}
                  onChange={(e) => handleInputChange('stream', e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          )}

          {isHigherEducation && (
            <>
              <Col md={6} sm={12} className="mb-3">
                <Form.Group controlId="courseName">
                  <Form.Label>
                    Course Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., B.Tech, BCA, MBA"
                    value={formData.courseName}
                    onChange={(e) => handleInputChange('courseName', e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6} sm={12} className="mb-3">
                <Form.Group controlId="branchName">
                  <Form.Label>
                    Branch Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., Computer Science"
                    value={formData.branchName}
                    onChange={(e) => handleInputChange('branchName', e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6} sm={12} className="mb-3">
                <Form.Group controlId="year">
                  <Form.Label>
                    Year <span className="text-danger">*</span>
                  </Form.Label>
                  <FormSelect
                    options={yearlist}
                    placeholder="Select Year"
                    value={formData.year}
                    onChange={(e) => handleInputChange('year', e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={6} sm={12} className="mb-3">
                <Form.Group controlId="semester">
                  <Form.Label>
                    Semester <span className="text-danger">*</span>
                  </Form.Label>
                  <FormSelect
                    options={semesterlist}
                    placeholder="Select Semester"
                    value={formData.semester}
                    onChange={(e) => handleInputChange('semester', e.target.value)}
                  />
                </Form.Group>
              </Col>
            </>
          )}

          <Col md={6} sm={12} className="mb-3">
            <Form.Group controlId="percentage">
              <Form.Label>
                Percentage/CGPA <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., 85% or 8.5 CGPA"
                value={formData.percentage}
                onChange={(e) => handleInputChange('percentage', e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6} sm={12} className="mb-3">
            <Form.Group controlId="yearOfPassing">
              <Form.Label>
                Year of Passing <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., 2024"
                value={formData.yearOfPassing}
                onChange={(e) => handleInputChange('yearOfPassing', e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col sm={12}>
            <Button variant="primary" type="submit">
              {editingIndex !== null ? "Update Education" : "Add Education"}
            </Button>
            {editingIndex !== null && (
              <Button variant="outline-secondary" className="ms-2" onClick={resetForm}>
                Cancel
              </Button>
            )}
          </Col>
        </Row>
      </>
    );
  };

  return (
    <ClientProfileLayout>
      <GeeksSEO title="Education Details | Stulancer" />

      <Card className="border-0">
        <Card.Header>
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Client Profile Details</h3>
            {/* <p className="mb-0">
              Complete your identity documents and educational information.
            </p> */}
          </div>
        </Card.Header>

        <Card.Body>
          {/* Identity Documents Section */}
          <div className="mb-5">
            <h4 className="mb-3">Identity Documents</h4>
            {/* <Alert variant="info">
              <small>
                <strong>Note:</strong> Supported file formats: PDF, JPG, JPEG, PNG (Max size: 5MB)
              </small>
            </Alert> */}

            {/* Aadhaar Details */}
            <Row className="mb-4">
              <Col xs={12}>
                <h5 className="mb-3">Aadhaar Details</h5>
              </Col>
              <Col md={6} sm={12} className="mb-3">
                <Form.Group controlId="aadhaarNumber">
                  <Form.Label>
                    Aadhaar Number <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="XXXX XXXX XXXX"
                    maxLength="14"
                    value={documentData.aadhaarNumber}
                    onChange={(e) => {
                      const formatted = formatAadhaar(e.target.value);
                      handleDocumentChange('aadhaarNumber', formatted);
                    }}
                  />
                  <Form.Text className="text-muted">
                    Enter your 12-digit Aadhaar number
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6} sm={12} className="mb-3">
                <Form.Group controlId="aadhaarFile">
                  <Form.Label>
                    Upload Aadhaar Proof <span className="text-danger">*</span>
                  </Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Control
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload('aadhaarFile', 'aadhaarFileName', e)}
                    />
                  </div>
                  {documentData.aadhaarFileName && (
                    <div className="mt-2">
                      <Badge bg="success">
                        <Upload size="12px" className="me-1" />
                        {documentData.aadhaarFileName}
                      </Badge>
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>

            {/* PAN Details */}
            <Row className="mb-4">
              <Col xs={12}>
                <h5 className="mb-3">PAN Card Details</h5>
              </Col>
              <Col md={6} sm={12} className="mb-3">
                <Form.Group controlId="panNumber">
                  <Form.Label>
                    PAN Number <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ABCDE1234F"
                    maxLength="10"
                    value={documentData.panNumber}
                    onChange={(e) => handleDocumentChange('panNumber', e.target.value.toUpperCase())}
                    style={{ textTransform: 'uppercase' }}
                  />
                  <Form.Text className="text-muted">
                    Enter your 10-character PAN number
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6} sm={12} className="mb-3">
                <Form.Group controlId="panFile">
                  <Form.Label>
                    Upload PAN Proof <span className="text-danger">*</span>
                  </Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Control
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload('panFile', 'panFileName', e)}
                    />
                  </div>
                  {documentData.panFileName && (
                    <div className="mt-2">
                      <Badge bg="success">
                        <Upload size="12px" className="me-1" />
                        {documentData.panFileName}
                      </Badge>
                    </div>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </div>

          <hr className="my-4" />

          {/* Education Details Section */}
          <div>
            <h4 className="mb-3">Educational Details</h4>
            {/* <p className="mb-4">Add your complete education information step by step.</p> */}
            
            <Form onSubmit={handleSubmit}>
              {/* Education Level Selection */}
              <Row className="mb-4">
                <Col md={6} sm={12}>
                  <Form.Group controlId="educationLevel">
                    <Form.Label>
                      Select Education Level <span className="text-danger">*</span>
                    </Form.Label>
                    <FormSelect
                      options={educationlist}
                      placeholder="Select education level to add"
                      value={selectedEducationLevel}
                      onChange={(e) => handleEducationLevelChange(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Dynamic Form Fields */}
              {renderFormFields()}
            </Form>

            {/* Saved Education Details Table */}
            {savedEducations.length > 0 && (
              <div className="mt-4">
                <h5 className="mb-3">Your Education History</h5>
                <div className="table-responsive">
                  <Table hover className="mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Level</th>
                        <th>Institution</th>
                        <th>Details</th>
                        <th>Percentage/CGPA</th>
                        <th>Year</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {savedEducations.map((edu, index) => (
                        <tr key={index}>
                          <td>
                            <Badge bg="primary">{getLevelLabel(edu.level)}</Badge>
                          </td>
                          <td>{edu.institution}</td>
                          <td>
                            {edu.level === "class10" && edu.board && `Board:${edu.board}`}
                            {edu.level === "class12" && `${edu.board} |${edu.stream}`}
                            {["highschool", "undergraduate", "postgraduate", "diploma", "phd"].includes(edu.level) && 
                              `${edu.courseName} -${edu.branchName}`
                            }
                            {["undergraduate", "postgraduate", "diploma", "phd"].includes(edu.level) && 
                              edu.year && edu.semester && 
                              <><br /><small className="text-muted">
                                {yearlist.find(y => y.value === edu.year)?.label} | {semesterlist.find(s => s.value === edu.semester)?.label}
                              </small></>
                            }
                          </td>
                          <td>{edu.percentage}</td>
                          <td>{edu.yearOfPassing}</td>
                          <td>
                            <Button
                              variant="outline-primary"
                              size="sm"
                              className="me-2"
                              onClick={() => handleEdit(index)}
                            >
                              <Edit2 size="14px" />
                            </Button>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => handleDelete(index)}
                            >
                              <Trash2 size="14px" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            )}
          </div>
        </Card.Body>

        <Card.Footer className="bg-white">
          <Row>
            <Col sm={12}>
              <Button 
                variant="primary"
                onClick={handleFinalSubmit}
              >
                Submit All Details
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </ClientProfileLayout>
  );
};

export default EducationForm;