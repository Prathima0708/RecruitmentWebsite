import React, { Component } from "react";
import Header from "../components/layout/Header";
import PageHeader from "../components/layout/PageHeader";
import Footer from "../components/layout/Footer";

import { useState } from "react";
import user from "../newimages/user.jpg";
import { Link } from "react-router-dom";
import { Input, Label, Modal, ModalBody } from "reactstrap";
import Educationdetails from "./MyProfile/Educationdetails";
import Projects from "./MyProfile/Projects";
import Employment from "./MyProfile/Employment";
import Accomplishments from "./MyProfile/Accomplishments";
import Aboutme from "./MyProfile/Aboutme";
import Skills from "./MyProfile/Skills";
import PersonalProfile from "./MyProfile/PersonalProfile";

function Candidate_details() {
  const [name, setName] = useState("React");

  const onChangeValue = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="site-main">
      <Header />

      {/* PageHeader */}
      {/* <PageHeader title="candidate details" breadcrumb="candidate" /> */}
      {/* PageHeader end */}

      <div className="ttm-row sidebar job-sidebar clearfix">
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
              <div className="job_list-widget">
                <aside className="widget candidate-widget">
                  <h3 className="widget-title">
                    <i className="ti ti-files"></i>Candidate Informations
                  </h3>
                  <ul>
                    <li className="d-flex">
                      <b className="mr-5">Category:</b>
                      <span>Webdesigner / Webdevloper</span>
                    </li>
                    <li className="d-flex">
                      <b className="mr-5">Experience:</b>
                      <span>3 to 5 Years</span>
                    </li>
                    <li className="d-flex">
                      <b className="mr-5">Expected Salary:</b>
                      <span>$ 20k To $ 30k</span>
                    </li>
                    <li className="d-flex">
                      <b className="mr-5">Marital status:</b>
                      <span>Singal</span>
                    </li>
                    <li className="d-flex">
                      <b className="mr-5">Experience:</b>
                      <span>3 Years</span>
                    </li>
                    <li className="d-flex">
                      <b className="mr-5">Language:</b>
                      <span>English, French</span>
                    </li>
                    <li className="d-flex">
                      <b className="mr-5">Qualification:</b>
                      <span>Associate Degree</span>
                    </li>
                    <li className="d-flex">
                      <b className="mr-5">Type:</b>
                      <span>Full Time</span>
                    </li>
                  </ul>
                </aside>
                {/* <aside className="widget form-widget">
                  <h3 className="widget-title">
                    <i className="ti ti-email"></i>Contact Candidate
                  </h3>
                  <form className="wrap-form">
                    <label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        required="required"
                      />
                    </label>
                    <label>
                      <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        required="required"
                      />
                    </label>
                    <label>
                      <input
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        required="required"
                      />
                    </label>
                    <label>
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Message"
                        required="required"
                      ></textarea>
                    </label>
                    <button
                      className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100"
                      type="submit"
                    >
                      send a message!
                    </button>
                  </form>
                </aside> */}
              </div>
              <aside className="widget widget-download">
                <ul className="download">
                  <li>
                    <a href="#">View Cv</a>
                    <i className="ti ti-eye"></i>
                  </li>
                  <li>
                    <a href="#">Download Cv</a>
                    <i className="ti ti-files"></i>
                  </li>
                </ul>
              </aside>
              <div className="overview-box">
                <div className="title">
                  <div className="d-sm-flex justify-content-between align-items-center mb_10">
                    <p className="mb-10 fw-bold">Social Links :</p>
                    <div className="social-icons circle mb-10">
                      <ul className="list-inline">
                        <li>
                          <a
                            href="#facebook"
                            rel="noopener"
                            aria-label="facebook"
                          >
                            <i className="ti ti-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#twitter"
                            rel="noopener"
                            aria-label="twitter"
                          >
                            <i className="ti ti-twitter-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#instagram"
                            rel="noopener"
                            aria-label="instagram"
                          >
                            <i className="ti ti-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#pinterest"
                            rel="noopener"
                            aria-label="pinterest"
                          >
                            <i className="ti ti-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 content-area">
              <div className="row">
                <div className="col-md-12">
                  <div className="candidate-data">
                    <div className="candidate-img">
                      <img src={user} alt="user" />
                    </div>
                    <div className="candidate-caption">
                      <h5>Jimmy Divison</h5>
                      <span>Web Designer Ul/Ux</span>
                      <div className="meta-line">
                        <span>
                          <i className="ti ti-bag"></i> UX/UI Designer
                        </span>
                        <span>
                          <i className="ti ti-headphone"></i> (+01)123 456 789
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <Aboutme />

                  <Educationdetails />

                  <Projects />
                  <Employment />
                  <Accomplishments />
                  <Skills />
                  <PersonalProfile />
                </div>
              </div>
              {/* row end */}
            </div>
          </div>
          {/* row end */}
        </div>
      </div>

      {/* action-section */}
      <section className="ttm-row action-section bg-theme-SkinColor text-theme-WhiteColor clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-md-flex align-items-center justify-content-between">
                {/* featured-icon-box */}
                <div className="featured-icon-box icon-align-before-content style2">
                  <div className="featured-icon">
                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-xl">
                      <i className="flaticon flaticon-recruitment-5"></i>
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3>Incredible Recruitment & Staffing Agency</h3>
                    </div>
                    <div className="featured-desc">
                      <p>
                        We have over 30 years experience oft Business porro
                        qusquam dol ipsum quia dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
                {/* featured-icon-box end */}
                <a
                  className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white"
                  href="/"
                >
                  Hiring Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* action-section end */}

      <Footer />
    </div>
  );
}

export default Candidate_details;
