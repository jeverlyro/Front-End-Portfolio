import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../config/firebase"; // Adjust the import path if necessary
import { doc, onSnapshot } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
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
  }
`;

const ContactDetails = styled.div`
  margin-top: 2rem;
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: center;
`;

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    address: "",
    github: "",
    discord: "",
    linkedin: "",
  });

  useEffect(() => {
    const contactDocRef = doc(db, "contact", "contactInfo"); // Replace "yourDocumentID" with the actual document ID

    // Real-time listener for contact information
    const unsubscribe = onSnapshot(contactDocRef, (doc) => {
      if (doc.exists()) {
        setContactInfo(doc.data());
      }
    });

    // Clean up listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <ContactContainer id="contact">
      <ContactTitle>Get in Touch</ContactTitle>
      <SocialIcons>
        <IconWrapper
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </IconWrapper>
        <IconWrapper
          href={contactInfo.discord}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </IconWrapper>
        <IconWrapper
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </IconWrapper>
      </SocialIcons>
      <ContactDetails>
        <p>{contactInfo.email}</p>
        <p>{contactInfo.phone}</p>
        <p>{contactInfo.address}</p>
      </ContactDetails>
    </ContactContainer>
  );
};

export default Contact;
