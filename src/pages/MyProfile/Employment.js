import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, FormGroup, Input, Label, Modal, ModalBody } from "reactstrap";

const Employment = () => {
  const [employmentModal, setEmploymentModal] = useState(false);
  const openEmploymentModal = () => setEmploymentModal(!employmentModal);

  const [isCurrentEmployment, setIsCurrentEmployment] = useState(false);
  const [employmentType, setEmploymentType] = useState("");
  const [totalExperience, setTotalExperience] = useState("");
  const [currentCompanyName, setCurrentCompanyName] = useState("");
  const [currentDesignation, setCurrentDesignation] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [currentSalary, setCurrentSalary] = useState("");
  const [skillsUsed, setSkillsUsed] = useState("");
  const [jobProfile, setJobProfile] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  return (
    <div
      className="overview-box"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="title d-flex align-items-center justify-content-between">
        <h5>Employment Details</h5>
        <Link
          to="#applyNow"
          data-bs-toggle="modal"
          onClick={openEmploymentModal}
        >
          Add Employment
        </Link>
      </div>
      <div className="desc">
        <div className="candidate-timeline">
          <div className="timeline-panel">
            <div className="timeline-head">
              <h3>Internatinal University</h3>
              <span className="timeline-year">2009-2012</span>
            </div>
            <div className="timeline-body">
              <h5>Bachlors in Fine Arts</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="timeline-panel">
            <div className="timeline-head">
              <h3>Internatinal University</h3>
              <span className="timeline-year">2012-2015</span>
            </div>
            <div className="timeline-body">
              <h5>Master In Fine Arts </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="timeline-panel">
            <div className="timeline-head">
              <h3>Diploma In Fine Arts</h3>
              <span className="timeline-year">2015-2018</span>
            </div>
            <div className="timeline-body">
              <h5>Imperieal Institute of Art Direction</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="applyNow"
        tabIndex="-1"
        aria-labelledby="applyNow"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={employmentModal} toggle={openEmploymentModal} centered>
            <ModalBody className="modal-body">
              <div className="text-center mb-4">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add Education
                </h5>
              </div>
              <div className="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  onClick={openEmploymentModal}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className=" p-3">
                <FormGroup>
                  <Label for="isCurrentEmployment">
                    Is Current Employment?
                  </Label>
                  <Input
                    type="select"
                    name="isCurrentEmployment"
                    id="isCurrentEmployment"
                    value={isCurrentEmployment}
                    onChange={(e) => setIsCurrentEmployment(e.target.value)}
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </Input>
                </FormGroup>
              </div>
              <div className="p-3">
                <FormGroup>
                  <Label for="employmentType">Employment Type</Label>
                  <Input
                    type="text"
                    name="employmentType"
                    id="employmentType"
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                  />
                </FormGroup>
              </div>
              <div className="p-3">
                <FormGroup>
                  <Label for="totalExperience">
                    Total Experience (Years and Months)
                  </Label>
                  <Input
                    type="text"
                    name="totalExperience"
                    id="totalExperience"
                    value={totalExperience}
                    onChange={(e) => setTotalExperience(e.target.value)}
                  />
                </FormGroup>
              </div>
              <div className="p-3">
                {isCurrentEmployment ? (
                  <>
                    <FormGroup>
                      <Label for="currentCompanyName">
                        Current Company Name
                      </Label>
                      <Input
                        type="text"
                        name="currentCompanyName"
                        id="currentCompanyName"
                        value={currentCompanyName}
                        onChange={(e) => setCurrentCompanyName(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="currentDesignation">
                        Current Designation
                      </Label>
                      <Input
                        type="text"
                        name="currentDesignation"
                        id="currentDesignation"
                        value={currentDesignation}
                        onChange={(e) => setCurrentDesignation(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="joiningDate">
                        Joining Date (Year and Month)
                      </Label>
                      <Input
                        type="text"
                        name="joiningDate"
                        id="joiningDate"
                        value={joiningDate}
                        onChange={(e) => setJoiningDate(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="currentSalary">Current Salary</Label>
                      <Input
                        type="text"
                        name="currentSalary"
                        id="currentSalary"
                        value={currentSalary}
                        onChange={(e) => setCurrentSalary(e.target.value)}
                      />
                    </FormGroup>
                  </>
                ) : (
                  <>
                    <FormGroup>
                      <Label for="jobProfile">Job Profile</Label>
                      <Input
                        type="text"
                        name="jobProfile"
                        id="jobProfile"
                        value={jobProfile}
                        onChange={(e) => setJobProfile(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="skillsUsed">Skills Used</Label>
                      <Input
                        type="text"
                        name="skillsUsed"
                        id="skillsUsed"
                        value={skillsUsed}
                        onChange={(e) => setSkillsUsed(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="noticePeriod">Notice Period</Label>
                      <Input
                        type="text"
                        name="noticePeriod"
                        id="noticePeriod"
                        value={noticePeriod}
                        onChange={(e) => setNoticePeriod(e.target.value)}
                      />
                    </FormGroup>
                  </>
                )}
              </div>

              <div className="p-3">
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

export default Employment;
