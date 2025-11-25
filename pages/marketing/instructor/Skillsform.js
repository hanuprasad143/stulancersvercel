// import node module libraries
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Card, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Plus, Trash2 } from "react-feather";

// import profile layout wrapper
import ProfileLayoutWrap from "layouts/marketing/ProfileLayoutWrap";

// import widget/custom components
import { GeeksSEO } from "widgets";

const SkillsForm = () => {
  const location = useRouter();
  
  const [primarySkill, setPrimarySkill] = useState("");
  const [primaryProofLink, setPrimaryProofLink] = useState("");
  const [primaryFile, setPrimaryFile] = useState(null);
  const [primaryPreview, setPrimaryPreview] = useState(null);
  
  const [additionalSkills, setAdditionalSkills] = useState([
    { id: 1, skill: "", proofLink: "", file: null, preview: null }
  ]);

  const handlePrimaryFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPrimaryFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrimaryPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalFileChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedSkills = [...additionalSkills];
        updatedSkills[index].file = file;
        updatedSkills[index].preview = reader.result;
        setAdditionalSkills(updatedSkills);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalSkillChange = (index, field, value) => {
    const updatedSkills = [...additionalSkills];
    updatedSkills[index][field] = value;
    setAdditionalSkills(updatedSkills);
  };

  const addAdditionalSkill = () => {
    setAdditionalSkills([
      ...additionalSkills,
      { id: Date.now(), skill: "", proofLink: "", file: null, preview: null }
    ]);
  };

  const removeAdditionalSkill = (index) => {
    if (additionalSkills.length > 1) {
      const updatedSkills = additionalSkills.filter((_, i) => i !== index);
      setAdditionalSkills(updatedSkills);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      primarySkill,
      primaryProofLink,
      primaryFile,
      additionalSkills
    });
  };

  return (
    <ProfileLayoutWrap pathpara={location.pathname}>
      {/* Geeks SEO settings  */}
      <GeeksSEO title="Add Skills | Stulancer" />

      <Card className="border-0">
        <Card.Header>
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Your Skills</h3>
            <p className="mb-0">Add your skill details and proofs.</p>
          </div>
        </Card.Header>

        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* Primary Skill Set */}
            <Row className="mb-4">
              <Col lg={3} md={4} sm={12}>
                <h5>Primary Skill Set</h5>
              </Col>
              <Col lg={9} md={8} sm={12}>
                <Form.Control
                  type="text"
                  placeholder="Enter your main skill (e.g., React Developer)"
                  className="mb-3"
                  value={primarySkill}
                  onChange={(e) => setPrimarySkill(e.target.value)}
                  required
                />
                {/* <Form.Control
                  type="url"
                  placeholder="Add proof link (e.g., Portfolio, GitHub)"
                  className="mb-3"
                  value={primaryProofLink}
                  onChange={(e) => setPrimaryProofLink(e.target.value)}
                /> */}
                
                <Form.Label className="fw-bold">Upload Skill Set Proof</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handlePrimaryFileChange}
                  className="mb-2"
                />
                <Form.Text className="text-muted d-block mb-3">
                  Upload certificates, or work samples (PDF/JPG/PNG, Max 5MB)
                </Form.Text>
                
                {primaryPreview && (
                  <div className="border rounded p-3 bg-light mb-2">
                    <h6 className="mb-2">Preview:</h6>
                    <Image
                      src={primaryPreview}
                      alt="Primary Skill Proof"
                      thumbnail
                      style={{ maxHeight: "200px", maxWidth: "100%" }}
                    />
                  </div>
                )}
                
                {/* <Form.Text className="text-muted">
                  Your strongest and most confident skill.
                </Form.Text> */}
              </Col>
            </Row>

            <hr className="my-4" />

            {/* Additional Skill Sets */}
            <Row className="mb-3">
              <Col lg={3} md={4} sm={12}>
                <h5>Additional Skill Sets</h5>
              </Col>
              <Col lg={9} md={8} sm={12}>
                <Form.Text className="text-muted">
                  Add supporting skills and their verification.
                </Form.Text>
              </Col>
            </Row>

            {additionalSkills.map((skillItem, index) => (
              <Row key={skillItem.id} className="mb-4">
                <Col lg={3} md={4} sm={12}>
                  {index === 0 && <div className="d-none d-lg-block"></div>}
                </Col>
                <Col lg={9} md={8} sm={12}>
                  <div className="border rounded p-3 mb-3 position-relative">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h6 className="mb-0">Skill #{index + 1}</h6>
                      {additionalSkills.length > 1 && (
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => removeAdditionalSkill(index)}
                        >
                          <Trash2 size="16px" />
                        </Button>
                      )}
                    </div>
                    
                    <Form.Control
                      type="text"
                      placeholder="Enter skill name"
                      className="mb-3"
                      value={skillItem.skill}
                      onChange={(e) => handleAdditionalSkillChange(index, 'skill', e.target.value)}
                    />
                    
                    {/* <Form.Control
                      type="url"
                      placeholder="Add proof link (optional)"
                      className="mb-3"
                      value={skillItem.proofLink}
                      onChange={(e) => handleAdditionalSkillChange(index, 'proofLink', e.target.value)}
                    /> */}
                    
                    <Form.Label className="fw-bold">Upload Skill Set Proof</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleAdditionalFileChange(index, e)}
                      className="mb-2"
                    />
                    <Form.Text className="text-muted d-block mb-3">
                      Upload certificates, or work samples (PDF/JPG/PNG, Max 5MB)
                    </Form.Text>
                    
                    {skillItem.preview && (
                      <div className="border rounded p-3 bg-light">
                        <h6 className="mb-2">Preview:</h6>
                        <Image
                          src={skillItem.preview}
                          alt={`Skill${index + 1} Proof`}
                          thumbnail
                          style={{ maxHeight: "200px", maxWidth: "100%" }}
                        />
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
            ))}

            {/* Add More Button */}
            <Row className="mb-4">
              <Col lg={{ span: 9, offset: 3 }} md={{ span: 8, offset: 4 }} sm={12}>
                <Button
                  variant="outline-primary"
                  onClick={addAdditionalSkill}
                  className="w-30"
                >
                  <Plus size="16px" className="me-2" />
                  Add Another Skill
                </Button>
              </Col>
            </Row>

            {/* Submit Button */}
            <Row>
              <Col lg={{ span: 6, offset: 3 }} sm={12}>
                <Button variant="primary" type="submit" className="w-100">
                  Save Skills
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </ProfileLayoutWrap>
  );
};

export default SkillsForm;