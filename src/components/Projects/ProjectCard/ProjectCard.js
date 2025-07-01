import React, { useState } from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
  FilterGroup,
  TypeBadge,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";

const ProjectCard = () => {
  const [filter, setFilter] = useState("All");

  const filteredList =
    filter === "All"
      ? ProjectList
      : ProjectList.filter((proj) => proj.type === filter);

  return (
    <>
      <FilterGroup>
        {["All", "Web", "Mobile"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={filter === item ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </FilterGroup>

      {filteredList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4>
                {list.title} <TypeBadge type={list.type}>{list.type}</TypeBadge>
              </h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github_url && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                {list.demo_url && (
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit ➜
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
};

export default ProjectCard;
