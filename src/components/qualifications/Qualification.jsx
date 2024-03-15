import React from "react";
import "./qualification.css";

const Qualifications = () => {
  return (
    <>
      <a name="qualification"></a>
      <div className="qualification-container">
        <span>
          <h3>
            <em>02. </em>Educational Qualification
          </h3>
          <div className="clg-box">
            <aside>
              <h4>Master of Computer Applications</h4>
              <em>National Institute of Technology Karnataka, Surathkal</em>
            </aside>
            <aside>
              <h4>2022 - 2025</h4>
              <em>CGPA : 7.39</em>
            </aside>
          </div>
          <br />
          <div className="clg-box">
            <aside>
              <h4>Bachelor of Computer Applications</h4>
              <em>University of Lucknow, Uttar Pradesh</em>
            </aside>
            <aside>
              <h4>2018 - 2021</h4>
              <em>CGPA : 7.70</em>
            </aside>
          </div>
        </span>
      </div>
    </>
  );
};

export default Qualifications;
