import React from "react";
import ProgressBar from "react-animated-progress-bar";

const Skills = () => {
  return (
    <div
      className="overview-box"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="title">
        <h5>Skills</h5>
      </div>
      <div className="desc pb-30">
        {/* ttm-progress-bar */}
        <div className="ttm-progress-bar clearfix">
          <h3 className="progressbar-title">Recruitment Outsourcing</h3>
          <ProgressBar rect percentage="90" />
        </div>
        {/* ttm-progress-bar end */}
        {/* ttm-progress-bar */}
        <div className="ttm-progress-bar clearfix">
          <h3 className="progressbar-title">Contingency Recruitment</h3>
          <ProgressBar rect percentage="70" />
        </div>
        {/* ttm-progress-bar end */}
        {/* ttm-progress-bar */}
        <div className="ttm-progress-bar clearfix">
          <h3 className="progressbar-title">On-demand Recruitment</h3>
          <ProgressBar rect percentage="80" />
        </div>
        {/* ttm-progress-bar end */}
      </div>
    </div>
  );
};

export default Skills;
