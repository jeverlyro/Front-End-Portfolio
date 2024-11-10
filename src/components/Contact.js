// components/Contact.js
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faDiscord,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #1c1c1c;
  color: #faf3e0;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const IconWrapper = styled.a`
  color: #faf3e0;
  font-size: 2rem;
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #ff6b6b;
    fa-flip: {true};
  }
`;

const ContactDetails = styled.div`
  margin-top: 2rem;
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: center;
`;

const Contact = () => (
  <ContactContainer id="contact">
    <ContactTitle>Get in Touch</ContactTitle>
    <SocialIcons>
      <IconWrapper
        href="https://github.com/jeverlyro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </IconWrapper>
      <IconWrapper
        href="https://instagram.com/jeverlyro"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </IconWrapper>
      <IconWrapper
        href="https://discord.com/users/366208551158415361"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faDiscord} />
      </IconWrapper>
      <IconWrapper
        href="https://www.linkedin.com/in/i-kadek-tresna-jeverly-331477264/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </IconWrapper>
    </SocialIcons>
    <ContactDetails>
      <p>ikadektresnajeverly10@gmail.com</p>
      <p>+62 858 2354 9380</p>
      <p>Airmadidi Bawah, Airmadidi, Minahasa Utara, Sulawesi Utara</p>
    </ContactDetails>
  </ContactContainer>
);

export default Contact;
