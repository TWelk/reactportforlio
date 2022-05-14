import React from 'react';
import profilePic from "../../assets/ME.jpg";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={profilePic} alt="Profile Pic" width="200px" />
        </div>
        <p>
          Hello, my name is Tyler Welker and I am a Full Stack Web Developer entering the Web Engineer industry, looking to work with teams on building new and innovative applications. I am knowledgeable in HTML, CSS, JavaScript, Node.js, Express.js, SQL, MongoDB, React, and GraphQL.
        </p>
        <p>
          I graduated from International Business College with an associate degree in computer programming as well as completing a Full Stack Web Development course from University of California of Irvine. 
        </p>
      </div>
    </section>
  );
}

export default About;
