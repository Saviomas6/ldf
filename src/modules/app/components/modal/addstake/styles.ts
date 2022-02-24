import styled from "styled-components";
import { Button } from "../../../../../shared/components/button";
import { screenSizes,colors } from "../../../../../shared/styles/theme";


export const InputFieldtext = styled.span`
display: block;
font-family: Medium;
font-size: 18px;
line-height: 26px;
color: ${colors.white};
margin-top: 20px;
@media only screen and (max-width:${screenSizes.mediaS}px) {   
  margin-top: 8px;
  font-size: 14px;
    }
`;
export const TimelineButtonWrapper = styled.div`
  width: 100%;
  height: 310px;
  margin-top: 50px;
  display: flex;
flex-direction: column;
justify-content: end;
align-items: center;
@media only screen and (max-width:${screenSizes.mediaS}px) {   
  margin-top: 12px;
    }
`;
export const ButtonWrap = styled.div`
display: flex;
flex-direction: row;
justify-content:space-evenly;
flex-wrap: wrap;
width: 100%;
`;

export const Button1 = styled(Button)`
display: block;
@media only screen and (max-width:${screenSizes.mediaS}px) {   
margin-top: 30px;
    }
`;