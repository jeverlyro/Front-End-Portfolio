// components/About.js
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHiking,
  faPalette,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const AboutContainer = styled.section`
  padding: 4rem 1rem;
  background-color: #222;
  color: #e4ded3;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  margin-left: 3rem;
`;

const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const AboutBox = styled.div`
  background: #333;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #e4ded3;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const BoxTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0 0.5rem;
`;

const BoxContent = styled.p`
  font-size: 1rem;
  color: #aaa;
  width: 70%;
`;

const ExperienceSection = styled.section`
  padding: 4rem 1rem;
  background-color: #333;
  color: #e4ded3;
  text-align: left;
  max-width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin: 1rem 0 2rem;
  display: flex;
  align-items: center;
`;

const SectionIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: #ff6b6b;
  margin-right: 0.5rem;
  margin-left: 3rem;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin-left: 3rem;
`;

const About = () => (
  <>
    <AboutContainer id="about">
      <Title>About Me</Title>
      <BoxGrid>
        <AboutBox>
          <Icon icon={faCode} />
          <BoxTitle>Things I Like</BoxTitle>
          <BoxContent>Simplistic, Minimalism, Technology</BoxContent>
        </AboutBox>
        <AboutBox>
          <Icon icon={faHiking} />
          <BoxTitle>Hobbies</BoxTitle>
          <BoxContent>
            Gaming, Movies, Rap, Mechanical Keyboards, Comics
          </BoxContent>
        </AboutBox>
        <AboutBox>
          <Icon icon={faPalette} />
          <BoxTitle>Skills</BoxTitle>
          <BoxContent>
            HTML, CSS, JavaScript, React, React Native, UI/UX Design, Graphic
            Design
          </BoxContent>
        </AboutBox>
      </BoxGrid>
    </AboutContainer>

    <ExperienceSection id="experience">
      <Title>Experience & Academic History</Title>

      <SectionTitle>
        <SectionIcon icon={faBriefcase} />
        Experience
      </SectionTitle>
      <SectionContent>Freelance as Graphic Designer.</SectionContent>
      <SectionContent>
        Graphic Designer and Video Editor at Highschool Student Association.
      </SectionContent>
      <SectionContent>
        Graphic Designer at BEM UNKLAB in EDITOR GEMA Division.
      </SectionContent>
      <SectionContent>
        Graphic Designer at Computer Science Student Association in Multimedia
        Division.
      </SectionContent>
      <SectionContent>
        Graphic Designer at Voice of Computer Science in Multimedia Division.
      </SectionContent>
      <SectionContent>
        Graphic Designer at Voice of Computer Science in Multimedia Division.
      </SectionContent>
      <SectionContent>
        Secondary-Video Editor at Voice of Computer Science in Multimedia
        Division.
      </SectionContent>

      <SectionTitle>
        <SectionIcon icon={faGraduationCap} />
        Academic History
      </SectionTitle>
      <SectionContent>
        SDN 3 Werdhi Agung, Bolaang Mongondow Regency, North Sulawesi.
      </SectionContent>
      <SectionContent>
        SMPN 1 Werdhi Agung, Bolaang Mongondow Regency, North Sulawesi.
      </SectionContent>
      <SectionContent>
        SMA Swadharma Werdhi Agung, Bolaang Mongondow Regency, North Sulawesi.
      </SectionContent>
    </ExperienceSection>
  </>
);

export default About;
