import React from "react";
import { useMediaQuery } from "react-responsive";
import GreenlandLogoImg from "../../assets/images/logo.png";
import styled from "styled-components";
// import { Logo } from "../logo";
// import { Accessibility } from "./accessibility";
// import { NavLinks } from "./navLinks";
// import { DeviceSize } from "../responsive";
// import { MobileNavLinks } from "./mobileNavLinks";
import {Link} from "react-router-dom"

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #ffffff;
  font-weight: 500;
`;
const NavbarContainer = styled.div`
  width: 100%;
  height: 45px;
  box-shadow: 0 2px 3px rgba(23, 246, 235, 0.507);
  display: flex;
  align-items: center;
  padding: 0 1em;
  background-color: black;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Navbar(props) {
  // const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
          <LogoWrapper>
            <Link className='nav-link' to='/'>
              <LogoImg>
                <img src={GreenlandLogoImg} alt="Greenland logo" />
              </LogoImg>
              <LogoText>Ethical Cities</LogoText>
            </Link>
          </LogoWrapper>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
                  data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                  aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className='navbar-nav mr-auto'>
                  <li className='nav-item active'>
                      <Link className='nav-link' to='/services'>
                          Services
                      </Link>
                  </li>
                  <li>
                    <Link className='nav-link' to='/movies'>
                      Moive
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-link' to='/aboutus'>
                      AboutUs
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-link' to='/services'>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-link' to='/faq'>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-link' to='/posts'>
                      Posts
                    </Link>
                  </li>
                  <li>
                    <Link className='nav-link' to='/addPost'>
                      Add Posts
                    </Link>
                  </li>
              </ul>
          </div>
      </nav>
    // <NavbarContainer>
    //   <LeftSection>
    //     <Logo />
    //   </LeftSection>
    //   <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
    //   <RightSection>
    //     {!isMobile && <Accessibility />}
    //     {isMobile && <MobileNavLinks />}
    //   </RightSection>
    // </NavbarContainer>
  );
}
