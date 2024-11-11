import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../config/firebase"; // Adjust the import path if necessary
import { collection, onSnapshot } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHiking,
  faPalette,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faCode: faCode,
  faHiking: faHiking,
  faPalette: faPalette,
  faBriefcase: faBriefcase,
  faGraduationCap: faGraduationCap,
};

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

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [academicHistory, setAcademicHistory] = useState([]);

  useEffect(() => {
    const aboutCollection = collection(db, "about");
    const experienceCollection = collection(db, "experience");
    const academicCollection = collection(db, "academicHistory");

    // Real-time listener for 'about' collection
    const unsubscribeAbout = onSnapshot(aboutCollection, (snapshot) => {
      const aboutList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAboutData(aboutList);
    });

    // Real-time listener for 'experience' collection
    const unsubscribeExperience = onSnapshot(
      experienceCollection,
      (snapshot) => {
        const experienceList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setExperienceData(experienceList);
      }
    );

    // Real-time listener for 'academicHistory' collection
    const unsubscribeAcademic = onSnapshot(academicCollection, (snapshot) => {
      const academicList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAcademicHistory(academicList);
    });

    // Clean up listeners on unmount
    return () => {
      unsubscribeAbout();
      unsubscribeExperience();
      unsubscribeAcademic();
    };
  }, []);

  return (
    <>
      <AboutContainer id="about">
        <Title>About Me</Title>
        <BoxGrid>
          {aboutData.map((item) => (
            <AboutBox key={item.id}>
              {/* Render icon based on the icon name from Firestore */}
              <Icon icon={iconMap[item.icon]} />
              <BoxTitle>{item.title}</BoxTitle>
              <BoxContent>{item.content}</BoxContent>
            </AboutBox>
          ))}
        </BoxGrid>
      </AboutContainer>

      <ExperienceSection id="experience">
        <Title>Experience & Academic History</Title>

        <SectionTitle>
          <SectionIcon icon={faBriefcase} />
          Experience
        </SectionTitle>
        {experienceData.map((exp) => (
          <SectionContent key={exp.id}>{exp.content}</SectionContent>
        ))}

        <SectionTitle>
          <SectionIcon icon={faGraduationCap} />
          Academic History
        </SectionTitle>
        {academicHistory.map((edu) => (
          <SectionContent key={edu.id}>{edu.content}</SectionContent>
        ))}
      </ExperienceSection>
    </>
  );
};

export default About;
