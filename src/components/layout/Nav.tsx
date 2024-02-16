import React, { useState } from 'react';
import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
`;

export const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #333;
    position: absolute;
    top: 100%; /* Adjusted to be offscreen initially */
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  }
`;

export const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const HamburgerIcon = styled.div`
  background-color: #fff;
  width: 30px;
  height: 3px;
  margin: 6px 0;
  transition: 0.4s;
`;

export const HamburgerMenu = styled.div`
  
`;


export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <Navbar>
        <div>Logo</div>
        <NavLinks isOpen={isOpen}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </NavLinks>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <HamburgerIcon />
          <HamburgerIcon />
          <HamburgerIcon />
        </Hamburger>
      </Navbar>
    );
  };