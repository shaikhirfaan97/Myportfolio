import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={["Hi, I'm Irfaan 👋", () => setShowSubtitle(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    "A Full-Stack Developer (4+ yrs exp) 💻",
                    1000,
                    "Built scalable web & mobile apps 📱",
                    1000,
                    "Let's build something amazing! 💡",
                    1000,
                    "A problem solver 🧠",
                    1000,
                    "An innovative thinker 💭",
                    1000,
                    "A....",
                    1000,
                    "A.... cool guy? 😎",
                    1000,
                    "Ok... 😅",
                    1000,
                    "Ok... I'm running out of ideas... 🤯",
                    1000,
                    "You're uh... 🤔",
                    1000,
                    "You're uh... still here? 👀",
                    1000,
                    "Ok, this has been fun, but I'm gonna restart the loop now... 🔄",
                    1000,
                    "See ya! 🙂",
                    500,
                    () => setShowScrollDown(true),
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image src="/coder.png" alt="man-svgrepo" />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>

        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img src="/scroll-down.svg" alt="scroll-down" />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}

export default Hero;
