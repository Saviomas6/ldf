import styled from "styled-components";
import { Button } from "../../../../shared/components/button";
import { TableHeaderWrapper } from "../../../../shared/components/table/styles";
import { colors, screenSizes } from "../../../../shared/styles/theme";


export const KycContent = styled.div`
  background-color: ${colors.cetaceanBlue};
  @media only screen and (max-width: ${screenSizes.mediaM}px) {
    min-height: 450px;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    min-height: 500px;
  }
`;
export const KycChildContent = styled.div`
display: flex;
justify-content: center;
`;

export const KycContentSubChild1 = styled.div`
  font-size: 18px;
  color: ${colors.white};
  font-family: Bold;
  @media only screen and (max-width: ${screenSizes.mediaM}px) {
  display: none;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    display: inline-block;
  }
`;
export const KycContentSubChild2 = styled.div`
  color: ${colors.white};
  @media only screen and (max-width: ${screenSizes.mediaM}px) {
    font-size: 14px;
    font-family: Regular;
    line-height: 21px;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    font-family: Bold;
  line-height: 36px;
  margin-top: 10px;
  font-size: 18px;
  }
`;
export const KycSubChildContent = styled.div`
 width: 90%;
min-height: 400px;
@media only screen and (max-width: ${screenSizes.mediaM}px) {
  margin-top: 15px;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    margin-top: 50px;
  }
`;
export const KycHR = styled.hr`
 height: 0; 
  border: 0; 
  border-top: 2px solid ${colors.black}; 
  @media only screen and (max-width: ${screenSizes.mediaM}px) {
  display: none;
  }
`;
export const KycButtonWrapper = styled.div`

@media only screen and (max-width: ${screenSizes.mediaM}px) {
  display: none;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    height: 150px;
width: 97%;
display: flex;
align-items: flex-end;
justify-content: flex-end;
  }
`;
export const KycButton1 = styled(Button)`
margin-left: 25px;
`;
export const KycResFirstContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
@media only screen and (min-width: ${screenSizes.mediaM}px) {
  display: none;
  }
`;
export const KycResFirstChildCont = styled.div`
width: 94%;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const KycResFirstContText = styled.span`
    font-size: 14px;
  color: ${colors.white};
  font-family: Bold;
`;
export const KycTableHeaderWrapper = styled(TableHeaderWrapper)`
  @media only screen and (max-width: ${screenSizes.mediaM}px) {
   height: 35px;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
   height: 78px;
  }
`;
export const KycTableHeaderWrapperChild1 = styled.div`
@media only screen and (max-width: ${screenSizes.mediaM}px) {
   display: none;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    display: inline-block;
  }
`;
export const KycTableHeaderWrapperChild2 = styled.div`
@media only screen and (max-width: ${screenSizes.mediaM}px) {
  display: none;
  }
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
    display: inline-block;
  }
`;
export const KycTableHeaderText = styled.div`
font-family: Medium;
font-size: 14px;
color: ${colors.white};
@media only screen and (min-width: ${screenSizes.mediaM}px) {
  display: none;
  }
`;

export const KycResButtonWrapper = styled.div`
  height: 55px;
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: end;
  @media only screen and (min-width: ${screenSizes.mediaM}px) {
  display: none;
  }
`;

