import styled from "styled-components";
import { ModalClose } from "../../styles/styled";
import { colors } from "../../styles/theme";
import { DPSecondButton } from "../button/Button";
export const ThreeDotOuterButtonWrapper = styled.div`
height: 80px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: 20px;
`;

export const ThreeDotButton = styled(DPSecondButton)`
border:1px solid ${colors.kycbuttonborder};
background-color: ${colors.threedotmodal};
`;

export const ThreeDotImg = styled.img`
height: 32px;
width: 32px;
cursor: pointer;
`;
export const ThreeDotMainWrapper = styled.div`
position: relative;
`;

export const ThreeDotWrapper = styled.div`
 position: absolute;
 right: 19px;
 top: -32px;
`;


export const ThreeDotOuter = styled.div`
height: 141px;
width: 166px;
border-radius: 4px;
background-color: ${colors.threedotmodal};
position: relative;
display: flex;
justify-content: center;
align-items: center;
`;
export const ThreeDotOuterModalClose = styled(ModalClose)`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`;