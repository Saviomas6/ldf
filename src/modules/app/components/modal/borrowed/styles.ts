import styled from "styled-components";
import { ModalContainer,ModalClose } from "../../../../../shared/styles/styled";
import { InputField, ModalInputWrapper } from "../../../../../shared/components/inputfield/styles";
import { Button, ButtonWrapper } from "../../../../../shared/components/button";
import { colors, screenSizes } from "../../../../../shared/styles/theme";
export const BorrowModalContainer = styled(ModalContainer)`
padding: 0;
@media only screen and (max-width:${screenSizes.mediaM}px) {   
  width: 320px;
height: 607px;
    }
    @media only screen and (min-width:${screenSizes.mediaM}px) {   
      width: 1040px;
      height: 669px;
    }
`;

export const BorrowModalClose = styled(ModalClose)`
@media only screen and (max-width:${screenSizes.mediaM}px) {   
  width: 24px;
  height: 24px;
    }
    @media only screen and (min-width:${screenSizes.mediaM}px) {   
  width:43px;
  height: 43px;
    }
`;
export const BorrowInputWrapper = styled(ModalInputWrapper)`
display: flex;
justify-content: center;
@media only screen and (max-width:${screenSizes.mediaM}px) {   
  height: 60px;
    }
    @media only screen and (min-width:${screenSizes.mediaM}px) {   
      height: 80px;
    }
`;
export const BorrowButtonWrapper = styled(ButtonWrapper)`
@media only screen and (max-width:${screenSizes.mediaM}px) {   
  height: 90px;
    }
    @media only screen and (min-width:${screenSizes.mediaM}px) {   
      height: 110px;
    }
`;

export const BorrowFirstWrapper = styled.div`
  color: ${colors.white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 150px;
  justify-items: center;
  align-items: center;
`;

export const FirstWrapper = styled.div`
    height: 80px;
    width: 210px;
    font-family: Bold;
    text-align: start;
    @media only screen and (max-width:${screenSizes.mediaM}px) {   
  display: none;
    }
    @media only screen and (min-width:${screenSizes.mediaM}px) {   
  display: inline-block;
    }
`;
export const FirstWrapperText1 = styled.p`
 font-size: 16px;
`;
export const FirstWrapperText2 = styled.p`
 font-size: 21px;
 line-height: 10px;
`;
export const BorrowSecondContainer = styled.div`

  @media only screen and (max-width:${screenSizes.mediaM}px) {   
  display: none;
    }
    @media only screen and (min-width:${screenSizes.mediaM}px) {   
  background-color: ${colors.tableheadercol};
  color: ${colors.white};
  width: 100%;
  height: 118px;
  display: flex;
  align-items: center;
    }
`;
export const SecondContainer = styled.div`
  font-size: 16px;
  font-family:Regular;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 65px;
`;


export const BorrowThirdContainer = styled.div`
  width: 100%;
  text-align: center;
  color: ${colors.white};
  @media only screen and (max-width:${screenSizes.mediaM}px) {   
    font-family: Regular;
  font-size: 12px;
    }
    @media only screen and (min-width:${screenSizes.mediaM}px) {   
      font-family: Regular;
  font-size: 16px;
    }
`;
export const BorrowFourthContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${colors.white};
  @media only screen and (max-width:${screenSizes.mediaM}px) {   
  height: 300px;
    }
    @media only screen and (min-width:${screenSizes.mediaM}px) {   
  height: 320px;
    }
`;
export const AmountText = styled.div``;
export const AmountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-family: Medium;
  @media only screen and (max-width:${screenSizes.mediaM}px) {   
  font-size:14px ;
    }
    @media only screen and (min-width:${screenSizes.mediaM}px) {   
      font-size:18px ;
    }

`;
export const BorrowFourthSubContainer = styled.div`
  @media only screen and (max-width:${screenSizes.mediaM}px) {   
  width: 90%;
  margin-top: 30px;
    }
    @media only screen and (min-width:${screenSizes.mediaM}px) {   
      width: 50%;
  margin-top: 40px;
    }
`;
export const BorrowRangeWrapper = styled.div`
display: flex;
height: 40px;
`;

export const BorrowFirstWrapperRes = styled.div`
height: 180px;
@media only screen and (min-width:${screenSizes.mediaM}px) {   
display: none;
    }
`;
export const BorrowFirstWrapperSub1Res = styled.div`
text-align: center;
margin-top:45px;
`;

export const BorrowFirstWrapperResText1 = styled.div`
font-size: 16px;
font-family: Bold;
color: ${colors.white};
`;
export const BorrowFirstWrapperResText2 = styled.div`
font-size: 21px;
font-family: Bold;
color: ${colors.sliderBackground};
line-height: 30px;
`;

export const BorrowFirstWrapperSub2Res = styled.div`
margin-top:15px;
height: 54px;
display: flex;
justify-content: center;
`;
export const BorrowFirstWrapperSub2ChildRes = styled.div`
display: flex;
align-items: center;
`;

export const BorrowFirstWrapperSub2Child1Res = styled.div`
padding: 5px;
text-align: right;
border-right: 3px solid;
  border-image: linear-gradient(
      to bottom,
      #010a2b,
      #001b4f,
      #002875,
      #00349d,
      #0040c6,
      #0040c6,
      #0040c7,
      #0040c7,
      #00349e,
      #002877,
      #001b51,
      #030c2e
    )
    10;
`;
export const BorrowFirstWrapperSub2Child1Text1 = styled.div`
font-family: Medium;
font-size: 12px;
color: ${colors.white};
`;

export const BorrowFirstWrapperSub2Child1Text2 = styled.div`
  font-family: Bold;
  font-size: 18px;
  color: ${colors.white};
`;




export const BorrowFirstWrapperSub2Child2Res = styled.div`
padding: 5px;
color: ${colors.white};
text-align: start;
`;

export const BorrowSecondWrapperRes = styled.div`
text-align: center;
font-family: Medium;
font-size: 14px;
color:${colors.white};
background-color: ${colors.walletcontent};
@media only screen and (min-width:${screenSizes.mediaM}px) {   
display: none;
    }
`;
export const BorrowInputTextField = styled(InputField)`
width: 100%;
  @media only screen and (max-width:${screenSizes.mediaM}px) {   
    font-size: 14px;
    border-radius: 6px;
    height: 40px;
    }
    @media only screen and (min-width:${screenSizes.mediaM}px) {   
  height: 56px;
  font-size: 18px;
  border-radius: 28px;
    }
 
`;
export const BorrowButtonRes = styled(Button)`
  @media only screen and (max-width:${screenSizes.mediaM}px) {   
    width: 100%;
    padding: 15px 15px;
    font-size: 16px;
    }
    @media only screen and (min-width:${screenSizes.mediaM}px) { 
      width: 60%;  
      padding: 20px 75px;
      font-size: 21px;
    }
`;

