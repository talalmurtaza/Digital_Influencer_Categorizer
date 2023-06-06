import React from "react";
import image_Team from "../img/image_Team.jpg";
import images_team2 from "../img/images_team2.jpg";
import images_team3 from "../img/images_team3.jpg";
import images_Work from "../img/images_Work.jpg";
import images_Work2 from "../img/images_Work2.jpg";
import images_Work3 from "../img/images_Work3.jpg";
export default function Image() {
  return (
    <>
      <div className="container row">
        <h1 style={{ color: "white" }}>Our Team</h1>
        <div className="col-md-4 my-3">
          <img
            src={image_Team}
            class="img-thumbnail"
            style={{ width: "586px", height: "300px" }}
            alt="..."
          />
        </div>
        <div className="col-md-4 my-3">
          <img
            src={images_team2}
            class="img-thumbnail"
            style={{ width: "586px", height: "300px" }}
            alt="..."
          />
        </div>
        <div className="col-md-4 my-3">
          <img
            src={images_team3}
            class="img-thumbnail"
            style={{ width: "586px", height: "300px" }}
            alt="..."
          />
        </div>
        <h1 style={{ color: "white" }}>Our Office</h1>
        <div className="col-md-4 my-3">
          <img
            src={images_Work}
            class="img-thumbnail"
            style={{ width: "586px", height: "300px" }}
            alt="..."
          />
        </div>
        <div className="col-md-4 my-3">
          <img
            src={images_Work2}
            class="img-thumbnail"
            style={{ width: "586px", height: "300px" }}
            alt="..."
          />
        </div>
        <div className="col-md-4 my-3">
          <img
            src={images_Work3}
            class="img-thumbnail"
            style={{ width: "586px", height: "300px" }}
            alt="..."
          />
        </div>
      </div>
    </>
  );
}
