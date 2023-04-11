import axios from "axios";
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { subURL } from "../../utils/URL's";
const softwareNames = [
  "Adobe Photoshop",
  "Microsoft Word",
  "Visual Studio Code",
  "Eclipse",
  // add more software names here
];

const currentYear = 30;
const yearOptions = [];

for (let year = 0; year <= currentYear; year++) {
  yearOptions.push(year.toString());
}

const currentYear1 = new Date().getFullYear();
const yearOptions1 = [];

for (let year = 1950; year <= currentYear1; year++) {
  yearOptions1.push(year.toString());
}
const monthOptions = [
  "",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
];
const Skills = () => {
  const [skillsModal, setSkillsModal] = useState(false);
  const openSkillsModal = () => setSkillsModal(!skillsModal);

  const [softwareName, setSoftwareName] = useState("");
  const [softwareVersion, setSoftwareVersion] = useState("");
  const [lastUsedYear, setLastUsedYear] = useState("");
  const [experienceYear, setExperienceYear] = useState("");
  const [experienceMonth, setExperienceMonth] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSoftwareNameChange = (event, { newValue }) => {
    setSoftwareName(newValue);
  };

  const handleSoftwareVersion = (e) => {
    setSoftwareVersion(e.target.value);
  };
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : softwareNames.filter(
          (name) => name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const inputProps = {
    placeholder: "Enter software name",
    value: softwareName,
    onChange: handleSoftwareNameChange,
  };

  async function handleSubmit(event) {
    event.preventDefault();

    async function storeData() {
      const formData = {
        user_account_id: 1,
        skill_name: softwareName,
        software_version: softwareVersion,
        last_used: lastUsedYear,
        experience_year: experienceYear,
        experience_month: experienceMonth,
      };
      console.log("formdata before post req", formData);
      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(`${subURL}/userskills/`, formData, {
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

    setSoftwareName("");
    setSoftwareVersion("");
    setLastUsedYear("");
    setExperienceYear("");
    setExperienceMonth("");
  }

  return (
    <div
      className="overview-box"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="title d-flex align-items-center justify-content-between">
        <h5>IT Skills</h5>
        <Link to="#applyNow" data-bs-toggle="modal" onClick={openSkillsModal}>
          Add Skills <i className="mdi mdi-chevron-double-right"></i>
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
          <Modal isOpen={skillsModal} toggle={openSkillsModal} centered>
            <ModalBody className="modal-body">
              <div className="text-center mb-4">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add Skills
                </h5>
              </div>
              <div className="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  onClick={openSkillsModal}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className=" p-3">
                <FormGroup>
                  <Label for="softwareName">Software Name</Label>
                  <Autosuggest
                    suggestions={getSuggestions(softwareName)}
                    onSuggestionsClearRequested={() => {}}
                    onSuggestionsFetchRequested={() => {}}
                    getSuggestionValue={(suggestion) => suggestion}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                  />
                </FormGroup>
              </div>
              {/* <div className="p-3 d-flex">
                
              </div> */}
              <Row className=" p-3">
                <Col>
                  <FormGroup>
                    <Label for="softwareversion">Software Version</Label>
                    <Input
                      type="text"
                      name="softwareversion"
                      id="softwareversion"
                      value={softwareVersion}
                      onChange={(e) => setSoftwareVersion(e.target.value)}
                    ></Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="ml-3 pl-3">
                    <Label for="lastUsed">Last Used</Label>
                    <Input
                      type="select"
                      name="lastUsed"
                      id="lastUsed"
                      value={lastUsedYear}
                      onChange={(e) => setLastUsedYear(e.target.value)}
                    >
                      <option value="" disabled selected hidden>
                        Select year
                      </option>
                      {yearOptions1.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row className=" p-3">
                <Col>
                  <Label for="experienceYear">Experience(in years)</Label>
                  <Input
                    type="select"
                    name="experienceYear"
                    id="experienceYear"
                    className="mr-2"
                    value={experienceYear}
                    onChange={(e) => setExperienceYear(e.target.value)}
                  >
                    <option value="" disabled selected hidden>
                      Years
                    </option>
                    {yearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Input>
                </Col>
                <Col>
                  <Label for="experienceMonth">Experience(in Months)</Label>
                  <Input
                    type="select"
                    name="experienceMonth"
                    id="experienceMonth"
                    value={experienceMonth}
                    onChange={(e) => setExperienceMonth(e.target.value)}
                  >
                    <option value="" disabled selected hidden>
                      Months
                    </option>
                    {monthOptions.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </Input>
                </Col>
              </Row>

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

export default Skills;
