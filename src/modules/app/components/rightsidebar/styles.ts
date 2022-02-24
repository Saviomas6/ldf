import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const RightSideMainContainer = styled.div`

 @media only screen and (max-width: ${screenSizes.mediaM}px) {
  padding: 0px 10px;
 height: 540px;
 margin-top: 10px;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
  padding: 0px 15px;
 height: 700px;
 margin-top: 20px;
  }
`;
export const RightSideNavFirstContainer = styled.div`
height: 80px;
`;

export const RightSideNavFirstSub1Container = styled.div`
display: flex;
align-items: center;
`;
export const RightSideNavFirstSub1Child1Container = styled.div`
font-family: Medium;
font-size: 18px;
`;
export const RightSideNavFirstSub1Child2Container = styled.div`
 border: 1px solid ${colors.deepskyblue};
 border-radius: 25px;
 box-shadow:0px 0px 4px ${colors.white};
 color: ${colors.cyan};
padding: 1px 8px;
text-align: center;
font-family: Regular;
font-size: 14px;
display: inline-block;
margin-left: 8px;
cursor: pointer;
`;
export const RightSideNavFirstSub2Container = styled.div`
font-family: Bold;
font-size: 24px;
`;
export const RightSideNavSecondContainer = styled.div`
display: grid;
grid-row-gap: 5px;
grid-template-rows: auto auto auto;
`;

export const RightSideNavSecondSub1Container = styled.div`
background-color: ${colors.walletcontent};
height: 75px;
display: flex;
align-items: center;
text-align: right;
justify-content: space-between;
border-radius: 4px;
`;
export const RightSideNavSecondSub1Child1Container = styled.div`
display: flex;
align-items: center;
padding: 15px;
`;
export const RightSideNavTokenImage = styled.img`
  height: 36px;
  width: 36px;
  margin-right: 10px;
`;
export const RightSideNavTokenName = styled.span`
  font-family: Regular;
  font-size: 16px;
`;
export const RightSideNavSecondSub1Child2Container = styled.div`
padding: 15px;
`;
export const RightSideNavTokenAmmountText1 = styled.div`
   font-family: Regular;
  font-size: 16px;
  color: ${colors.tokenamount};

`;
export const RightSideNavTokenAmmountText2 = styled.div`
 font-family: Bold;
  font-size: 16px;
  color: ${colors.white};
`;

export const RightSideNavHorizontalRow = styled.hr`
border: 1px solid ${colors.mourningBlue};
margin-top: 15px;
`;

export const RightSideNavThirdContainer = styled.div`
background-color: ${colors.walletcontent};
height: 78px;
padding: 0px 15px;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 15px;
border-radius: 4px;
`;
export const RightSideNavThirdSub1Child = styled.span`
font-family: Regular;
font-size: 16px;
`;
export const RightSideNavThirdSub2Child = styled.span`
border-radius: 16px;
padding: 6px 27px;
font-family: Regular;
font-size: 14px;
cursor: pointer;
border: 1px solid transparent;
  background: linear-gradient(to bottom, ${colors.mourningBlue},${colors.mourningBlue}),
    linear-gradient(to bottom, #004AE6,#6C3DFF);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

export const SideNavDisconnectButton = styled(RightSideNavThirdSub2Child)`
 font-size: 16px;
`;
export const SideNavDisconnectButtonWrapper = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
@media only screen and (max-width: ${screenSizes.mediaM}px) {
  height: 15%;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
  height: 30%;
  }
`;
