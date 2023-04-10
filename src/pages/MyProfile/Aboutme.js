import React from "react";

const Aboutme = () => {
  return (
    <div
      className="overview-box"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="title">
        <h5>Resume</h5>
      </div>

      <div className="desc">
        <p>
          Upload your resume to get noticed by top recruiters. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <form>
          <div className="form-group mt-3">
            <label htmlFor="resume-file" className="mr-2">
              Choose file:
            </label>
            <input type="file" className="form-control-file" id="resume-file" />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Aboutme;
