import React from "react";
import PropTypes from "prop-types";
import "../Blogs/Blogs.css"

export default function blogs(props) {
  return (
     <div className="BCard">
      <div className="card">
        <img
          id="image"
          src={props.link}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.innerText}</p>
          <a href="https://www.google.com" target="_blank" className="btn btn-secondary">
            {props.btnText}
          </a>
        </div>
      </div>
     </div>
  );
}
blogs.propTypes = {
  title: PropTypes.string.isRequired,
  innerText: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};
