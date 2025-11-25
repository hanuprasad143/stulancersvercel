import React, { Fragment, useState } from "react";
import Link from "next/link";
import {
  Card,
  Dropdown,
  Button,
  Badge,
  Modal,
  Form,
  Table,
} from "react-bootstrap";
import { AvatarGroup } from "components/bootstrap/Avatar";
import { numberWithCommas } from "helper/utils";

const ProjectCard = ({ item }) => {
  // States for Group Bid Modal
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [groupBidPrice, setGroupBidPrice] = useState("");
  const [groupBidDuration, setGroupBidDuration] = useState("");

  // States for Bid Modal
  const [showBidModal, setShowBidModal] = useState(false);
  const [bidPrice, setBidPrice] = useState("");
  const [bidDuration, setBidDuration] = useState("");
  const [tasks, setTasks] = useState([]); // tasks inside Bid modal
  const [taskNameInput, setTaskNameInput] = useState("");
  const [taskPercentageInput, setTaskPercentageInput] = useState("");

  // States for Add Task modal inside Group Bid (for each group member)
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedStulancer, setSelectedStulancer] = useState(null);
  const [taskName, setTaskName] = useState("");
  const [taskPercentage, setTaskPercentage] = useState("");

  // State to save tasks per group member (keyed by member id)
  const [savedTasks, setSavedTasks] = useState({});

  // Success modal
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Delete confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // Task to delete info: { type: 'bid' | 'group', memberId?, taskId }
  const [taskToDelete, setTaskToDelete] = useState(null);

  const groups = [
    { id: "group1", name: "Alpha Team" },
    { id: "group2", name: "Beta Team" },
  ];

  const groupMembers = {
    group1: [
      { id: 1, name: "Aditi", skill: "Frontend" },
      { id: 2, name: "Raj", skill: "Backend" },
    ],
    group2: [
      { id: 3, name: "Sara", skill: "UI/UX" },
      { id: 4, name: "Arjun", skill: "DevOps" },
    ],
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </Link>
  ));
  CustomToggle.displayName = "CustomToggle";

  const ActionMenu = () => (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle}>
        <i className="fe fe-more-vertical text-muted"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu align="end">{/* menu items */}</Dropdown.Menu>
    </Dropdown>
  );

  const CardHeading = (item) =>
    item.icon ? (
      <div className="d-flex align-items-center">
        <div className="icon-shape icon-lg rounded-3 border p-4">
          <i className={`fe fe-${item.icon} fs-3 text-muted`}></i>
        </div>
        <div className="ms-3">
          <h4 className="mb-0">
            <Link href="#" className="text-inherit">
              {item.title}
            </Link>
          </h4>
          <span className="text-muted fs-6">{item.category}</span>
        </div>
      </div>
    ) : (
      <div>
        <h4 className="mb-0">
          <Link href="#" className="text-inherit">
            {item.title}
          </Link>
        </h4>
        <span className="text-muted fs-6">{item.category}</span>
      </div>
    );

  // --- Handlers for Bid Modal tasks ---

  // Add task to Bid modal tasks list
  const handleAddTask = () => {
    if (!taskNameInput || !taskPercentageInput) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        taskName: taskNameInput,
        taskPercentage: taskPercentageInput,
      },
    ]);
    setTaskNameInput("");
    setTaskPercentageInput("");
  };

  // Submit Bid modal
  const handleSubmitBidModal = () => {
    

  if (bidPrice.trim) {
    alert("Please enter bid price .");
    return;
  }

  if (bidDuration.trim) {
    alert("Please enter  bid duration.");
    return;
  }

  // Optional: check if at least one member has tasks
 
    setShowBidModal(false);
    setShowSuccessModal(true);
    // Clear form (optional)
    setBidPrice("");
    setBidDuration("");
    setTasks([]);
  };

  // --- Handlers for Group Bid ---

  // Open Add Task modal inside Group Bid for specific member
  const handleOpenTaskModal = (member) => {
    setSelectedStulancer(member);
    setTaskName("");
    setTaskPercentage("");
    setShowTaskModal(true);
  };

  // Save task for selected member in Group Bid modal
  const handleSaveTask = () => {
    if (!taskName || !taskPercentage) return;

    setSavedTasks((prev) => {
      const memberTasks = prev[selectedStulancer.id] || [];
      return {
        ...prev,
        [selectedStulancer.id]: [
          ...memberTasks,
          {
            id: Date.now(),
            taskName,
            taskPercentage,
          },
        ],
      };
    });
    setShowTaskModal(false);
    setTaskName("");
    setTaskPercentage("");
  };

  // Submit Group Bid modal


