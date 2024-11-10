import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "../assets/backgroundImage.gif";
import profileImage from "../assets/profileImage.gif";

const colorShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  width: 100%;
  height: 100vh;
  background: url(${backgroundImage}) center/cover no-repeat;
  position: relative;
  text-align: center;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #faf3e0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const AnimatedText = styled.span`
  background: linear-gradient(270deg, #ff6b6b, #feca57, #54a0ff, #5f27cd);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${colorShift} 3s ease infinite;
`;

const ProfilePicture = styled.div`
  width: 200px;
  height: 200px;
  background: url(${profileImage}) center/cover no-repeat;
  border-radius: 50%;
  border: 10px solid #faf3e0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  transition:
    transform 0.5s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #d9d9d9;
  margin-top: 0.5rem;
  max-width: 800px;
  animation: ${fadeIn} 1.5s ease-out;
`;

const FadeInSection = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(20px)"};
  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
`;

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <HomeContainer id="home">
      <FadeInSection ref={sectionRef} isVisible={isVisible}>
        <Content>
          <ProfilePicture />
          <Title>
            <AnimatedText>Hello !</AnimatedText>
          </Title>
          <Subtitle>
            My name is I Kadek Tresna Jeverly, I'm a student at Universitas
            Klabat, taking Informatics as my major, and I'm on my fifth
            semester. I'm interested in UI/UX Design and Graphics Design, and I
            want to implement my design skills in every way possible.
          </Subtitle>
        </Content>
      </FadeInSection>
    </HomeContainer>
  );
};

export default Home;
