import React, { Component } from "react";
import Header from "../components/layout/Header";
import PageHeader from "../components/layout/PageHeader";
import Footer from "../components/layout/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import axios from "axios";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [email, setEmail] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [resume, setResume] = useState(null);
  const [joinType, setJoinType] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  function firstNameChangeHandler(event) {
    setFirstName(event.target.value);
  }
  function lastNameChangeHandler(event) {
    setLastName(event.target.value);
  }
  function handlePhonenoChange(event) {
    setEnteredPhone(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleExperienceLevelChange = (event) => {
    setExperienceLevel(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleJoinTypeChange = (event) => {
    setJoinType(event.target.value);
  };

  const handleProfilePhotoChange = (event) => {
    setProfilePhoto(event.target.files[0]);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    async function storeData() {
      const formData = new FormData();
      formData.append("user_type_id", 2);
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("experience_level", experienceLevel);
      formData.append("resume", resume);
      formData.append("join_type", joinType);
      formData.append("profile_photo", profilePhoto);
      formData.append("phone_number", enteredPhone);
      formData.append("email_address", email);
      formData.append("password", password);
      console.log("formdata before post req", formData);
      try {
        let headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await axios.post(
          "http://127.0.0.1:8000/recruitement/user_save_account/",
          formData,
          { headers: headers }
        );
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

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setEnteredPhone("");
    setJoinType("");
    setExperienceLevel("");
  }
  return (
    <div className="site-main">
      <Header />

      {/* PageHeader */}
      <PageHeader title="register" breadcrumb="register" />
      {/* PageHeader end */}

      {/* register */}
      <div className="ttm-row register-section clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                <div className="layer-content">
                  <div className="text-center mb-20">
                    <h3>Create An Account</h3>
                  </div>
                  <div className="ttm-tabs ttm-tab-style-02">
                    <Tabs>
                      {/* <TabList className="tabs">
                        <Tab className="tab">
                          <a>
                            <i className="flaticon flaticon-research"></i>
                            <span>Candidate</span>
                            <h5>Login as a Candidate</h5>
                          </a>
                        </Tab>
                        <Tab className="tab">
                                                        <a>
                                                        <i className="flaticon flaticon-job-search"></i>
                                                            <span>Employer</span><h5>Login as a Employer</h5>
                                                        </a>
                                                    </Tab>
                      </TabList> */}
                      <div className="content-tab">
                        <TabPanel>
                          <form
                            id="login_form"
                            className="login_form wrap-form"
                            onSubmit={handleSubmit}
                          >
                            <div className="row">
                              <div className="col-lg-6">
                                <label>
                                  <i className="ti ti-user"></i>
                                  <input
                                    type="text"
                                    id="txtname"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={firstNameChangeHandler}
                                  />
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <label>
                                  <i className="ti ti-user"></i>
                                  <input
                                    type="text"
                                    id="txtemail"
                                    placeholder="Last name"
                                    value={lastName}
                                    onChange={lastNameChangeHandler}
                                  />
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <label>
                                  <i className="ti ti-lock"></i>
                                  <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                  />
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <label>
                                  <i className="ti ti-email"></i>
                                  <input
                                    type="email"
                                    id="txtemail"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={handleEmailChange}
                                  />
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <label>
                                  <i className="ti ti-upload"></i>
                                  <input
                                    type="file"
                                    id="profile_photo"
                                    // accept="image/*"
                                    onChange={handleProfilePhotoChange}
                                  />
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <label>
                                  <i className="ti ti-harddrives"></i>
                                  <select
                                    id="experience_level"
                                    value={experienceLevel}
                                    onChange={handleExperienceLevelChange}
                                  >
                                    <option value="">Experience Level</option>
                                    <option value="entry_level">
                                      Entry Level
                                    </option>
                                    <option value="mid_level">Mid Level</option>
                                    <option value="senior_level">
                                      Senior Level
                                    </option>
                                  </select>
                                </label>
                              </div>

                              <div className="col-lg-6">
                                <label>
                                  <i className="ti ti-upload"></i>
                                  <input
                                    type="file"
                                    id="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleResumeChange}
                                  />
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <label>
                                  <i className="ti ti-check-box"></i>
                                  <select
                                    id="join_type"
                                    value={joinType}
                                    onChange={handleJoinTypeChange}
                                  >
                                    <option value="">Join Type</option>
                                    <option value="full_time">Full Time</option>
                                    <option value="part_time">Part Time</option>
                                    <option value="contract">Contract</option>
                                  </select>
                                </label>
                              </div>
                              <div className="col-lg-12">
                                <label>
                                  <i className="ti ti-mobile"></i>
                                  <input
                                    type="tel"
                                    id="txtphone"
                                    placeholder="Phone Number"
                                    value={enteredPhone}
                                    onChange={handlePhonenoChange}
                                  />
                                </label>
                              </div>
                              <div className="col-lg-12">
                                <label className="mt-0">
                                  <div className="d-md-flex align-items-center justify-content-between">
                                    <div className="mt-15">
                                      <p>
                                        Already registered?
                                        <a
                                          href="/login"
                                          className="text-theme-SkinColor"
                                        >
                                          {" "}
                                          Sign in here
                                        </a>
                                      </p>
                                    </div>
                                  </div>
                                </label>
                              </div>
                              <div className="col-lg-12">
                                <label className="mb-0">
                                  <button
                                    className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                    type="submit"
                                  >
                                    Sign up
                                  </button>
                                </label>
                              </div>
                            </div>
                          </form>
                        </TabPanel>
                        <TabPanel>
                          <form
                            id="login_form"
                            className="login_form wrap-form"
                          >
                            <div className="row">
                              <div className="col-lg-6">
                                <label>
                                  <i className="ti ti-user"></i>
                                  <input
                                    type="text"
                                    id="txtname"
                                    placeholder="Username"
                                  />
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <label>
                                  <i className="ti ti-email"></i>
                                  <input
                                    type="email"
                                    id="txtemail"
                                    placeholder="Email Address"
                                  />
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <label>
                                  <i className="ti ti-lock"></i>
                                  <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                  />
                                </label>
                              </div>
                              <div className="col-lg-6">
                                <label>
                                  <i className="ti ti-lock"></i>
                                  <input
                                    type="password"
                                    id="cpassword"
                                    placeholder="Confirm Password *"
                                  />
                                </label>
                              </div>
                              <div className="col-lg-12">
                                <label>
                                  <i className="ti ti-mobile"></i>
                                  <input
                                    type="tel"
                                    id="txtphone"
                                    placeholder="Phone Number"
                                  />
                                </label>
                              </div>
                              <div className="col-lg-12">
                                <label className="mt-0">
                                  <div className="d-md-flex align-items-center justify-content-between">
                                    <div className="cookies-checkbox mt-15">
                                      <div className="d-flex flex-row justify-content-start">
                                        <input
                                          className="w-auto mr-10 mt-5"
                                          id="cookies-consent"
                                          name="cookies-consent"
                                          type="checkbox"
                                          value="yes"
                                        />
                                        <span>
                                          you accept our Terms and Conditions
                                          and Privacy Policy
                                        </span>
                                      </div>
                                    </div>
                                    <div className="mt-15">
                                      <p>Already have an account?</p>
                                    </div>
                                  </div>
                                </label>
                              </div>
                              <div className="col-lg-12">
                                <label className="mb-0">
                                  <button
                                    className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                    type="submit"
                                  >
                                    Sign up
                                  </button>
                                </label>
                              </div>
                            </div>
                          </form>
                        </TabPanel>
                      </div>
                    </Tabs>
                  </div>
                  {/* <div className="login-social-buttons">
                    <div className="row">
                      <div className="col-md-6">
                        <button
                          id="login-with-facebook"
                          className="social-account-button w-100 facebook-button"
                        >
                          <i className="ti ti-facebook"></i>
                          <span>Login With facebook</span>
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button
                          id="login-with-google"
                          className="social-account-button w-100 google-button"
                        >
                          <i className="ti ti-google"></i>
                          <span>Login With Google</span>
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* login end */}
      <Modal isOpen={showModal} toggle={() => setShowModal(false)}>
        <ModalHeader toggle={() => setShowModal(false)}>Success</ModalHeader>
        <ModalBody>{successMessage}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setShowModal(false)}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
      <Footer />
    </div>
  );
}

export default Register;
