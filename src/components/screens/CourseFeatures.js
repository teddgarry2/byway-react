import React, { useState } from "react";
import "../../App.css";
import Instructor from "../assets/icons/span-8.svg";
import Achieve from "../assets/icons/achive.svg";
import Cap from "../assets/icons/cap.svg";
import Play from "../assets/icons/play.svg";

function CourseInfo() {
  const [activeTab, setActiveTab] = useState("Description");

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <>
            <h5>Course Description</h5>
            <p>
              This interactive e-learning course will introduce you to User
              Experience (UX) design, the art of creating products and services
              that are intuitive, enjoyable, and user-friendly. Gain a solid
              foundation in UX principles and learn to apply them in real-world
              scenarios through engaging modules and interactive exercises.
            </p>
            <h5>Certification</h5>
            <p>
              At Byway, we understand the significance of formal recognition for
              your hard work and dedication to continuous learning. Upon
              successful completion of our courses, you will earn a prestigious
              certification that validates your expertise and opens doors to new
              opportunities in your chosen field.
            </p>
          </>
        );

      case "Instructor":
        return (
          <>
            <h5>Instructor</h5>
            <h5 className="InsName">Ronald Richards</h5>
            <h6 className="InsRole">UI/UX Designer</h6>
            <div className="InsDetails">
              <div className="InsImage">
                <img src={Instructor} alt="Instructor" />
              </div>
              <ul className="InsDetailing">
                <li>
                  <img src={Achieve} alt="Achieve" /> 40,445 Reviews
                </li>
                <li>
                  <img src={Cap} alt="Cap" /> 500 Students
                </li>
                <li>
                  <img src={Play} alt="Play" /> 15 Courses
                </li>
              </ul>
            </div>
            <p>
              With over a decade of industry experience, Ronald brings a wealth
              of practical knowledge to the classroom. He has played a pivotal
              role in designing user-centric interfaces for renowned tech
              companies, ensuring seamless and engaging user experiences.
            </p>
          </>
        );

      case "Syllabus":
        return (
          <>
            <h5>Syllabus</h5>
            <p>
              The syllabus will guide you through the fundamentals of UX design,
              covering research, wireframing, prototyping, and usability
              testing. Each module builds upon the previous one to ensure a
              solid learning progression.
            </p>
          </>
        );

      case "Reviews":
        return (
          <>
            <h5>Reviews</h5>
            <p>
              “This course was amazing! The interactive lessons made learning UX
              principles easy and fun.” – Student Review
            </p>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <section id="courseInfo">
      <section className="wrapper">
        <section className="courseInfo">
          {/* Tabs */}
          <ul className="infoCategories">
            {["Description", "Instructor", "Syllabus", "Reviews"].map((tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  cursor: "pointer",
                  fontWeight: activeTab === tab ? "bold" : "normal",
                }}
              >
                {tab}
              </li>
            ))}
          </ul>

          <hr />

          {/* Dynamic Content */}
          {renderContent()}

          <hr />
        </section>
      </section>
    </section>
  );
}

export default CourseInfo;
