// components/Projects.js
import React from "react";
import styled from "styled-components";
import project1 from "../assets/projects/projects1.png";
import project2 from "../assets/projects/projects2.png";
import project3 from "../assets/projects/projects3.png";
import project4 from "../assets/projects/projects4.jpg";
import project5 from "../assets/projects/projects5.png";
import project6 from "../assets/projects/projects6.png";
import project7 from "../assets/projects/projects7.png";
import project8 from "../assets/projects/projects8.png";
import project9 from "../assets/projects/projects9.png";

const ProjectsContainer = styled.section`
  padding: 4rem 1rem;
  background-color: #181818;
  color: #e4ded3;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  margin: 1rem;
`;

const ProjectCard = styled.a`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1; /* Default aspect ratio */

  /* Adapt aspect ratio based on image's dimensions */
  &:has(img[width][height][width > height]) {
    aspect-ratio: 16 / 9;
  }

  &:has(img[width][height][width < height]) {
    aspect-ratio: 9 / 16;
  }

  &:hover .overlay {
    opacity: 1;
  }
  margin-bottom: 3rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #e4ded3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Works = () => {
  const projectData = [
    { image: project1, title: "UDL Lanyard 2.0 Poster", category: "GFX" },
    {
      image: project2,
      title: "ReadVerse Library",
      category: "UI/UX",
      link: "https://www.figma.com/design/7y7mlH6wvj3u5NEhv2AqRz/System-Analysis-%26-Design---Design?node-id=1-2&node-type=frame&t=DCuVxn03zW5O7mjy-0",
    },
    { image: project3, title: "Makima GFX", category: "GFX" },
    { image: project4, title: "Denji GFX", category: "GFX" },
    { image: project5, title: "Reze GFX", category: "GFX" },
    { image: project6, title: "Travis Scott", category: "GFX" },
    { image: project7, title: "Chapel Flyer", category: "GFX" },
    { image: project8, title: "ModURKeebs Webapp", category: "UI/UX" },
    { image: project9, title: "ModURKeebs Mobile App", category: "UI/UX" },
  ];

  const gfxProjects = projectData.filter(
    (project) => project.category === "GFX"
  );
  const uiuxProjects = projectData.filter(
    (project) => project.category === "UI/UX"
  );

  return (
    <ProjectsContainer id="projects">
      <Title>My Works</Title>

      <h3>GFX</h3>
      <ProjectGrid>
        {gfxProjects.map((project, index) => (
          <ProjectCard
            key={index}
            href={project.link || project.image}
            target="_blank"
          >
            <ProjectImage src={project.image} alt={project.title} />
            <Overlay className="overlay">{project.title}</Overlay>
          </ProjectCard>
        ))}
      </ProjectGrid>

      <h3>UI/UX</h3>
      <ProjectGrid>
        {uiuxProjects.map((project, index) => (
          <ProjectCard
            key={index}
            href={project.link || project.image}
            target="_blank"
          >
            <ProjectImage src={project.image} alt={project.title} />
            <Overlay className="overlay">{project.title}</Overlay>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Works;
