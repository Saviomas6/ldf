import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const DashboardFirstContainer = styled.div`
  display: grid;
  justify-content: center;
  @media only screen and (max-width: ${screenSizes.mediaXS}px) {
    grid-row-gap: 2px;
  }

  @media only screen and (min-width: ${screenSizes.mediaXS}px) {
    grid-template-columns: auto;
    grid-row-gap: 2px;
  }
  @media only screen and (min-width: ${screenSizes.mediaL}px) {
    grid-template-columns: auto auto auto ;
    grid-column-gap: 5px;
  }
`;

export const BLBContainer = styled.div`
  background: ${colors.cetaceanBlue};
  color: ${colors.white};
  border: 1px solid #08309b;
  @media only screen and (max-width: ${screenSizes.mediaXS}px) {
    width: 320px;
  height: 191px;
  margin-top: 5px;
  }
  @media only screen and (min-width: ${screenSizes.mediaXS}px) {
  width: 338px;
  height: 220px;
  margin-top: 10px;
  }
`;
export const BankingNodeSubContainer1 = styled.div`
font-family: Regular;
@media only screen and (max-width: ${screenSizes.mediaXS}px) {
  font-size: 18px;
  }
  @media only screen and (min-width: ${screenSizes.mediaXS}px) {
  font-size: 21px;
  }
`;
export const BankingNodeSubContainer2 = styled.div`
  font-family: Regular;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
   @media only screen and (max-width: ${screenSizes.mediaXS}px) {
  line-height: 12px;
  font-size: 16px;
  width: 85%;
  }
  @media only screen and (min-width: ${screenSizes.mediaXS}px) {
  font-size: 18px;
  line-height: 15px;
  width: 90%;
  }
`;
export const BankingNodeSubContainer3 = styled.div`
  font-family: Regular;
  color:${colors.sliderBackground};
  display: flex;
  @media only screen and (max-width: ${screenSizes.mediaXS}px) {
  font-size: 16px;
  margin-top: 20px;
  }
  @media only screen and (min-width: ${screenSizes.mediaXS}px) {
  font-size: 18px;
  margin-top: 30px;
  }
`;

export const CBNLink = styled.div`
  text-decoration: underline;
  cursor: pointer;
 @media only screen and (max-width: ${screenSizes.mediaXS}px) {
  width: 55%;
  }
  @media only screen and (min-width: ${screenSizes.mediaXS}px) {
    width: 100%;
  }
`;
export const DashBoardButtonWrapper = styled.div`
  @media only screen and (min-width: ${screenSizes.mediaXS}px) {
margin-top: 15px;
  }
`;
export const BLBSubContainer = styled.div`
padding: 20px;
`;
