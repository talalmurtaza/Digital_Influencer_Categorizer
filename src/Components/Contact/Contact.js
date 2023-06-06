import React, { Component } from "react";
import Contact_Info from "../Contact/Contact_Info";
import Location from "../Contact/Location";
// import Footer from "../Footer/Footer";
export default class Contact extends Component {
  render() {
    return (
      <div className="container row" style={{ marginTop: "40px" }}>
        <div className="col-md-6 my-3">
          <Contact_Info
            Address="852-B Milaad St, Block B Faisal Town, Lahore, Punjab 54770, Pakistan"
            Contact_Num="001122334455"
          />
        </div>

        <div className="col-md-6">
            <h2 style={{color: "white"}}>Our Location</h2>
          <Location />
        </div>
      </div>
    );
  }
}
