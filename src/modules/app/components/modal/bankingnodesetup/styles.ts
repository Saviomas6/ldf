import styled from "styled-components";
import { colors, screenSizes } from "../../../../../shared/styles/theme";

export const AvatarWrapper = styled.div`
width: 100%;
height: 230px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media only screen and (max-width:${screenSizes.mediaS}px) {   
  justify-content: start;
  height: 180px;
    }
`;

export const AvatarImg = styled.img`
border-radius: 12px;
width: 166px;
height: 166px;
@media only screen and (max-width:${screenSizes.mediaS}px) {   
  width: 112px;
height: 112px;
    }
`;

export const AvatarText = styled.span`
display: block;
font-family: Medium;
font-size: 18px;
margin-top: 4px;
color: ${colors.white};
@media only screen and (max-width:${screenSizes.mediaS}px) {   
      font-size: 14px;
    }
`;

