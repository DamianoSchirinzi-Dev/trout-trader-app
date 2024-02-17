import { useState } from "react";
import styled from "styled-components";
import { sizes } from "../../helpers/sizes";

//Global
export type ScreenType = {
  isMobile: boolean;
};

export const StyledMainNavContainer = styled.nav`
  margin: 0rem 1rem;
`;

export const StyledIconButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  gap: 1.2rem;
`;

export const StyledSiteLogo = styled.button`
  z-index: 999;

  background: none;
  border: none;
  padding-left: 2.4rem;

  img {
    width: 200px;
  }

  @media (max-width: ${sizes.xSmall}) {
    img {
      width: 150px;
    }
  }
`;

export const StyledIconButton = styled.button`
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
    width: 20px;
  }

  div h2 {
    font-size: 0.8rem;
    font-weight: 400;
  }

  @media (max-width: ${sizes.xSmall}) {
    div img {
      width: 15px;
    }

    div h2 {
      font-size: 0.6rem;
    }
  }
`;

export const StyledCategoryContainer = styled.ul`
  display: flex;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  gap: 1.5rem;

  list-style-type: none;

  @media (min-width: ${sizes.medium}) {
    flex-wrap: no-wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const StyledCategoryLink = styled.li`
  display: inline-block;
  padding: 0.4rem 1.2rem;
  border-radius: 30%;
  box-shadow: 0px 1px rgba(0, 0, 0, 0.2);
  text-align: center;
  a {
    text-decoration: none;
    display: block;
  }

  @media (min-width: ${sizes.medium}) {
    padding: 0rem;
    border-radius: 0%;
    box-shadow: none;
    font-size: 0.8rem;
    a {
      text-decoration: none;
      display: block;
    }
  }
`;

export const StyledNavLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  list-style-type: none;

  @media (min-width: ${sizes.medium}) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    font-size: 0.85rem;
  }
`;

export const StyledLink = styled.li`
  a {
    text-decoration: none;
  }
`;

//Large Screens
export const StyledDesktopNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 0rem 14rem;
  gap: 0rem;

  @media (max-width: ${sizes.medium}) {
    display: none;
  }

  @media (max-width: ${sizes.large}) {
    margin: 0rem 4rem;
    gap: 1rem;
  }
`;

export const StyledLowerNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${sizes.large}) {
    gap: 1.4rem;
  }
`;

export const StyledLowerNavLeftContainer = styled.div`
  display: flex;

  @media (max-width: ${sizes.large}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }
`;

//Smaller Screens
export const StyledMobileNavContainer = styled.nav`
  display: none;

  @media (max-width: ${sizes.small}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 0.1rem;
  }
`;

//Hamburger
export const StyledHamburgerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
  cursor: pointer;
  z-index: 1000;

  h2{
    text-align: center;
    font-size: 0.8rem;
    font-weight: 400;
  }

  @media (max-width: ${sizes.xSmall}) {
    h2{
        font-size: 0.6rem;
      }
  }
`;

export const StyledHamburgerLine = styled.div`
  background-color: black;
  width: 1.5rem;
  height: 0.2rem;
  margin: 0.3rem 0 0;
  transition: 0.4s;

  @media (max-width: ${sizes.xSmall}) {
    width: 1.4rem;
    height: 0.15rem;
    margin: 0.25rem 0 0;
  }
`;

export const StyledHamburgerMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;

  background-color: white;

  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  z-index: 10; // Ensure it's above other content
`;

export const StyledHamburgerSignInSection = styled.div`
  width: 100%;
  padding-left: 2rem;
  box-shadow: 0px 1px rgba(0, 0, 0, 0.1);

  button {
    border: none;
    background: none;

    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 1.4rem;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

//Temp Data
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
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleMenu = () => setIsHamburgerOpen(!isHamburgerOpen);

  return (
    <StyledMainNavContainer>
      <StyledDesktopNavContainer>
        <StyledCategoryContainer>
          {topNavItems.map((item) => (
            <StyledCategoryLink key={item.id}>
              <a href={item.url} onClick={() => console.log("Click!")}>
                {item.name}
              </a>
            </StyledCategoryLink>
          ))}
        </StyledCategoryContainer>

        <StyledLowerNavContainer>
          <StyledLowerNavLeftContainer>
            <StyledSiteLogo onClick={() => console.log("Route me!")}>
              <img src="../images/icons/TroutTrader.png"></img>
            </StyledSiteLogo>
            <StyledNavLinksContainer>
              {bottomNavItems.map((item) => (
                <StyledLink key={item.id}>
                  <a href={item.url} onClick={() => console.log("Click!")}>
                    {item.name}
                  </a>
                </StyledLink>
              ))}
            </StyledNavLinksContainer>
          </StyledLowerNavLeftContainer>

          <StyledIconButtonsContainer>
            <StyledIconButton onClick={() => console.log("Save me!")}>
              <div>
                <img src="../images/icons/heart.png"></img>
                <h2>Saved</h2>
              </div>
            </StyledIconButton>
            <StyledIconButton onClick={() => console.log("Sign me!")}>
              <div>
                <img src="../images/icons/user.png"></img>
                <h2>Sign in</h2>
              </div>
            </StyledIconButton>
          </StyledIconButtonsContainer>
        </StyledLowerNavContainer>
      </StyledDesktopNavContainer>

      <StyledMobileNavContainer>
        <StyledIconButtonsContainer>
          <StyledHamburgerButton onClick={toggleMenu}>
            <StyledHamburgerLine />
            <StyledHamburgerLine />
            <StyledHamburgerLine />
            <h2>Menu</h2>
          </StyledHamburgerButton>
          <StyledIconButton onClick={() => console.log("Save me!")}>
            <div>
              <img src="../images/icons/package.png"></img>
              <h2>Sell</h2>
            </div>
          </StyledIconButton>
        </StyledIconButtonsContainer>

        <StyledSiteLogo onClick={() => console.log("Route me!")}>
          <img src="../images/icons/TroutTrader.png"></img>
        </StyledSiteLogo>

        <StyledIconButtonsContainer>
          <StyledIconButton onClick={() => console.log("Save me!")}>
            <div>
              <img src="../images/icons/heart.png"></img>
              <h2>Saved</h2>
            </div>
          </StyledIconButton>
          <StyledIconButton onClick={() => console.log("Sign me!")}>
            <div>
              <img src="../images/icons/user.png"></img>
              <h2>Sign in</h2>
            </div>
          </StyledIconButton>
        </StyledIconButtonsContainer>

        <StyledHamburgerMenu isOpen={isHamburgerOpen}>
          <StyledHamburgerSignInSection>
            <button>
              <img src="../images/icons/heart.png"></img>
              <h2>Sign up or sign in</h2>
            </button>
          </StyledHamburgerSignInSection>

          <StyledCategoryContainer>
            {topNavItems.map((item) => (
              <StyledCategoryLink key={item.id}>
                <a href={item.url} onClick={() => console.log("Click!")}>
                  {item.name}
                </a>
              </StyledCategoryLink>
            ))}
          </StyledCategoryContainer>

          <StyledNavLinksContainer>
            {bottomNavItems.map((item) => (
              <StyledLink key={item.id}>
                <a href={item.url} onClick={() => console.log("Click!")}>
                  {item.name}
                </a>
              </StyledLink>
            ))}
          </StyledNavLinksContainer>
        </StyledHamburgerMenu>
      </StyledMobileNavContainer>
    </StyledMainNavContainer>
  );
};
