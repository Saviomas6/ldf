import styled from "styled-components";
import { ModalContainer } from "../../../../../shared/styles/styled";
import { ModalInputWrapper } from "../../../../../shared/components/inputfield/styles";
import { ButtonWrapper } from "../../../../../shared/components/button";
import { screenSizes } from "../../../../../shared/styles/theme";
export const DepositModalContainer = styled(ModalContainer)`
  width: 560px;
  height: 541px;
  @media only screen and (max-width:${screenSizes.mediaS}px) {   
width: 320px;
height: 273px;
    }
`;

export const DepositTokenInputWrapper = styled(ModalInputWrapper)`

  margin-top: 40px;
  text-align: left;
`;
export const DepositButtonWrapper = styled(ButtonWrapper)`
margin-top: 120px;
@media only screen and (max-width:${screenSizes.mediaS}px) {   
margin-top: 50px;
    }
`;