// // import node module libraries
// import React from "react";
// import Link from "next/link";
// import { Row, Col, Card, Table, Dropdown, Image } from "react-bootstrap";
// import { useRouter } from "next/router";

// // import widget/custom components
// // import { StatRightBadge, ApexCharts, GeeksSEO } from "widgets";

// // import data files

// // import profile layout wrapper
// import ClientProfileLayout from "layouts/marketing/client/ClientProfileLayout";
// // import widget/custom components
// import { ACEditProfilePage, GeeksSEO } from "widgets";

// // import profile layout wrapper
// import ProfileLayoutWrap from "layouts/marketing/ProfileLayoutWrap";

// const Dashboard = () => {
//   const location = useRouter();
//   return (
//     <ClientProfileLayout pathpara={location.pathname}>
//       {/* Geeks SEO settings  */}
//       <GeeksSEO title="Client Profile Edit " />

//       <ACEditProfilePage />
//     </ClientProfileLayout>
//   );
// };
// export default Dashboard;



// import node module libraries
import { Card, Form, Row, Col, Button, Image } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

// import widget/custom components
import { FlatPickr, FormSelect } from "widgets";
// import profile layout wrapper
import ClientProfileLayout from "layouts/marketing/client/ClientProfileLayout";

const EditProfile = () => {
  const location = useRouter();

  const statelist = [
    { value: "1", label: "Gujarat" },
    { value: "2", label: "Rajasthan" },
    { value: "3", label: "Maharashtra" },
  ];
  const districtlist = [
    { value: "1", label: "Ahmedabad" },
    { value: "2", label: "Surat" },
    { value: "3", label: "Vadodara" },
    { value: "4", label: "Rajkot" },
    { value: "5", label: "Jaipur" },
    { value: "6", label: "Jodhpur" },
    { value: "7", label: "Mumbai" },
    { value: "8", label: "Pune" },
    { value: "9", label: "Nagpur" },
  ];
  const countrylist = [
    { value: "1", label: "India" },
    { value: "2", label: "UK" },
    { value: "3", label: "USA" },
  ];
  const educationlist = [
    { value: "1", label: "HighSchool" },
    { value: "2", label: "Undergraduate" },
    { value: "3", label: "Postgraduate" },
    { value: "4", label: "Diploma" },
    { value: "5", label: "PhD" },
  ];
  const genderlist = [
    { value: "1", label: "Male" },
    { value: "2", label: "Female" },
    { value: "3", label: "Prefer not to say" },
  ];
  const yearsemesterlist = [
    { value: "1-1", label: "1st Year, Semester 1" },
    { value: "1-2", label: "1st Year, Semester 2" },
    { value: "2-3", label: "2nd Year, Semester 3" },
    { value: "2-4", label: "2nd Year, Semester 4" },
    { value: "3-5", label: "3rd Year, Semester 5" },
    { value: "3-6", label: "3rd Year, Semester 6" },
    { value: "4-7", label: "4th Year, Semester 7" },
    { value: "4-8", label: "4th Year, Semester 8" },
  ];

  return (
       <ClientProfileLayout pathpara={location.pathname}>
      <Card className="border-0">
        <Card.Header>
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Profile Details</h3>
            <p className="mb-0">
              You have full control to manage your own account setting.
            </p>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="d-lg-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center mb-4 mb-lg-0">
              <Image
                src={
                  location.pathname.includes("student")
                    ? "/images/avatar/avatar-3.jpg"
                    : "/images/avatar/avatar-3.jpg"
                }
                id="img-uploaded"
                className="avatar-xl rounded-circle"
                alt=""
              />
              <div className="ms-3">
                <h4 className="mb-0"></h4>
                <p className="mb-0"></p>
              </div>
            </div>
            <div>
              <Button variant="outline-secondary" size="sm">
                Update
              </Button>{" "}
              <Button variant="outline-danger" size="sm">
                Delete
              </Button>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <h4 className="mb-0">Personal Details</h4>
            <p className="mb-4">Edit your personal information and address.</p>
            {/* Form */}
            <Form>
              <Row>
                {/* First name */}
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </Form.Group>
                </Col>

                {/* Last name */}
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </Form.Group>
                </Col>

                {/* Phone */}
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formGender">
                    <Form.Label>Gender</Form.Label>
                    <FormSelect options={genderlist} />
                  </Form.Group>
                </Col>

                {/* Birthday */}
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formBirthday">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control
                      as={FlatPickr}
                      value={""}
                      placeholder="Date of Birth"
                      required
                    />
                  </Form.Group>
                </Col>

                {/* Address Line 1 */}
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formAddress1">
                    <Form.Label>Address Line 1</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Address Line 1"
                      required
                    />
                  </Form.Group>
                </Col>

                {/* Address Line 2 */}
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formAddress2">
                    <Form.Label>Address Line 2</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Address Line 2"
                      required
                    />
                  </Form.Group>
                </Col>

                {/* District */}
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formDistrict">
                    <Form.Label>District</Form.Label>
                    <FormSelect options={districtlist} />
                  </Form.Group>
                </Col>

                {/* State */}
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formState">
                    <Form.Label>State</Form.Label>
                    <FormSelect options={statelist} />
                  </Form.Group>
                </Col>

                {/* Pincode */}
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formPincode">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Pincode"
                      maxLength="6"
                      pattern="[0-9]{6}"
                      required
                    />
                  </Form.Group>
                </Col>

                {/* Country */}
                <Col md={6} sm={12} className="mb-3">
                  <Form.Group className="mb-3" controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <FormSelect options={countrylist} />
                  </Form.Group>
                </Col>
             

                {/* Button */}
                <Col sm={12} md={12}>
                  <Button variant="primary" type="submit">
                    Update Profile
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Card.Body>
      </Card>
   </ClientProfileLayout>
  );
};

export default EditProfile;
