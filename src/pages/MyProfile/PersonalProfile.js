import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormGroup, Input, Label, Modal, ModalBody } from "reactstrap";

const PersonalProfile = () => {
  const [profileModal, setProfileModal] = useState(false);
  const openProfileModal = () => setProfileModal(!profileModal);

  const [currentIndustry, setCurrentIndustry] = useState("");
  const [selectedShift, setSelectedShift] = useState("flexible");
  const [gender, setGender] = useState("");
  const [salary, setSalary] = useState("");
  const [dob, setDob] = useState("");

  const handleShiftChange = (e) => {
    setSelectedShift(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <div
      className="overview-box"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="title d-flex align-items-center justify-content-between">
        <h5>Personal Details</h5>
        <Link to="#applyNow" data-bs-toggle="modal" onClick={openProfileModal}>
          Add Details
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
          <Modal isOpen={profileModal} toggle={openProfileModal} centered>
            <ModalBody className="modal-body">
              <div className="text-center mb-4">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add Personal details
                </h5>
              </div>
              <div className="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  onClick={openProfileModal}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="p-1">
                <FormGroup>
                  <Label for="title">Current Industry</Label>
                  <Input
                    type="text"
                    name="industry"
                    id="industry"
                    placeholder="Enter Current Industry"
                    value={currentIndustry}
                    onChange={(e) => setCurrentIndustry(e.target.value)}
                  />
                </FormGroup>
              </div>
              <div className="p-1">
                <FormGroup>
                  <Label for="preferredShift">Preferred Shift</Label>
                  <div className="radio-group">
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type="radio"
                          name="shift"
                          value="day"
                          checked={selectedShift === "day"}
                          onChange={handleShiftChange}
                        />
                        Day
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type="radio"
                          name="shift"
                          value="night"
                          checked={selectedShift === "night"}
                          onChange={handleShiftChange}
                        />
                        Night
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type="radio"
                          name="shift"
                          value="flexible"
                          checked={selectedShift === "flexible"}
                          onChange={handleShiftChange}
                        />
                        Flexible
                      </Label>
                    </FormGroup>
                  </div>
                </FormGroup>
              </div>
              <div className="p-1">
                <FormGroup>
                  <Label for="preferredShift">Gender</Label>
                  <div className="radio-group">
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type="radio"
                          name="gender"
                          value="male"
                          checked={gender === "male"}
                          onChange={handleGenderChange}
                        />
                        Male
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type="radio"
                          name="gender"
                          value="female"
                          checked={gender === "male"}
                          onChange={handleGenderChange}
                        />
                        Female
                      </Label>
                    </FormGroup>
                  </div>
                </FormGroup>
              </div>
              <div className="p-1">
                <FormGroup>
                  <Label for="salary">Expected Salary</Label>
                  <Input
                    type="number"
                    name="salary"
                    id="salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  ></Input>
                </FormGroup>
              </div>

              <div className="p-1">
                <FormGroup>
                  <Label for="workFrom">Date of Birth</Label>
                  <Input
                    type="date"
                    name="dob"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </FormGroup>
              </div>

              {/* <div className="p-1">
                <FormGroup>
                  <Label for="details">Project Details</Label>
                  <Input
                    type="textarea"
                    name="details"
                    id="details"
                    placeholder="Enter project details"
                    //   value={details}
                    //   onChange={(e) => setDetails(e.target.value)}
                  />
                </FormGroup>
              </div> */}

              <div className="p-1">
                <button
                  className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100"
                  type="submit"
                  //  onClick={handleSubmit}
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

export default PersonalProfile;
