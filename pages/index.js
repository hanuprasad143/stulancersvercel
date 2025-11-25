// import node module libraries
import { Fragment, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";

// import widget/custom components
import {
  CourseSlider,
  FeaturesList,
  HeroHeaderDefault,
  //   InstructorSlider,
} from "widgets";

// import sub components
import ExploreMentors from "sub-components/landings/mentor/ExploreMentors";
// import widget/custom components
import { CTAMentor, HeroTypedMentors, LogosTopBrands } from "widgets";
// import required data files
// import BrandLogoList from "data/clientlogos/BrandLogoList";
import MentorListData from "data/marketing/mentor/MentorListData";
import FREETrialSession from "sub-components/landings/mentor/FREETrialSession";
import TopStudentsSection from "sub-components/landings/mentor/TopStudents";
import FooterCenter from "layouts/marketing/footers/FooterWithLinks";

// import sub components
import {
  CoursesFeatures4Columns,
  BrowseCategories,
  WorldClassInstructors,
  BecomeInstructor,
  CoursesTestimonialSection,
  ExploreSkillCourses,
  WhatCustomersSay,
} from "sub-components";

const Home = () => {
  useEffect(() => {
    document.body.className = "bg-light";
  });
  return (
    <Fragment>
      {/*  Page Content  */}
      <HeroHeaderDefault
        title="Creativity Meets Purpose"
        description="Connect with Student Stulancers for Creative, Technical, and Academic Solutions."
        buttonText1="Find Stulancer"
        buttonLink1="/marketing/courses/course-filter-page/"
        buttonText2="Post Work"
        buttonLink2="/authentication/sign-in/"
      />
      {/*  Features list  */}
      <FeaturesList />

      <HeroTypedMentors
        title="Learn a new skill, launch a project, land your dream career."
        typedBefore="1-on-1"
        typedArray={["Javascript", "Next Js", "React", "Marketing", "Branding"]}
        typedAfter="Stulancer"
        tags={[
          "Frontend",
          "Devops",
          "UI/UX designer",
          "Data Science",
          "Full Stack",
          "Backend",
          "Data Analyst",
        ]}
        marqueeData={MentorListData}
      />
      {/* Explore Mentors by Category */}

      {/* FREE trial session */}
      <FREETrialSession />
      <ExploreMentors />
      <TopStudentsSection />

      {/* <section className="pt-lg-12 pb-lg-3 pt-8 pb-6">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="mb-0 mx-2">Recommended to you</h2>
            </Col>
          </Row>
          <div className="position-relative">
            <CourseSlider recommended={true} />
          </div>
        </Container>
      </section> */}

      {/* <section className="pb-lg-3 pt-lg-3">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="mb-0 mx-2">Most Popular</h2>
            </Col>
          </Row>
          <div className="position-relative">
            <CourseSlider popular={true} />
          </div>
        </Container>
      </section> */}
      {/*  Explore skill courses */}
      <CoursesFeatures4Columns />
      <ExploreSkillCourses />

      {/* What our customers say */}
      <WhatCustomersSay />
      {/*   Footer with center alignment */}
      <FooterCenter goToTop />

      {/* <section className="pb-lg-8 pt-lg-3 py-6">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2 className="mb-0 mx-2">Trending</h2>
            </Col>
          </Row>
          <div className="position-relative">
            <CourseSlider trending={true} />
          </div>
        </Container>
      </section> */}
    </Fragment>
  );
};

export default Home;
