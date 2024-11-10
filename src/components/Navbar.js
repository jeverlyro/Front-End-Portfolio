// components/Navbar.js
import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1c1c1c;
  color: #faf3e0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #faf3e0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: #faf3e0;
  font-size: 1rem;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: #ff6b6b;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ff6b6b;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo>Portfolio</Logo>
    <NavLinks>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Works</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </NavLinks>
  </NavbarContainer>
);

export default Navbar;
