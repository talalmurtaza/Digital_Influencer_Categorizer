import React, { Component } from "react";

export default class Location extends Component {
  render() {
    return (
      
        <div className= "row" style={{width: "100%"}}>
          <iframe
            width="50%"
            height="420"
            frameborder="0"
            // scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=852-B%20Milaad%20St,%20Block%20B%20Faisal%20Town,%20Lahore,%20Punjab%2054770,%20Pakistan+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              distance maps
            </a>
          </iframe>
        </div>
    
    );
  }
}
