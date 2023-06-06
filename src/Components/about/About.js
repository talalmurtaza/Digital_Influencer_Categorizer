import React from "react";
import PropTypes from "prop-types";
import Image from "../Image/Image";
function About(props) {
  return (
    <>
      <div className="card-header" style={{color: "white"}}>
        <h1>{props.head}</h1>
      </div>
      <div
        className="card"
        style={{ backgroundColor: "rgba(220, 220, 220, 0.4)", color: "white" }}
      >
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.innerText}</p>
        </div>
      </div>
      <Image />
    </>
  );
}
About.propTypes = {
  title: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  innerText: PropTypes.string.isRequired,
};

export default About;
