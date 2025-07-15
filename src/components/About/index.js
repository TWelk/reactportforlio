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
          Hi, I’m Tyler Welker — a detail-oriented and adaptable professional with a strong foundation in Full Stack Web Development and data management. I’m passionate about building efficient, user-friendly applications and supporting teams through accurate and organized data entry and backend operations.
        </p>
        <p>
          My technical skills include HTML, CSS, JavaScript, Node.js, Express.js, SQL, MongoDB, React, and GraphQL, along with a solid understanding of data processing and database management. I hold an associate degree in Computer Programming from International Business College and have completed a Full Stack Web Development program through the University of California, Irvine.
        </p>
        <p>
          Whether working on front-end interfaces, back-end systems, or maintaining clean and reliable data, I bring a focused and reliable approach to every project.
        </p>
      </div>
    </section>
  );
}

export default About;
