import { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "./Wrapper";

const StyledNav = styled.nav`
  display: flex;
  width: 100%;

  padding: 0rem 16rem;

  @media (max-width: 1400px) {
    padding: 1rem 2rem; // Reduce padding on mobile
  }
`;

const StyledDesktopNavContainer = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: column;

  gap: 1rem;

  @media (max-width: 1400px) {
    display: none;
  }
`;

const StyledNavSection = styled.div`
  display: flex;
  gap: 1.4rem;

  align-items: center;

  @media (max-width: 1400px) {
    display: flex;
    flex-direction: column; // Stack items vertically on mobile
  }
`;

type LinksSectionProps = {
  fontSize: number;
};

const StyledLinksSection = styled.ul<LinksSectionProps>`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 1rem;
  padding: 0;
  margin: 0;

  list-style-type: none;

  font-size: ${(props) => props.fontSize}rem;
`;

const NavItemLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SiteLogo = styled.button`
  z-index: 999;

  background: none;
  border: none;
  padding: 0;

  img {
    width: 200px;
  }
`;

const StyledMobileNavContainer = styled.nav`
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1400px) {
    display: flex;
  }
`;

export const Hamburger = styled.div`
  display: none;
  z-index: 1000;

  @media (max-width: 1400px) {
    display: block;
    cursor: pointer;
  }
`;

export const HamburgerIcon = styled.div`
  background-color: black;
  width: 30px;
  height: 3px;
  margin: 6px 0;
  transition: 0.4s;
`;

export const HamburgerMenu = styled.div<{ isOpen: boolean }>`
  position: fixed; // Use fixed positioning to cover the viewport
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  z-index: 10; // Ensure it's above other content
`;

type MobileLinksSectionProps = {
  flexDirection?: "row" | "column";
  justifyContent: "center" | "flex-start" | "flex-end";
  alignItems: "center" | "flex-start" | "flex-end";
  gap: number;
};

const StyledMobileLinksSection = styled.ul<MobileLinksSectionProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap}rem;

  list-style-type: none;
`;

const StyledButtonsSection = styled.div`
  display: flex;
  align-items: center;

  gap: 1.4rem;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 1.8rem 1.4rem;
  font-size: 1.6rem;
  cursor: pointer;
  text-decoration: underline;

  // Additional styles for hover, focus, etc., can be added for better UX
  &:hover,
  &:focus {
    text-decoration: none; // Example: remove underline on hover/focus, adjust as needed
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div img {
    width: 25px;
  }

  div h2 {
    font-size: .4rem;
  }  
`;

const topNavItems = [
  { id: 1, name: "Trout", url: "/trout" },
  { id: 2, name: "Salmon", url: "/salmon" },
  { id: 3, name: "Cod", url: "/cod" },
  { id: 4, name: "Herring", url: "/herring" },
  { id: 5, name: "Mackerel", url: "/mackarel" },
  { id: 6, name: "Perch", url: "/perch" },
];

const bottomNavItems = [
  { id: 1, name: "Used Trout", url: "/trout" },
  { id: 2, name: "New Trout", url: "/salmon" },
  { id: 3, name: "Sell your Trout", url: "/cod" },
  { id: 4, name: "Value your Trout", url: "/cod" },
  { id: 5, name: "Trout reviews", url: "/herring" },
  { id: 6, name: "Trout Leasing", url: "/mackarel" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Wrapper
      width={100}
      height={10}
      flex={true}
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-start"
      margin="test"
      gap={40}
    >
      <StyledNav>
        <StyledDesktopNavContainer>
          <StyledLinksSection fontSize={0.75}>
            {topNavItems.map((item) => (
              <li key={item.id}>
                <NavItemLink href={item.url}>{item.name}</NavItemLink>
              </li>
            ))}
          </StyledLinksSection>
          <StyledNavSection>
            <SiteLogo onClick={() => console.log("Route me!")}>
              <img src="../images/icons/TroutTrader.png"></img>
            </SiteLogo>
            <StyledLinksSection fontSize={0.9}>
              {bottomNavItems.map((item) => (
                <li key={item.id}>
                  <NavItemLink href={item.url}>{item.name}</NavItemLink>
                </li>
              ))}
            </StyledLinksSection>
            <StyledButtonsSection>
              <IconButton onClick={() => console.log("Save me!")}>
                <div>
                  <img src="../images/icons/heart.png"></img>
                  <h2>Saved</h2>
                </div>
              </IconButton>
              <IconButton onClick={() => console.log("Sign me!")}>
                <div>
                  <img src="../images/icons/user.png"></img>
                  <h2>Sign in</h2>
                </div>
              </IconButton>
            </StyledButtonsSection>
          </StyledNavSection>
        </StyledDesktopNavContainer>

        <StyledMobileNavContainer>
          <StyledButtonsSection>
            <Hamburger onClick={toggleMenu}>
              <HamburgerIcon />
              <HamburgerIcon />
              <HamburgerIcon />
            </Hamburger>
            <a href="https://google.com">Sell</a>
          </StyledButtonsSection>

          <SiteLogo onClick={() => console.log("Route me!")}>
            <img src="../images/icons/TroutTrader.png"></img>
          </SiteLogo>

          <StyledButtonsSection>
              <IconButton onClick={() => console.log("Save me!")}>
                <div>
                  <img src="../images/icons/heart.png"></img>
                  <h2>Saved</h2>
                </div>
              </IconButton>
              <IconButton onClick={() => console.log("Sign me!")}>
                <div>
                  <img src="../images/icons/user.png"></img>
                  <h2>Sign in</h2>
                </div>
              </IconButton>
            </StyledButtonsSection>

          <HamburgerMenu isOpen={isMenuOpen}>
            <StyledButton>Sign up or sign in</StyledButton>
            <StyledMobileLinksSection
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={0.8}
            >
              {topNavItems.map((item) => (
                <li key={item.id}>
                  <NavItemLink href={item.url} onClick={toggleMenu}>
                    {item.name}
                  </NavItemLink>
                </li>
              ))}
            </StyledMobileLinksSection>
            <StyledMobileLinksSection
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap={1.4}
            >
              {bottomNavItems.map((item) => (
                <li key={item.id}>
                  <NavItemLink href={item.url} onClick={toggleMenu}>
                    {item.name}
                  </NavItemLink>
                </li>
              ))}
            </StyledMobileLinksSection>
          </HamburgerMenu>
        </StyledMobileNavContainer>
      </StyledNav>
    </Wrapper>
  );
};
