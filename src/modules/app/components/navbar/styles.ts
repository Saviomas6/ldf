import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, screenSizes } from "../../../../shared/styles/theme";
export const NavbarWrapper = styled.div`
color: ${colors.white};
display: flex;
align-items: center;
background-color: rgba(4, 16, 48, 0.2);
position :sticky ;
top: 0;
z-index: 10;
  @media only screen and (max-width: ${screenSizes.mediaM}px) {  
    height: 47px;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    height: 66px;
  }
`;
export const LogoText = styled.span`
  color: ${colors.white};
  font-family: Regular;
  font-size: 28.44px;
`;
export const LogoImage = styled.img`
  margin-right: 20px;
  margin-bottom: 3px;
  display: inline-block;
  cursor: pointer;
  @media only screen and (max-width: ${screenSizes.mediaM}px) {
    display: inline-block;
    width: 26px;
  height: 26px;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    margin-right: 10px;
    width: 40px;
  height: 40px;
  }
  @media only screen and (min-width: ${screenSizes.mediaL}px) {
    margin-right: 20px;
  }
`;
export const LogoWrapper = styled.div`
  @media only screen and (max-width: ${screenSizes.mediaM}px) {
    display: none;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    display: flex;
    margin-left: 10px;
    align-items: center;
  }
  @media only screen and (min-width: ${screenSizes.mediaL}px) {
      display: flex;
    margin-left: 40px;
  }
`;
export const NavTabs = styled.div`
  @media only screen and (max-width: ${screenSizes.mediaM}px) {
    display: none;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    display: grid;
    grid-template-columns: repeat(7, auto);
    list-style: none;
    align-items: center;
    width: 62%;
    margin-left: 5px;
    text-align: center;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Medium;
  color: ${colors.white};
  &:hover {
    color: ${colors.white};
  }
`;

export const NavTab = styled.li`
  font-size: 15px;
`;
export const NavButton = styled.button`
  border: none;
  background: linear-gradient(
    82.97deg,
    #003ec1 2.53%,
    #0052ff 48.71%,
    #8106dc 86.76%,
    #c77aff 97.53%
  );
  font-family: Bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  box-shadow: 0px 4px 4px #321a4c;
  border-radius: 22px;
  color: ${colors.white};
  cursor: pointer;
  padding: 10px 15px;
  position: absolute;
  top: 4px;
  right: 10px;
  @media only screen and (max-width: ${screenSizes.mediaM}px) {
    width: 142px;
  height: 37px;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    width: 142px;
  height: 44px;
top: 9px;
  }
  @media only screen and (min-width: ${screenSizes.mediaL}px) {
    display: inline-block;
    right: 40px;
  }
`;
export const IconBar = styled.img`
  @media only screen and (max-width: ${screenSizes.mediaM}px) {
    display: inline;
    width: 25px;
    height: 25px;
    margin-right: 15px;
    cursor: pointer;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    display: none;
  }
`;
export const IconWrapper = styled.div`
  @media only screen and (max-width: ${screenSizes.mediaM}px) {
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    display: none;
  }
`;
export const WalletMainAddressWrapper = styled.div`
  display: flex;  
  align-items: center;
 position: absolute;
 @media only screen and (max-width: ${screenSizes.mediaM}px) {
  right: 10px;
  }
 @media only screen and (min-width: ${screenSizes.mediaM}px) {
  right: 10px;
  }
  @media only screen and (min-width: ${screenSizes.mediaL}px) {
    right: 45px; 
  }

`;
export const WalletMainAddressSubContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const WalletAddressSettingLogoWrap = styled.div`
@media only screen and (max-width: ${screenSizes.mediaM}px) {
  margin-left: 10px;
  }
 @media only screen and (min-width: ${screenSizes.mediaM}px) {
  margin-left: 10px;
  }
  @media only screen and (min-width: ${screenSizes.mediaL}px) {
    margin-left: 15px;
  }
`;

//SideNav Style
interface SideProps {
  sidebar: boolean;
}
export const SidebarNavMain = styled.div<SideProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0,0,0,0.8);
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  z-index: 1000;
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    display: none;
  }
`;
export const SidebarNav = styled.div<SideProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: start;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 600ms;
  z-index: 1000;
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    display: none;
  }
`;
export const SideWrap1 = styled.div`
  width: 33%;
`;
export const SideWrap1ChildContainer = styled.div`
  height: 74px;
  display: flex;
  align-items: center;
`;
export const SidenavCloseLogo = styled.img`
  height: 19px;
  width: 19px;
  cursor: pointer;
`;
export const SideWrap1SubChildContainer = styled.div`
  display: flex;
  width: 85%;
  align-items: center;
  justify-content: end;
`;
//RightSidebar
interface Iprops {
  rightsidebar: boolean
}
export const RightSidebar = styled.div<Iprops>`
@media only screen and (max-width: ${screenSizes.mediaM}px) {
  display: none;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
background-color: rgba(0,0,0,0.8);
width: 100%;
height: 100%;
position: fixed;
top: 0;
right: ${({ rightsidebar }) => (rightsidebar ? "0" : "-100%")};
z-index: 1000;
display: flex;
  }
`;
export const RightNavSubDiv = styled.div<Iprops>`
  width: 437px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${({ rightsidebar }) => (rightsidebar ? "0" : "-100%")};
  transition: 600ms;
  background-color: ${colors.threedotmodal};
  overflow: auto;
`;
//RightSidebarRes
export const RightSidebarRes = styled.div<Iprops>`
@media only screen and (max-width: ${screenSizes.mediaM}px) {
background-color: rgba(0,0,0,0.8);
width: 100%;
height: 100%;
position: fixed;
left: 0;
bottom: ${({ rightsidebar }) => (rightsidebar ? "0" : "-100%")};
  }
@media only screen and (min-width: ${screenSizes.mediaM}px) {
display: none;
  }
`;
export const RightNavSubDivRes = styled.div<Iprops>`
  width: 100%;
  height: 75%;
  position: fixed;
  right: 0;
  bottom: ${({ rightsidebar }) => (rightsidebar ? "0" : "-100%")};
  transition: 600ms;
  background-color: ${colors.threedotmodal};
  overflow: auto;
`;
