import React, { Component } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
  MDBHamburgerToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from "react";


function Mobile_menu()  {
  const [collapse1, setCollapse1] = useState(false);
  const [collapseID, setCollapseID] = useState('');

  const toggleCollapse = (collapseID) => {
    setCollapseID((prevState) => prevState !== collapseID ? collapseID : '');
  };

  const toggleSingleCollapse = (collapseId) => {
    setCollapse1((prevState) => ({ ...prevState, [collapseId]: !prevState[collapseId] }));
  };



    return (

      <Router>

        <MDBNavbar>
          <MDBHamburgerToggler id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
            <MDBCollapse isOpen={collapse1} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>Home</MDBDropdownToggle>
                      <MDBDropdownMenu>
                          <MDBDropdownItem href='/'>Homepage 1</MDBDropdownItem>
                          <MDBDropdownItem href='/Home2'>Homepage 2</MDBDropdownItem>
                          <MDBDropdownItem href='/Home3'>Homepage 3</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>Pages</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href='/about_us'>About Us</MDBDropdownItem>
                        <MDBDropdownItem href='/services'>Services</MDBDropdownItem>
                        <MDBDropdownItem href='/services_details'>Services Details</MDBDropdownItem>
                        <MDBDropdownItem href='/carrer_01'>Carrer</MDBDropdownItem>
                        <MDBDropdownItem href='/login'>Login</MDBDropdownItem>
                        <MDBDropdownItem href='/register'>Register</MDBDropdownItem>
                        <MDBDropdownItem href='/error_404'>Error 404</MDBDropdownItem>
                        <MDBDropdownItem href='/error_405'>Error 405</MDBDropdownItem>
                        <MDBDropdownItem href='/contact_01'>Contact us 01</MDBDropdownItem>
                        <MDBDropdownItem href='/contact_02'>Contact us 02</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem> 
                <MDBNavItem>
                  <MDBDropdown>
                      <MDBDropdownToggle nav caret>Jobs</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href='/job_list'>Job List</MDBDropdownItem>
                        <MDBDropdownItem href='/job_details'>Job Details</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>Employers</MDBDropdownToggle>
                      <MDBDropdownMenu>
                          <MDBDropdownItem href='/employers_list'>Employers List</MDBDropdownItem>
                          <MDBDropdownItem href='/employers_details'>Employers Details</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>Candidates</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href='/candidate_list'>Candidate List</MDBDropdownItem>
                        <MDBDropdownItem href='/candidate_details'>Candidate Details</MDBDropdownItem>
                    </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>Blog</MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href='/blog_classic'>Blog Classic</MDBDropdownItem>
                        <MDBDropdownItem href='/blog_grid'>Blog Grid</MDBDropdownItem>
                        <MDBDropdownItem href='/blog_details'>Blog Details</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }


export default Mobile_menu;