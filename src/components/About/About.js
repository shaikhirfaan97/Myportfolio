import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/coder.png" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Irfaan Shaikh</strong>. I'm originally
              from Maharashtra. a passionate full-stack developer with extensive
              experience in building scalable web applications. My proficiency
              in a wide range of technologies, including Node.js, Express.js,
              Angular, MongoDB, and TypeScript, has allowed me to develop and
              manage impactful projects over the past three years..
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              In my recent role, I successfully worked on key projects such as
              AdminPortal and Seller Account Management, where I implemented
              complex functionalities like order management, product management,
              and user authentication. Additionally, I integrated features that
              facilitate seamless transactions and efficient data management.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My experience also encompasses working with React, MySQL, and
              Salesforce technologies, where I developed API solutions, enhanced
              security measures, and streamlined business processes. This
              diverse background has equipped me with a strong technical
              foundation and a problem-solving mindset, making me well-suited to
              contribute effectively to any team.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
