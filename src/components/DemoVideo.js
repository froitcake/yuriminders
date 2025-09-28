import React from "react";
import "./DemoVideo.css";

const DemoVideo = () => {
  return (
    <section id="demo" className="demo-video section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">see it in action</h2>
          <p className="section-description">
            look at this yuri of massachusetts colleges
          </p>
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/mitxharvard1.jpeg`}
          alt="Grocery"
        />
        <img
          src={`${process.env.PUBLIC_URL}/mitxharvard2.jpeg`}
          alt="Grocery"
        />
        <img
          src={`${process.env.PUBLIC_URL}/mitxharvard3.jpeg`}
          alt="Grocery"
        />
        {/* 
        <div className="video-container">
          <div className="video-placeholder">
            <div className="play-button">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="video-text">
              <h3>demo video</h3>
              <p>Coming soon - Spectacles lens demo</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DemoVideo;
