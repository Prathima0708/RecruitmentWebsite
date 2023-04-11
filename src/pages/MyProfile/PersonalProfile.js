import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
} from "reactstrap";
import Select from "react-select";
import axios from "axios";
import { subURL } from "../../utils/URL's";

const PersonalProfile = () => {
  const [profileModal, setProfileModal] = useState(false);
  const openProfileModal = () => setProfileModal(!profileModal);

  const [currentIndustry, setCurrentIndustry] = useState("");
  const [selectedShift, setSelectedShift] = useState("flexible");
  const [gender, setGender] = useState("");
  const [salary, setSalary] = useState("");
  const [dob, setDob] = useState("");

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);

  const [isDifferentlyAbled, setIsDifferentlyAbled] = useState(false);
  const [reason, setReason] = useState("");

  const [iscareerBreak, setIsCareerBreak] = useState(false);
  const [careerBreakReason, setCareerBreakReason] = useState("");

  const [permanentAddress, setPermanentAddress] = useState("");
  const [hometown, setHometown] = useState("");
  const [pincode, setPincode] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    // Fetch location options from REST Countries API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) =>
        setLocationOptions(
          data.map((country) => ({
            value: country.name.common.toLowerCase(),
            label: country.name.common,
          }))
        )
      )
      .catch((error) => console.error(error));
  }, []);

  const handleLocationChange = (selectedOptions) => {
    setSelectedLocations(selectedOptions);
  };
  const handleDifferentlyAbledChange = (event) => {
    setIsDifferentlyAbled(event.target.value === "yes");
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleCareerBreakChange = (event) => {
    setIsCareerBreak(event.target.value === "yes");
  };

  const handleCareerBreakReasonChange = (event) => {
    setCareerBreakReason(event.target.value);
  };

  const formatSelectedLocations = () => {
    return selectedLocations.map((location) => location.label).join(", ");
  };
  const handleShiftChange = (e) => {
    setSelectedShift(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    async function storeData() {
      const formData = {
        user_account_id: 1,
        current_industry: currentIndustry,
        preferred_shift: selectedShift,
        preferred_work_location: "India",
        expected_salary: salary,
        gender: gender,

        date_of_birth: dob,
        differently_abled: isDifferentlyAbled,
        career_break: iscareerBreak,
        reasonforbreak: careerBreakReason,
        work_permit_for_any_countries: "India",
        permanent_address: permanentAddress,

        hometown: hometown,
        pincode: pincode,
        language: language,
      };
      console.log("formdata before post req", formData);
      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(`${subURL}/userpersonalinfo`, formData, {
          headers: headers,
        });
        console.log(res.data);

        if (res.status === 201) {
          console.log("success");
          //   setSuccessMessage("Data saved successfully!");
          //   setShowModal(true);
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

              <div className="p-1">
                <FormGroup>
                  <Label for="preferredLocation">Preferred Work Location</Label>
                  <InputGroup>
                    <div style={{ position: "relative" }}>
                      <Select
                        id="preferredLocation"
                        value={selectedLocations}
                        onChange={handleLocationChange}
                        options={locationOptions}
                        isMulti={true}
                        placeholder="Enter preferred work locations..."
                      />
                    </div>
                  </InputGroup>
                  {selectedLocations.length > 0 && (
                    <FormText color="muted">
                      Selected locations: {formatSelectedLocations()}
                    </FormText>
                  )}
                </FormGroup>
              </div>

              <div className="p-1">
                <FormGroup>
                  <Label for="differentlyAbled">
                    Are you Differently Abled?
                  </Label>
                  <div className="radio-group">
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type="radio"
                          id="differentlyAbledYes"
                          name="differentlyAbled"
                          value="yes"
                          checked={isDifferentlyAbled}
                          onChange={handleDifferentlyAbledChange}
                        />
                        Yes
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type="radio"
                          id="differentlyAbledNo"
                          name="differentlyAbled"
                          value="no"
                          checked={!isDifferentlyAbled}
                          onChange={handleDifferentlyAbledChange}
                        />
                        No
                      </Label>
                    </FormGroup>
                  </div>
                </FormGroup>
              </div>

              {isDifferentlyAbled && (
                <FormGroup>
                  <Label for="differentlyAbledReason">Reason</Label>

                  <Input
                    type="text"
                    id="differentlyAbledReason"
                    name="differentlyAbledReason"
                    value={reason}
                    onChange={handleReasonChange}
                    placeholder="Enter your reason for being differently abled"
                  />
                </FormGroup>
              )}

              <div className="p-1">
                <FormGroup>
                  <Label for="careerbreak">
                    Have you taken a Career Break?
                  </Label>
                  <div className="radio-group">
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type="radio"
                          id="careerbreakYes"
                          name="careerbreak"
                          value="yes"
                          checked={iscareerBreak}
                          onChange={handleCareerBreakChange}
                        />
                        Yes
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          type="radio"
                          id="careerbreakNo"
                          name="careerbreak"
                          value="no"
                          checked={!iscareerBreak}
                          onChange={handleCareerBreakChange}
                        />
                        No
                      </Label>
                    </FormGroup>
                  </div>
                </FormGroup>
              </div>

              {iscareerBreak && (
                <FormGroup>
                  <Label for="careerbreakreason">Reason</Label>

                  <Input
                    type="text"
                    id="careerbreakreason"
                    name="careerbreakreason"
                    value={careerBreakReason}
                    onChange={handleCareerBreakReasonChange}
                    placeholder="Enter your reason "
                  />
                </FormGroup>
              )}

              <FormGroup>
                <Label for="permanentAddress">Permanent Address</Label>
                <Input
                  type="text"
                  id="permanentAddress"
                  value={permanentAddress}
                  onChange={(event) => setPermanentAddress(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="hometown">Hometown</Label>
                <Input
                  type="text"
                  id="hometown"
                  value={hometown}
                  onChange={(event) => setHometown(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="pincode">Pincode</Label>
                <Input
                  type="text"
                  id="pincode"
                  value={pincode}
                  onChange={(event) => setPincode(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="language">Language</Label>
                <Input
                  type="text"
                  id="language"
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                />
              </FormGroup>

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

export default PersonalProfile;
