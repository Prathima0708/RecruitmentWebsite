import React, { Component, useEffect } from "react";
import Menu from "./Menu";
import Mobile_menu from "./Mobile_menu";
import Logo from "./Logo";
import Header_search from "./Header_search";
import Headersearch from "./Header_search";

const Header = () => {
  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-Sticky")
      : header.classList.remove("is-Sticky");
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  return (
    <header id="masthead" className="header ttm-header-style-01">
      {/* topbar */}
      {/* <div className="top_bar bg-theme-DarkColor text-center clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="top_bar_contact_item m-0">
                                <div className="top_bar_icon">
                                    <i className="fas fa-info-circle text-reset"></i>
                                </div>
                                <span>Using its extensive fish farming experience and knowledge, Fleuren & Nooijen is now a market leader helping. </span>  
                                <a className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-right ttm-btn-color-skincolor" href="/"> Learn More<i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      {/* topbar end */}
      {/* site-header-menu */}
      <div id="site-header-menu" className="site-header-menu ttm-bgcolor-white">
        <div className="site-header-menu-inner ttm-stickable-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                {/* site-navigation */}
                <div className="site-navigation d-flex align-items-center justify-content-between">
                  {/* site-branding */}
                  <div className="site-branding">
                    <Logo />
                  </div>
                  {/* site-branding end */}
                  <div className="border-box-block">
                    <div className=" d-flex align-items-center justify-content-between">
                      {/* menu */}
                      <Menu />
                      <div className="mobile-menu">
                        <Mobile_menu />
                      </div>
                      {/* menu end */}

                      <div className="header_btn">
                        <a
                          className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill
                                        ttm-icon-btn-left ttm-btn-color-skincolor d-flex align-items-center"
                        >
                          <i className="far fa-user fa-sm"></i>
                          <a className="alert-heading" href="/register">
                            sign up{" "}
                          </a>
                          <span className="ml-10 mr-10">/</span>
                          <i className="ti ti-lock fa-sm"></i>
                          <a className="alert-heading" href="/login">
                            login{" "}
                          </a>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <div className="header_btn">
                    <a
                      className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                      href="/login"
                    >
                      Login
                    </a>
                  </div> */}
                  <div className="header_extra ml-auto d-flex align-items-center">
                    <Headersearch />
                  </div>
                </div>
                {/* site-navigation end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* site-header-menu end */}
    </header>
  );
};

export default Header;
