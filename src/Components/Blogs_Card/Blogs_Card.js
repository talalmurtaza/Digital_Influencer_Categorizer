import React from "react";
import PropTypes from "prop-types";
export default function Blogs_Original(props) {
  return (
    <div className="card my-3 mx-3" style={{ backgroundColor: "rgba(220, 220, 220, 0.4)" ,color: "white"}}>
      <div className="card-header"><h4>{props.title}</h4></div>
      <div className="card-body">
        <p className="card-text">{props.innerText}...</p>
        <a href={props.link} target="_blank" className="btn btn-secondary">
          {props.btnText}
        </a>
      </div>
    </div>
  );
}
Blogs_Original.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  innerText: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};
