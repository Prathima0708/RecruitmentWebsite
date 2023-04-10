import React, { Component, useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import {
  Col,
  Row,
  Container,
  Collapse,
  NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

const Menu = () => {
  const [show, setShow] = useState(false);
  //user Profile Dropdown
  const [userProfile, setUserProfile] = useState(false);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);
  return (
    <Router>
      <nav className="main-menu">
        <ul className="menu">
          <li className="mega-menu-item">
            <a href="/" className="mega-menu-link">
              Home
            </a>
            <ul className="mega-submenu">
              <li>
                <a href="/">Job Seeker</a>
              </li>
              <li>
                <a href="/home2">Job Consultancy</a>
              </li>
              <li>
                <a href="/home3">Human Resource</a>
              </li>
            </ul>
          </li>
          <li className="mega-menu-item">
            <a href="/about_us" className="mega-menu-link">
              Pages
            </a>
            <ul className="mega-submenu">
              <li>
                <a href="/about_us">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/services_details">Services Details</a>
              </li>
              <li>
                <a href="/carrer_01">Carrer</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
              <li>
                <a href="/error_404">Error 404</a>
              </li>
              <li>
                <a href="/error_405">Error 405</a>
              </li>
              <li>
                <a href="/contact_01">Contact us 01</a>
              </li>
              <li>
                <a href="/contact_02">Contact us 02</a>
              </li>
            </ul>
          </li>
          <li className="mega-menu-item">
            <a href="/job_list" className="mega-menu-link">
              Jobs
            </a>
            <ul className="mega-submenu">
              <li>
                <a href="/job_list">Job List</a>
              </li>
              <li>
                <a href="/job_details">Job Details</a>
              </li>
            </ul>
          </li>
          <li className="mega-menu-item">
            <a href="/employers_list" className="mega-menu-link">
              Employers
            </a>
            <ul className="mega-submenu">
              <li>
                <a href="/employers_list">Employers List</a>
              </li>
              <li>
                <a href="/employers_details">Employers Details</a>
              </li>
            </ul>
          </li>
          <li className="mega-menu-item">
            <a href="/candidate_list" className="mega-menu-link">
              Candidates
            </a>
            <ul className="mega-submenu">
              <li>
                <a href="/candidate_list">Candidate List</a>
              </li>
              <li>
                <a href="/candidate_details">Candidate Details</a>
              </li>
            </ul>
          </li>
          <li className="mega-menu-item">
            <a href="/blog_classic" className="mega-menu-link">
              Blog
            </a>
            <ul className="mega-submenu">
              <li>
                <a href="/blog_classic">Blog Classic</a>
              </li>
              <li>
                <a href="/blog_grid">Blog Grid</a>
              </li>
              <li>
                <a href="/blog_details">Blog Details</a>
              </li>
            </ul>
          </li>
          {/* <Dropdown
            onClick={() => setUserProfile(!userProfile)}
            isOpen={userProfile}
            toggle={dropDownuserprofile}
            className="list-inline-item"
          >
            <DropdownToggle
              to="#"
              className="header-item"
              id="userdropdown"
              type="button"
              tag="a"
              aria-expanded="false"
            >
              <img
                //src={profileImage}
                alt="mdo"
                width="35"
                height="35"
                className="rounded-circle me-1"
              />{" "}
              <span className="d-none d-md-inline-block fw-medium">
                Hi, Jennifer
              </span>
            </DropdownToggle>
            <DropdownMenu
              className="dropdown-menu-end"
              aria-labelledby="userdropdown"
              end
            >
              <li>
                <Link className="dropdown-item" to="/managejobs">
                  Manage Jobs
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/bookmarkjobs">
                  Bookmarks Jobs
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/myprofile">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/signout">
                  Logout
                </Link>
              </li>
            </DropdownMenu>
          </Dropdown> */}
        </ul>
      </nav>
    </Router>
  );
};

export default Menu;
