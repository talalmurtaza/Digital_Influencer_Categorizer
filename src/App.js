import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/about/About";
import Blogs_Original from "./Components/Blogs_Original/Blogs_Original";
import React from "react";
import Contact from "./Components/Contact/Contact";
import SignIn from "../src/Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="Main">
      <Navbar title="DIC" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <About
                title="About us"
                innerText="In social media marketing, businesses create strategies and tactics to find and connect with their target audience, precisely differentiating them and identifying their values, needs, and preferences. The purpose of my project is to bridge the gap between social media influencers and business owners using an application run entirely on the backbone of a self-learning AI entity. Our website provides many extensive features to facilitate this purpose including but not restricted to categorization, a proper filtering and rating system etc. There are already some applications that provide functionalities similar to this project but the most distinguishing factor is the presence of a fully automated AI system that uses complex AI algorithms to perform operations like web scraping, deep learning and Natural language processing to fully categorize the existing famous internet personalities including social media influencers, vloggers and bloggers."
                head="Digital Influencer Categorizer"
              />
            }
          />
          <Route path="/blogs" element={<Blogs_Original />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Sign-In" element={<SignIn />} />
        </Routes>
      </Router>
      <Footer aboutUs="We provide an easy-to-use platform for organizations that want advertisements through well-known influencers." />
    </div>
  );
}

export default App;
