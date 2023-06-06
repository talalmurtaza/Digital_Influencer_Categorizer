import React from "react";
import Blogs from "../Blogs/Blogs";
import "../Home/Home.css";
// import Footer from "../Footer/Footer";
export default function Home() {
  return (
    <div >
      <div className="mainBlog">
        <h1 id="heading">Trending Influencers</h1>
        <div className="Blogs">
          <Blogs
            title="Duckey Bhai"
            innerText="ducky ka intro"
            btnText="Visit Insta Profile"
            link="https://i.samaaenglish.tv/primary/2022/12/24131216f96cdce.jpg"
          />
          <Blogs
            title="Lu do Magalu"
            innerText="Lu do Magalu ka intro"
            btnText="Visit Insta Profile"
            link="https://uploads-ssl.webflow.com/5d7e8885cad5174a2fcb98d7/5eddd9cac99df98be7b00c8e_virtual-influencer-lu-do-magalu.jpg"
          />
          <Blogs
            title="Lil Miquela"
            innerText="Lil Miquela ka intro"
            btnText="Visit Insta Profile"
            link="https://media.wired.com/photos/5ae767a6c6901c5ee08405de/1:1/w_1480,h_1480,c_limit/LilMiquela.jpg"
          />
          <Blogs
            title="Zaid Ali"
            innerText="Zaid Ali ka intro"
            btnText="Visit Insta Profile"
            link="https://www.masala.com/cloud/2021/08/01/fSUo6Lu6-Zaid-Ali-Wiki-Biography-Age-Height-Weight-Profile-Info..jpg.jpg"
          />
        </div>
        <div className="Blogs">
          <Blogs
            title="Shahveer Jafry"
            innerText="Shahveer Jafry ka intro"
            btnText="Visit Insta Profile"
            link="https://hamariweb.com/profiles/images/profile/2309-061.jpg"
          />
          <Blogs
            title="sham idrees"
            innerText="sham idrees ka intro"
            btnText="Visit Insta Profile"
            link="https://randomshot.infostarr.com/wp-content/uploads/2018/05/sham-idrees-cover-300x254.jpg"
          />
        </div>
      </div>
      {/* <Footer aboutUs="We provide an easy-to-use platform for organizations that want advertisements through well-known influencers."/> */}

    </div>
  );
}
