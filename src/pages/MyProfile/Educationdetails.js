import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { subURL } from "../../utils/URL's";
const currentYear = new Date().getFullYear();
const yearOptions = [];

for (let year = 1950; year <= currentYear; year++) {
  yearOptions.push(year.toString());
}

const Educationdetails = () => {
  const [educationModal, setEducationModal] = useState(false);
  const openEducationModal = () => setEducationModal(!educationModal);

  const [education, setEducation] = useState("");
  const [university, setUniversity] = useState("");
  const [course, setCourse] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [courseType, setCourseType] = useState("");

  const [gradingSystem, setGradingSystem] = useState("");
  const [marks, setMarks] = useState("");

  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    async function storeData() {
      const formData = {
        user_account_id: 1,
        education: education,
        univesity: university,
        course: course,
        speclalization: specialization,
        course_type: courseType,
        course_duration: startYear,
        completion_date: endYear,
        grading_system: gradingSystem,
        marks: marks,
      };
      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(`${subURL}/usereducation/`, formData, {
          headers: headers,
        });
        console.log(res.data);

        if (res.status === 201) {
          console.log("success");
          setSuccessMessage("Data saved successfully!");
          setShowModal(true);
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
      }
    }

    storeData();

    setEducation("");
    setUniversity("");
    setCourse("");
    setSpecialization("");
    setCourseType("");
    setStartYear("");
    setEndYear("");
    setGradingSystem("");
    setMarks("");
  }
  return (
    <div
      className="overview-box"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="title d-flex align-items-center justify-content-between">
        <h5>Education Details</h5>
        <Link
          to="#applyNow"
          data-bs-toggle="modal"
          onClick={openEducationModal}
        >
          Add Education <i className="mdi mdi-chevron-double-right"></i>
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
          <Modal isOpen={educationModal} toggle={openEducationModal} centered>
            <ModalBody className="modal-body">
              <div className="text-center mb-4">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add Education
                </h5>
              </div>
              <div className="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  onClick={openEducationModal}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className=" p-3">
                <Label for="education">Education</Label>
                <Input
                  type="text"
                  name="education"
                  id="education"
                  placeholder="Education"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
              </div>
              <div className="p-3">
                <Label for="university">University</Label>
                <Input
                  type="text"
                  name="university"
                  id="university"
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                />
              </div>
              <div className="p-3">
                <Label for="course">Course</Label>
                <Input
                  type="text"
                  name="course"
                  id="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>
              <div className="p-3">
                <Label for="specialization">Specialization</Label>
                <Input
                  type="text"
                  name="specialization"
                  id="specialization"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                />
              </div>

              <div className="p-3">
                <Label for="courseType">Course Type</Label>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type="radio"
                      name="courseType"
                      value="Full Time"
                      checked={courseType === "Full Time"}
                      onChange={(e) => setCourseType(e.target.value)}
                    />{" "}
                    Full Time
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type="radio"
                      name="courseType"
                      value="Part Time"
                      checked={courseType === "Part Time"}
                      onChange={(e) => setCourseType(e.target.value)}
                    />{" "}
                    Part Time
                  </Label>
                </FormGroup>
              </div>

              <div className="p-3">
                <Label for="startYear">Starting Year</Label>
                <Input
                  type="select"
                  name="startYear"
                  id="startYear"
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Starting Year
                  </option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Input>
              </div>

              <div className="p-3">
                <Label for="endYear">Ending Year</Label>
                <Input
                  type="select"
                  name="endYear"
                  id="endYear"
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Ending Year
                  </option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Input>
              </div>

              <div className="p-3">
                <Label for="gradingSystem">Grading System</Label>
                <Input
                  type="text"
                  name="gradingSystem"
                  id="gradingSystem"
                  value={gradingSystem}
                  onChange={(e) => setGradingSystem(e.target.value)}
                />
              </div>

              <div className="p-3">
                <Label for="marks">Marks</Label>
                <Input
                  type="text"
                  name="marks"
                  id="marks"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                />
              </div>
              <div className="p-3">
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
      <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
        <ModalHeader toggle={() => setShowModal(false)}>Success</ModalHeader>
        <ModalBody>{successMessage}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setShowModal(false)}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Educationdetails;
