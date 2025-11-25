// import node module libraries
import { Card, Tab } from "react-bootstrap";

// import widget/custom components
import { GridListViewButton, GeeksSEO } from "widgets";

// import sub components
import StudentsGridCard from "../instructor/StudentsGridCard";
import StudentsListCard from "../instructor/StudentsGridCard";

// import profile layout wrapper
import ClientProfileLayout from "layouts/marketing/client/ClientProfileLayout";
// import data files
import ProjectsGridData from "data/dashboard/projects/ProjectsGridData";

const HireStulancer = () => {
  return (
    <ClientProfileLayout>
      {/* Geeks SEO settings  */}
      <GeeksSEO title="Client Hire Stulancers " />

      <Tab.Container defaultActiveKey="grid">
        <Card className="mb-4 pb-1">
          <Card.Header className="border-0 d-flex justify-content-between ">
            <div className="mb-3 mb-lg-0">
              <h3 className="mb-0">Stulancers</h3>
              <p className="mb-0">Meet Stulancers taking your Project.</p>
            </div>
            {/* <GridListViewButton keyGrid="grid" keyList="list" /> */}
          </Card.Header>
        </Card>
        <Tab.Content>
          <Tab.Pane eventKey="grid" className="pb-4">
            {/* students in grid view */}
            <Card className="bg-transparent shadow-none">
              <Card.Body className="px-0 py-0">
                <StudentsGridCard />
              </Card.Body>
            </Card>
            {/* end of students in grid view */}
          </Tab.Pane>
          <Tab.Pane eventKey="list" className="pb-4">
            {/* students in list view */}
            <Card className="">
              <Card.Body className="px-0 py-0">
                <StudentsListCard />
                {/* end of students in list view */}
              </Card.Body>
            </Card>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </ClientProfileLayout>
  );
};
export default HireStulancer;
