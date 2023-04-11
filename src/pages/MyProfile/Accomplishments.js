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
  Form,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import CustomModal from "./CustomModal";
import axios from "axios";
import { subURL } from "../../utils/URL's";

const months = [
  { value: "01", label: "Jan" },
  { value: "02", label: "Feb" },
  { value: "03", label: "Mar" },
  { value: "04", label: "Apr" },
  { value: "05", label: "May" },
  { value: "06", label: "Jun" },
  { value: "07", label: "Jul" },
  { value: "08", label: "Aug" },
  { value: "09", label: "Sep" },
  { value: "10", label: "Oct" },
  { value: "11", label: "Nov" },
  { value: "12", label: "Dec" },
];
const currentYear = new Date().getFullYear();
const yearOptions = [];

for (let year = 1950; year <= currentYear; year++) {
  yearOptions.push(year.toString());
}

const Accomplishments = () => {
  const [onlineProfilesModal, setOnlineProfileModal] = useState(false);
  const [workSampleModal, setWorkSampleModal] = useState(false);
  const [certificationModal, setCertificationModal] = useState(false);

  const [profile, setProfile] = useState({
    socialProfile: "",
    url: "",
    description: "",
  });

  const [workTitle, setWorkTitle] = useState("");
  const [url, setUrl] = useState("");
  const [durationFromMonth, setDurationFromMonth] = useState("");
  const [durationFromYear, setDurationFromYear] = useState("");
  const [durationToMonth, setDurationToMonth] = useState("");
  const [durationToYear, setDurationToYear] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  const [description, setDescription] = useState("");

  const [certificationName, setCertificationName] = useState("");
  const [certificationURL, setCertificationURL] = useState("");
  const [certificationID, setCertificationID] = useState("");
  const [certificationValidityFromYear, setCertificationValidityFromYear] =
    useState("");
  const [certificationValidityFromMonth, setCertificationValidityFromMonth] =
    useState("");
  const [certificationValidityToYear, setCertificationValidityToYear] =
    useState("");
  const [certificationValidityToMonth, setCertificationValidityToMonth] =
    useState("");
  const [certificationExpiry, setCertificationExpiry] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const toggleOnlineProfileModal = () => {
    setOnlineProfileModal(!onlineProfilesModal);
  };
  const toggleWorkSampleModal = () => {
    setWorkSampleModal(!workSampleModal);
  };
  const toggleCertificationModal = () => {
    setCertificationModal(!certificationModal);
  };

  const handleSaveOnlineProfile = (e) => {
    e.preventDefault();

    async function storeData() {
      const formData = {
        social_profile: profile.socialProfile,
        url: profile.url,
        description: profile.description,
        user_account_id: 2,
      };
      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(`${subURL}/usersocialprofile`, formData, {
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

    setProfile("");

    toggleOnlineProfileModal();
  };

  const handleSaveWorkSample = (e) => {
    e.preventDefault();
    async function storeData() {
      const formData = {
        user_account_id: 1,
        work_title: workTitle,
        url: url,
        duration_from_year: durationFromYear,
        duration_from_month: durationFromMonth,
        duration_to_year: durationToYear,
        duration_to_month: durationToMonth,
        working_staus: currentlyWorking,
        description: description,
      };
      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(`${subURL}/userworkstatus`, formData, {
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

    setWorkTitle("");
    setUrl("");
    setDurationFromYear("");
    setDurationFromMonth("");
    setDurationToYear("");
    setDurationToMonth("");
    setCurrentlyWorking("");
    setDescription("");
    toggleWorkSampleModal();
  };

  const handleSaveCertification = (e) => {
    e.preventDefault();
    async function storeData() {
      const formData = {
        user_account_id: 1,
        certification_name: certificationName,
        certification_completion_id: certificationID,
        certification_url: certificationURL,
        certification_validity_from_year: certificationValidityFromYear,
        certification_validity_from_month: certificationValidityFromMonth,
        certification_validity_to_year: certificationValidityToYear,
        certification_validity_to_month: certificationValidityToMonth,
        certification_will_expire: certificationExpiry,
      };
      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(`${subURL}/usercertification`, formData, {
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

    setCertificationName("");
    setCertificationID("");
    setCertificationURL("");
    setCertificationValidityFromYear("");
    setCertificationValidityFromMonth("");
    setCertificationValidityToYear("");
    setCertificationValidityToMonth("");

    toggleCertificationModal();
  };

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

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
              onClick={toggleOnlineProfileModal}
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
              onClick={toggleWorkSampleModal}
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
              onClick={toggleCertificationModal}
            >
              Add
            </button>
          </ListGroupItem>
          <ListGroupItem>
            <p>Add details of Certifications you have achieved/completed</p>
          </ListGroupItem>
        </ListGroup>
      </div>

      <CustomModal
        isOpen={onlineProfilesModal}
        toggleModal={toggleOnlineProfileModal}
        handleSave={handleSaveOnlineProfile}
        modalTitle="Add Online Profile"
        buttonLabel="Save"
      >
        <Form onSubmit={handleSaveOnlineProfile}>
          <FormGroup>
            <Label for="socialProfile">Social Profile</Label>
            <Input
              type="select"
              name="socialProfile"
              id="socialProfile"
              value={profile.socialProfile}
              onChange={handleProfileChange}
            >
              <option value="">Select Social Profile</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="GitHub">GitHub</option>
              <option value="Twitter">Twitter</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="url">URL</Label>
            <Input
              type="text"
              name="url"
              id="url"
              placeholder="Enter URL"
              value={profile.url}
              onChange={handleProfileChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter Description"
              value={profile.description}
              onChange={handleProfileChange}
            />
          </FormGroup>
        </Form>
      </CustomModal>

      <CustomModal
        isOpen={workSampleModal}
        toggleModal={toggleWorkSampleModal}
        handleSave={handleSaveWorkSample}
        modalTitle="Add Work Samples"
        buttonLabel="Save"
      >
        <Form onSubmit={handleSaveWorkSample}>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="workTitle">Work Title</Label>
                <Input
                  type="text"
                  name="workTitle"
                  id="workTitle"
                  value={workTitle}
                  onChange={(e) => setWorkTitle(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="url">URL</Label>
                <Input
                  type="url"
                  name="url"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="durationFromMonth">Duration From</Label>
                <Row>
                  <Col md={6}>
                    <Input
                      type="select"
                      name="durationFromYear"
                      id="durationFromYear"
                      value={durationFromYear}
                      onChange={(e) => setDurationFromYear(e.target.value)}
                    >
                      <option value="">Select Year</option>
                      {yearOptions.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </Input>
                  </Col>
                  <Col md={6}>
                    <Input
                      type="select"
                      name="durationFromMonth"
                      id="durationFromMonth"
                      value={durationFromMonth}
                      onChange={(e) => setDurationFromMonth(e.target.value)}
                    >
                      <option value="">Select Month</option>
                      {months.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
            {!currentlyWorking && (
              <Col md={12}>
                <FormGroup>
                  <Label for="durationToMonth">Duration To</Label>
                  <Row>
                    <Col md={6}>
                      <Input
                        type="select"
                        name="durationToYear"
                        id="durationToYear"
                        value={durationToYear}
                        onChange={(e) => setDurationToYear(e.target.value)}
                        disabled={currentlyWorking}
                      >
                        <option value="">Select Year</option>
                        {yearOptions.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </Input>
                    </Col>
                    <Col md={6}>
                      <Input
                        type="select"
                        name="durationToMonth"
                        id="durationToMonth"
                        value={durationToMonth}
                        onChange={(e) => setDurationToMonth(e.target.value)}
                        disabled={currentlyWorking}
                      >
                        <option value="">Select Month</option>
                        {months.map((month) => (
                          <option key={month.value} value={month.value}>
                            {month.label}
                          </option>
                        ))}
                      </Input>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            )}
          </Row>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="currentlyWorking"
                id="currentlyWorking"
                checked={currentlyWorking}
                onChange={(e) => setCurrentlyWorking(e.target.checked)}
              />{" "}
              I am currently working on this
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
        </Form>
      </CustomModal>

      <CustomModal
        isOpen={certificationModal}
        toggleModal={toggleCertificationModal}
        handleSave={handleSaveCertification}
        modalTitle="Add Certification"
        buttonLabel="Save"
      >
        <Form onSubmit={handleSaveCertification}>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="CertificationName">Certification Name</Label>
                <Input
                  type="text"
                  name="CertificationName"
                  id="CertificationName"
                  value={certificationName}
                  onChange={(e) => setCertificationName(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="cID">Certification Completion ID</Label>
                <Input
                  type="cID"
                  name="cID"
                  id="cID"
                  value={certificationID}
                  onChange={(e) => setCertificationID(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="cURL">Certification cURL</Label>
                <Input
                  type="cURL"
                  name="cURL"
                  id="cURL"
                  value={certificationURL}
                  onChange={(e) => setCertificationURL(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="CvalidityY">Certification Validity</Label>
                <Row>
                  <Col md={6}>
                    <Input
                      type="select"
                      name="CvalidityY"
                      id="CvalidityY"
                      value={certificationValidityFromYear}
                      onChange={(e) =>
                        setCertificationValidityFromYear(e.target.value)
                      }
                    >
                      <option value="">Select Year</option>
                      {yearOptions.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </Input>
                  </Col>
                  <Col md={6}>
                    <Input
                      type="select"
                      name="CvalidityM"
                      id="CvalidityM"
                      value={certificationValidityFromMonth}
                      onChange={(e) =>
                        setCertificationValidityFromMonth(e.target.value)
                      }
                    >
                      <option value="">Select Month</option>
                      {months.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
            {!certificationExpiry && (
              <Col md={12}>
                <FormGroup>
                  <Label for="CExpiryY">Certification Expiry</Label>
                  <Row>
                    <Col md={6}>
                      <Input
                        type="select"
                        name="CExpiryY"
                        id="CExpiryY"
                        value={certificationValidityToYear}
                        onChange={(e) =>
                          setCertificationValidityToYear(e.target.value)
                        }
                        disabled={certificationExpiry}
                      >
                        <option value="">Select Year</option>
                        {yearOptions.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </Input>
                    </Col>
                    <Col md={6}>
                      <Input
                        type="select"
                        name="CExpiryM"
                        id="CExpiryM"
                        value={certificationValidityToMonth}
                        onChange={(e) =>
                          setCertificationValidityToMonth(e.target.value)
                        }
                        disabled={certificationExpiry}
                      >
                        <option value="">Select Month</option>
                        {months.map((month) => (
                          <option key={month.value} value={month.value}>
                            {month.label}
                          </option>
                        ))}
                      </Input>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            )}
          </Row>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="cexpire"
                id="cexpire"
                checked={certificationExpiry}
                onChange={(e) => setCertificationExpiry(e.target.checked)}
              />{" "}
              This Certification does not expire
            </Label>
          </FormGroup>
        </Form>
      </CustomModal>

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

export default Accomplishments;
