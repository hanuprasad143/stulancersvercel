// import node module libraries
import { Card, ListGroup } from "react-bootstrap";

const ProjectDescription = () => {
  return (
    <Card>
      <Card.Body>
        <div className="mb-4">
          <h4 className="mb-2">Project Description</h4>
          <p>
            Give a high-level overview of the product / project you're working
            on, its goals, etc..Elaborate on the target audience of your
            project/product, link out to additional resources
          </p>
        </div>
        <div className="mb-4">
          <h4 className="mb-2">Target Audience</h4>
          <p>
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </p>

          {/* list  */}
          <ListGroup bsPrefix="list-unstyled" as="ul">
            <ListGroup.Item as="li" bsPrefix=" ">
              -No style or formatting is more effective than practical
              functionality.
            </ListGroup.Item>
            <ListGroup.Item as="li" bsPrefix=" ">
              - That was easy to do / It's easily done..
            </ListGroup.Item>
            <ListGroup.Item as="li" bsPrefix=" ">
              - Entrance comes first in the mouth of the throat’s structure.
            </ListGroup.Item>
            <ListGroup.Item as="li" bsPrefix=" ">
              - Supportive positioning and structure are carefully arranged.
            </ListGroup.Item>
            <ListGroup.Item as="li" bsPrefix=" ">
              - The UI layout is both cohesive and effective.
            </ListGroup.Item>
          </ListGroup>

          <p>
            Learning tools are thoughtfully designed to make studying easier and
            more productive. Key features are fast, responsive, and focused on
            helping students reach their goals. The platform adapts to different
            learning styles, ensuring that every student feels supported and
            empowered..
          </p>
        </div>
        <div>
          <h4 className="mb-2">Competition</h4>
          <p className="mb-0">
            List your competitors here and recommendations how to position your
            product against the competition & handle objections
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};
export default ProjectDescription;