const handleSubmitGroupBid = () => {
  if (!selectedGroup) {
    alert("Please select a group.");
    return;
  }

  if (!groupBidPrice || !groupBidDuration) {
    alert("Please enter group bid price and duration.");
    return;
  }

  // Optional: check if at least one member has tasks
  const hasTasks = Object.values(savedTasks).some(tasks => tasks.length > 0);
  if (!hasTasks) {
    alert("Please assign at least one task to any member before submitting.");
    return;
  }

  // All good
  setShowGroupModal(false);
  setShowSuccessModal(true);

  // Reset form
  setSelectedGroup("");
  setGroupBidPrice("");
  setGroupBidDuration("");
  setSavedTasks({});
};




  // const handleSubmitGroupBid = () => {
  //   setShowGroupModal(false);
  //   setShowSuccessModal(true);
  //   setSelectedGroup("");
  //   setGroupBidPrice("");
  //   setGroupBidDuration("");
  //   setSavedTasks({});
  // };

  // Open delete confirmation modal
  const confirmDeleteTask = ({ type, taskId, memberId = null }) => {
    setTaskToDelete({ type, taskId, memberId });
    setShowDeleteModal(true);
  };

  // Actually delete task after confirmation
  const handleDeleteTask = () => {
    if (!taskToDelete) return;

    if (taskToDelete.type === "bid") {
      setTasks(tasks.filter((t) => t.id !== taskToDelete.taskId));
    } else if (taskToDelete.type === "group") {
      setSavedTasks((prev) => {
        const memberTasks = prev[taskToDelete.memberId] || [];
        return {
          ...prev,
          [taskToDelete.memberId]: memberTasks.filter(
            (t) => t.id !== taskToDelete.taskId
          ),
        };
      });
    }

    setShowDeleteModal(false);
    setTaskToDelete(null);
  };

  return (
    <>
      <Card className="h-100">
        {item.coverimage && (
          <Fragment>
            <Card.Img
              variant="top"
              src={item.coverimage}
              className="img-fluid rounded-top"
            />
            <div className="d-flex position-absolute end-0 pe-3 pt-3">
              <ActionMenu />
            </div>
          </Fragment>
        )}
        <Card.Body>
          {item.coverimage == null ? (
            <div className="d-flex align-items-center justify-content-between">
              {CardHeading(item)}
              <div className="d-flex align-items-center">
                <ActionMenu />
              </div>
            </div>
          ) : (
            CardHeading(item)
          )}

          <div className="mt-3 mb-4">
            <p className="mb-0">{item.projectbrief}</p>
          </div>

                    {/* Badge */}

           <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
  <AvatarGroup>{/* Avatar logic here */}</AvatarGroup>
</div>

{/* Badge + Buttons together */}
<div className="d-flex flex-wrap align-items-center gap-2 mt-2">
  {item.groupgig  && (
    <Badge bg="success" pill>
      Group Gig
    </Badge>
  )}
  <Button
    variant="primary"
    size="sm"
    onClick={() => setShowBidModal(true)}
  >
    Bid
  </Button>
  {item.groupgig   && (
    <Button
      variant="outline-secondary"
      size="sm"
      onClick={() => setShowGroupModal(true)}
    >
      Group Bid
    </Button>
  )}
</div>

        </Card.Body>

        <Card.Footer className="p-0">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="w-100 w-md-50 py-3 px-4">
              <h6 className="mb-0 text-muted">Due Date:</h6>
              <p className="text-dark fs-6 fw-semi-bold mb-0">{item.duedate}</p>
            </div>
            <div className="border-start w-100 w-md-50 py-3 px-4">
              <h6 className="mb-0 text-muted">Budget:</h6>
              <p className="text-dark fs-6 fw-semi-bold mb-0">
                ${numberWithCommas(item.budget)}
              </p>
            </div>
          </div>
        </Card.Footer>
      </Card>

      {/* ---------- Bid Modal ---------- */}
      <Modal
        show={showBidModal}
        onHide={() => setShowBidModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Bid Price</Form.Label>
            <Form.Control
              type="number"
              value={bidPrice}
              onChange={(e) => setBidPrice(e.target.value)}
              placeholder="Enter bid price"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bid Duration (in days)</Form.Label>
            <Form.Control
              type="number"
              value={bidDuration}
              onChange={(e) => setBidDuration(e.target.value)}
              placeholder="Enter duration"
            />
          </Form.Group>

          {/* Add Task Inputs */}
          <div className="d-flex align-items-center gap-2 mb-3">
            <Form.Control
              type="text"
              placeholder="Task Name"
              value={taskNameInput}
              onChange={(e) => setTaskNameInput(e.target.value)}
            />
            <Form.Control
              type="number"
              placeholder="Percentage"
              value={taskPercentageInput}
              onChange={(e) => setTaskPercentageInput(e.target.value)}
            />
            <Button variant="outline-primary" onClick={handleAddTask}>
              Add Task
            </Button>
          </div>

          {/* Tasks Table */}
          {tasks.length > 0 && (
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Task Name</th>
                  <th>Percentage</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr key={task.id}>
                    <td>{index + 1}</td>
                    <td>{task.taskName}</td>
                    <td>{task.taskPercentage}</td>
                    <td>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() =>
                          confirmDeleteTask({ type: "bid", taskId: task.id })
                        }
                      >
                        ✖
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowBidModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitBidModal}>
            Final Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ---------- Group Bid Modal ---------- */}
      <Modal
        show={showGroupModal}
        onHide={() => setShowGroupModal(false)}
        size="lg"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title>Group Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Select Group</Form.Label>
            <Form.Select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
            >
              <option value="">-- Select Group --</option>
              {groups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bid Price</Form.Label>
            <Form.Control
              type="number"
              value={groupBidPrice}
              onChange={(e) => setGroupBidPrice(e.target.value)}
              placeholder="Enter bid price"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bid Duration (in days)</Form.Label>
            <Form.Control
              type="number"
              value={groupBidDuration}
              onChange={(e) => setGroupBidDuration(e.target.value)}
              placeholder="Enter duration"
            />
          </Form.Group>

          {selectedGroup && (
            <>
              <Table bordered hover responsive className="mt-4">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Skill</th>
                    <th>Share (%)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {groupMembers[selectedGroup].map((member, index) => (
                    <tr key={member.id + index}>
                      <td>{index + 1}</td>
                      <td>{member.name}</td>
                      <td>{member.skill}</td>
                      <td>
                        <Form.Control type="number" placeholder="%" />
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="outline-primary"
                          onClick={() => handleOpenTaskModal(member)}
                        >
                          Add Tasks
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* Individual Tasks Table */}
              <h5 className="mt-4">Individual Tasks</h5>
              <Table bordered hover responsive>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Task Name</th>
                    <th>Percentage</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {groupMembers[selectedGroup].map((member) => {
                    const memberTasks = savedTasks[member.id] || [];
                    return memberTasks.map((task, index) => (
                      <tr key={`${member.id}-${task.id}`}>
                        <td>{index + 1}</td>
                        <td>{member.name}</td>
                        <td>{task.taskName}</td>
                        <td>{task.taskPercentage}</td>
                        <td>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() =>
                              confirmDeleteTask({
                                type: "group",
                                taskId: task.id,
                                memberId: member.id,
                              })
                            }
                          >
                            ✖
                          </Button>
                        </td>
                      </tr>
                    ));
                  })}
                </tbody>
              </Table>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowGroupModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitGroupBid}>
            Submit Bid
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ---------- Add Task Modal (for Group Bid members) ---------- */}
      <Modal
        show={showTaskModal}
        onHide={() => setShowTaskModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Task for {selectedStulancer?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Enter task name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Percentage</Form.Label>
            <Form.Control
              type="number"
              value={taskPercentage}
              onChange={(e) => setTaskPercentage(e.target.value)}
              placeholder="Enter %"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTaskModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveTask}>
            Save Task
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ---------- Success Modal ---------- */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your bid has been successfully submitted!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowSuccessModal(false)}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ---------- Delete Confirmation Modal ---------- */}
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteTask}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;
