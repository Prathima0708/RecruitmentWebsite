import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import profileImage from "../../newimages/profile.jpg";

function Headersearch() {
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  //user Profile Dropdown
  const [userProfile, setUserProfile] = useState(false);
  const dropDownuserprofile = () => setUserProfile((prevState) => !prevState);

  return (
    // <div className="header_search">
    //   <a className="search_btn" tabIndex="1" onClick={toggle}>
    //     {show ? <i className="fa fa-times" /> : <i className="fa fa-search" />}
    //   </a>
    //   {show && (
    //     <div className="header_search_content">
    //       <div className="header_search_content_inner">
    //         <a className="close_btn" onClick={toggle}>
    //           <i className="ti ti-close"></i>
    //         </a>
    //         <form id="searchbox">
    //           <input
    //             type="text"
    //             className="search_query"
    //             name="searchbox"
    //             placeholder="Type Word Then Enter.."
    //           />
    //           <button type="submit" className="btn close-search">
    //             <i className="ti ti-search"></i>
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <Dropdown
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
          src={profileImage}
          alt="mdo"
          width="35"
          height="35"
          className="rounded-circle me-1"
        />{" "}
        <span className="d-none d-md-inline-block fw-medium">Hi, User</span>
      </DropdownToggle>
      <DropdownMenu
        className="dropdown-menu-end"
        aria-labelledby="userdropdown"
        end
      >
        <li>
          <Link className="dropdown-item" to="/candidate_details">
            My Profile
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/login">
            Logout
          </Link>
        </li>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Headersearch;
