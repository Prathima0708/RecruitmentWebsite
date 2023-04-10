import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Button,
  Input,
  FormGroup,
  Label,
  Modal,
  ModalBody,
} from "reactstrap";

const Accomplishments = () => {
  const [projectModal, setProjectModal] = useState(false);
  const openProjectModal = () => setProjectModal(!projectModal);
  return (
    <div
      className="overview-box"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="title d-flex align-items-center justify-content-between">
        <h5>Accomplishments</h5>
      </div>
      
      <div className="desc">
        <ListGroup>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <h6>Online Profiles</h6>
            <button
              className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor "
              type="submit"
            >
              Add
            </button>
          </ListGroupItem>
          <ListGroupItem>
            <a
              href="https://www.linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </ListGroupItem>
          <ListGroupItem>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </ListGroupItem>
        </ListGroup>
      </div>

      <div className="desc">
        <ListGroup>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <h6>Work Samples</h6>
            <button
              className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor "
              type="submit"
            >
              Add
            </button>
          </ListGroupItem>
          <ListGroupItem>
            <p> Add link to your Projects (e.g. Github links etc.).</p>
          </ListGroupItem>
        </ListGroup>
      </div>

      <div className="desc">
        <ListGroup>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <h6>White Paper / Research Publication / Journal Entry</h6>
            <button
              className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor "
              type="submit"
            >
              Add
            </button>
          </ListGroupItem>
          <ListGroupItem>
            <p> Add links to your Online publications.</p>
          </ListGroupItem>
        </ListGroup>
      </div>

      <div className="desc">
        <ListGroup>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <h6>Presentation</h6>
            <button
              className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor "
              type="submit"
            >
              Add
            </button>
          </ListGroupItem>
          <ListGroupItem>
            <p>
              {" "}
              Add links to your Online presentations (e.g. Slideshare
              presentation links etc.).
            </p>
          </ListGroupItem>
        </ListGroup>
      </div>

      <div className="desc">
        <ListGroup>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <h6>Patent</h6>
            <button
              className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor "
              type="submit"
            >
              Add
            </button>
          </ListGroupItem>
          <ListGroupItem>
            <p> Add details of Patents you have filed.</p>
          </ListGroupItem>
        </ListGroup>
      </div>

      <div className="desc">
        <ListGroup>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <h6>Certification</h6>
            <button
              className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor "
              type="submit"
            >
              Add
            </button>
          </ListGroupItem>
          <ListGroupItem>
            <p>Add details of Certifications you have achieved/completed</p>
          </ListGroupItem>
        </ListGroup>
      </div>

      <div
        className="modal fade"
        id="applyNow"
        tabIndex="-1"
        aria-labelledby="applyNow"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={projectModal} toggle={openProjectModal} centered>
            <ModalBody className="modal-body">
              <div className="text-center mb-4">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add Education
                </h5>
              </div>
              <div className="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  onClick={openProjectModal}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="p-1">
                <FormGroup>
                  <Label for="title">Project Title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter project title"
                  />
                </FormGroup>
              </div>
              <div className="p-1">
                <FormGroup>
                  <Label for="tag">
                    Tag this project with your Employment/Education
                  </Label>
                  <Input
                    type="text"
                    name="tag"
                    id="tag"
                    placeholder="Enter employment/education tag"
                  />
                </FormGroup>
              </div>
              <div className="p-1">
                <FormGroup>
                  <Label for="client">Client Name</Label>
                  <Input
                    type="text"
                    name="client"
                    id="client"
                    placeholder="Enter client name"
                  />
                </FormGroup>
              </div>
              <div className="p-1">
                <FormGroup>
                  <Label for="status">Project Status</Label>
                  <Input type="select" name="status" id="status">
                    <option value="">Select project status</option>
                    <option value="Completed">Completed</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="On hold">On hold</option>
                  </Input>
                </FormGroup>
              </div>

              <div className="p-1">
                <FormGroup>
                  <Label for="workFrom">Worked From</Label>
                  <Input
                    type="date"
                    name="workFrom"
                    id="workFrom"
                    placeholder="Enter start date"
                  />
                </FormGroup>
              </div>

              <div className="p-1">
                <FormGroup>
                  <Label for="details">Project Details</Label>
                  <Input
                    type="textarea"
                    name="details"
                    id="details"
                    placeholder="Enter project details"
                  />
                </FormGroup>
              </div>

              <div className="p-1">
                <button
                  className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Accomplishments;
