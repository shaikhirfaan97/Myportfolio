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
              Hello! My name is <strong>Irfaan Shaikh</strong>, a passionate
              full-stack developer originally from Maharashtra. With over 4
              years of experience in building scalable and high-performance web
              applications, I specialize in both the MERN and MEAN stacks.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I've successfully delivered complex projects like{" "}
              <strong>Admin Portal</strong> and{" "}
              <strong>Seller Account Management</strong>, where I implemented
              order management, product workflows, user authentication, and
              seamless data handling features. I also contributed to mobile
              applications such as <strong>Whizzer Pro</strong>,{" "}
              <strong>Farmor Agent App</strong>, and{" "}
              <strong>Farmor Partner App</strong>, developing backend APIs and
              integrations to support real-time data flow, lead creation, and
              partner onboarding.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My expertise spans across technologies such as Node.js, Angular,
              React, MongoDB, MySQL, and TypeScript. I’ve also worked on cloud
              deployments with AWS, managed remote servers with PM2 and PuTTY,
              and contributed to Salesforce solutions using Apex, Visualforce,
              and Lightning.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              <h3>Professional Experience</h3>
              <ul>
                <li>
                  <strong>
                    Hyposoft Global Solutions (Mar 2023 – Present)
                  </strong>{" "}
                  – Full Stack Developer
                  <br />
                  Delivered modules for Admin Portal, Seller Account Management,
                  and Agent App using Angular, Node.js, MongoDB, and TypeScript.
                </li>
                <br />
                <li>
                  <strong>
                    Inkprog Technologies Pvt. Ltd. (Jun 2022 – Mar 2023)
                  </strong>{" "}
                  – MERN Stack Developer
                  <br />
                  Built scalable APIs and features for BeejNetwork and Ivy
                  Reality using React, Node.js, MySQL, and Sequelize.
                </li>
                <br />
                <li>
                  <strong>
                    Iqra Technology Pvt. Ltd. (Jun 2019 – Nov 2020)
                  </strong>{" "}
                  – Junior Salesforce Consultant
                  <br />
                  Developed UI components and process flows using Salesforce
                  Lightning, Apex, and Visualforce.
                </li>
              </ul>
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">Technologies I work with:</div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech className="tech">
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
