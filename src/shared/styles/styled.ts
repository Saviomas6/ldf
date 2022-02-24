import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { DPSecondButton,ButtonWrapper,Button } from "../components/button/Button";
import { InputField, Label, ModalInputWrapper } from "../components/inputfield/styles";
import {colors, screenSizes } from "./theme";

export const CustomModal = styled.div`
   position: fixed;
   overflow: auto;
   top:0px;
   right: 0px;
   display:flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.div`
  box-shadow: 0px 16px 150px #23217b;
  border: 4px solid transparent;
  border-radius: 16px;
  background: linear-gradient(to bottom, #000821, #000821),
    linear-gradient(to bottom, #044ffe, #8802de);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  width: 560px;
  height: 641px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
margin-top: 80px;
  @media only screen and (max-width:${screenSizes.mediaS}px) {   
    width: 320px;
  height: 430px;
  margin-top: 60px;
    }
`;

export const CustomModal1 = styled(CustomModal)`
z-index: 100;
align-items: flex-start;

 /* margin-top: 80px;  */
@media only screen and (max-width:${screenSizes.mediaS}px) {   
   /* margin-top: 60px; */
 

    }
`;

export const ModalClose = styled.img`
     cursor: pointer;
    position: absolute;
    top:20px;
    right: 24px;
    width: 43px;
  height: 43px;
    @media only screen and (max-width:${screenSizes.mediaS}px) {   
    width: 24px;
  height: 24px;
  top:20px;
  right: 24px;
    }
  
`;

export const ModalHeadingWrapper = styled.div`
height: 90px;
`;

export const ModalHeading = styled.div`
text-transform: uppercase;
font-family: Bold;
font-size: 32px;
    text-align: center;
    margin-top: 21px;
    color: ${colors.white};
    @media only screen and (max-width:${screenSizes.mediaS}px) {   
      font-size: 16px;
    margin-top: 20px;
    }

`;

export const DottedImageWrapper = styled.div`
  margin-bottom: 20px;
  @media only screen and (max-width:${screenSizes.mediaS}px) {   
 display: none;
    }
`;


export const DottedImage = styled.img`
margin: 5px;
`;

export const WithdrawAmountWrapper = styled.div`
 width:100%;
 height: 130px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 color: ${colors.white};
`;

export const DAmount = styled.span`
font-family: Regular;
font-size: 18px;
@media only screen and (max-width:${screenSizes.mediaS}px) {   
  font-size: 14px;
    }
`;
export const NAmount = styled.span`
display: block;
font-family: Bold;
font-size: 24px;
color: ${colors.sliderBackground};
@media only screen and (max-width:${screenSizes.mediaS}px) {   
  font-size: 21px;
    }
`;

export const LPContentWrapper = styled.div`
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  width:90%;
  @media only screen and (max-width:${screenSizes.mediaS}px) {   
    height: 200px;   
    width:95%;
    }
`;

export const LPLeftCont = styled.div`
  line-height: 45px;
  @media only screen and (max-width:${screenSizes.mediaS}px) {   
    line-height: 30px;
    }

`;

export const LPList = styled.li`
  font-family: Regular;
  text-transform: capitalize;
  font-size: 18px;
  list-style: none;
  color: ${colors.white};
  @media only screen and (max-width:${screenSizes.mediaS}px) {   
  font-family: Regular;
  font-size: 14px;
    }
`;

export const DownArrow = styled.img`
  width: 10px;
  height: 10.28px;
  margin-left: 10px;
`;

export const DashboardImageIcon = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 36px;
  border: none;
 margin-right: 10px;
  @media only screen and (max-width:${screenSizes.mediaXL}px) {   
display: none;
}
@media only screen and (min-width:${screenSizes.mediaXL}px) {   
display: inline-block;
}
`;
export const DashboardViewButton = styled.button`
  width: 81px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid ${colors.tablebutborder};
  background-color: ${colors.cetaceanBlue};
  font-size: 14px;
  line-height: 16.41px;
  text-align: center;
  font-family: Regular;
  cursor: pointer;
  color: ${colors.white};
  &:hover {
    background: ${colors.mourningBlue};
  }
`;


export const DashboardNumberButton = styled.button`
width: 60px;
height: 32px;
color: ${colors.white};
background-color: ${colors.sliderBackground};
border-radius: 16px;
text-align: center;
font-family: Regular;
font-size: 18px;
line-height: 21px;
border:none;
`;

 
export const DPSecondContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const DPSecondChildContainer = styled.div`
  width: 94%;
`;

export const DPSecondSubChildCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DPSecondArrowGroup = styled.div`
display: flex;
align-items: center;
`;

export const StyledArrowLink = styled(Link)`
  text-decoration: none;
`;

export const DPSecondBackArrow = styled.img`
  height: 26px;
  width: 26px;
`;
export const DPSecondBAText = styled.span`
  font-size: 24px;
 font-family: Medium;
  color: ${colors.white};
  margin-left: 5px;
`;

export const WalletModalContainer = styled(ModalContainer)`
  width: 400px;
  height: 380px;
  border-radius: 25px;
  padding: 0px;
  margin-top: 0px;
  @media only screen and (max-width:${screenSizes.mediaXS}px) {   
    width: 350px;
    }
`;
export const WalletHeadingWrapper = styled.div`
  height: 60px;
`;
export const WalletModalClose = styled(ModalClose)`
  height: 32px;
  width: 32px;
`;
export const WalletHeading = styled.div`
  font-family: Regular;
  font-size: 24px;
  color: ${colors.white};
  margin-top: 10px;
  text-align:left;
`;
export const WalletHorizontalRow = styled.hr`
  width: 100%;
  border: 1px solid ${colors.wallethr};
`;
export const WalletHeadingContainer = styled.div`
  padding: 15px;
`;

export const WalletContent1 = styled.div`
  background-color: ${colors.walletcontent};
  height: 53px;
  border-radius: 4px;
  align-items: center;
  display: flex;
  color: ${colors.white};
  cursor: pointer;
  position: relative;
`;
export const WalletContent1Child = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
export const WalletContentIcon = styled.img`
  width: 28px;
  height: 26px;
`;
export const WalletContentText = styled.div`
  font-family: Regular;
  font-size: 16px;
  margin-left: 15px;
`;

export const WalletModalContent = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const WalletModalContentWrapper = styled.div`
  padding: 15px;
`;


export const SideNavImageAvatar = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;
export const SideNavAddressText = styled.span`
  font-size: 14px;
  font-family: Bold;
`;
export const SideNavSetLogo = styled.img`
  height: 21px;
  width: 21px;
  cursor: pointer;
`;
export const ColumnFirstHeader = styled.div`
   display: flex;
   align-items:center;
margin-left: 25px;
`;
export const ColumnFirstHeader1 = styled.div`
   display: flex;
   align-items:center;
margin-left: 10px;
`;
export const TableDownUpArrow = styled.img`   
    
  @media only screen and (max-width: ${screenSizes.mediaXL}px) {
    margin-left: 5px;
  cursor: pointer;
  }
  @media only screen and (min-width: ${screenSizes.mediaXL}px) {
  display: none;
  }
`;
export const KycButton = styled(DashboardViewButton)`
  background-color:${colors.mourningBlue} ;
  border:none;
`;

export const KycResButton1 = styled(KycButton)`
  margin-left: 7px;
  background-color: #142A63;
  border: 1px solid ${colors.kycbuttonborder};
  :hover{
      background-color: #142A63;
  }
`;



//LP
export const LPModalContainer = styled(ModalContainer)`
  width: 640px;
  height: 706px;
  @media only screen and (max-width: ${screenSizes.mediaS}px) {   
  width: 320px;
  height: 533px;
  padding: 8px;
}
`;

export const LPModalInputWrapper = styled(ModalInputWrapper)`
width: 82%;
margin-left: 25px;
position: relative;
@media only screen and (max-width: ${screenSizes.mediaS}px) {   
width:93%;
margin-left: 0px;
height: 70px;
}
`;

export const LPInputField = styled(InputField)`
display: inline;
`;


export const LPButtonWrapper = styled.span`
position: absolute;
top: 34px;
right: -17px;
@media only screen and (max-width: ${screenSizes.mediaS}px) {   
  top: 29px;
    right: -17px;
}
`;

export const LPInputButton = styled.button`
width: 103px;
height: 56px;
border-radius: 28px;
background-color:${colors.sliderBackground};
font-size: 18px;
text-align: center;
font-family: Medium;
border:${colors.sliderBackground};
color: ${colors.white};
cursor: pointer;
@media only screen and (max-width: ${screenSizes.mediaS}px) {   
 border-radius: 6px;
 font-size: 16px; 
 height: 40px;
 width: 60px;
}
`;

export const LPLabel = styled(Label)`
display: block;
text-align:left;
`;

export const LPTextWrapper = styled.div`
text-align: justify;
@media only screen and (max-width: ${screenSizes.mediaS}px) {   
height: 80px;
margin-top: 20px;
}
`;

export const Paragraph = styled.p`
  font-family: Regular;
  font-size: 16px;
  line-height: 18px;
  color: ${colors.white}; 
  @media only screen and (max-width: ${screenSizes.mediaS}px) {   
    font-size: 12px;
}
`;

export const LPContent = styled.div`
  padding: 18px;
`;

export const LPResizeButton = styled(ButtonWrapper)`
 @media only screen and (max-width: ${screenSizes.mediaS}px) {   
   display: none;
}
`;

export const LPResizeButton1 = styled(ButtonWrapper)`
align-items: center;
display: none;
  @media only screen and (max-width: ${screenSizes.mediaS}px) {   
   display: flex;
}
`;


export const LPResponsiveButton = styled(Button)`
width: 95%;
`;


//spinner
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const SpinnerWrapper = styled.div`
`;

export const Spinner = styled.img`
  animation: ${rotate} 0.5s linear infinite;
  height: 18px;
  width: 18px;
  position: relative;
  top:1px;
  left:9px;
  @media only screen and (max-width: ${screenSizes.mediaS}px) {
    top:3px ;
}
`;

export const ThreeDotMainContainer = styled.div`
display: flex;
justify-content:center;
`;
