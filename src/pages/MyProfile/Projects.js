import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Label, Modal, ModalBody } from "reactstrap";
import { subURL } from "../../utils/URL's";

const Projects = () => {
  const [projectModal, setProjectModal] = useState(false);
  const openProjectModal = () => setProjectModal(!projectModal);

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState("");
  const [workFrom, setWorkFrom] = useState("");
  const [details, setDetails] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();

    async function storeData() {
      const formData = {
        user_account_id: 1,
        tag_this_project_with_your_Education: tag,
        client_name: client,
        project_staus: status,
        worked_from_year: workFrom,
        project_details: details,
      };
      console.log("formdata before post req", formData);
      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(`${subURL}/userprojects`, formData, {
          headers: headers,
        });
        console.log(res.data);

        if (res.status === 201) {
          console.log("success");
          // setSuccessMessage("Data saved successfully!");
          // setShowModal(true);
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
      }
    }

    storeData();
  }

  return (
    <div
      className="overview-box"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="title d-flex align-items-center justify-content-between">
        <h5>Project Details</h5>
        <Link to="#applyNow" data-bs-toggle="modal" onClick={openProjectModal}>
          Add Project
        </Link>
      </div>
      <div className="desc">
        <p>
          Dolor sed viverra ipsum nunc. In ornare quam viverra orci. Id diam
          maecenas ultricies mi eget mauris pharetra et ultrices. Non diam
          phasellus vestibulum lorem sed risus ultricies. Lacinia at quis risus
          sed vulputate odio ut enim blandit. Suspendisse ultrices gravida
          dictum fusce ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
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
                  Add Project
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
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
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                  />
                </FormGroup>
              </div>
              <div className="p-1">
                <FormGroup>
                  <Label for="status">Project Status</Label>
                  <Input
                    type="select"
                    name="status"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
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
                    value={workFrom}
                    onChange={(e) => setWorkFrom(e.target.value)}
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
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </FormGroup>
              </div>

              <div className="p-1">
                <button
                  className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100"
                  type="submit"
                  onClick={handleSubmit}
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

export default Projects;
