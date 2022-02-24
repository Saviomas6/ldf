import styled from "styled-components";
import { ModalContainer } from "../../../../../shared/styles/styled";
import { screenSizes } from "../../../../../shared/styles/theme";

export const ClaimLDFModalContainer = styled(ModalContainer)`
  width: 640px;
  height: 576px;
  @media only screen and (max-width: ${screenSizes.mediaS}px) {
width: 320px;
height: 368px;
  }
`;
export const ClaimLDFContentWrapper = styled.div`
padding:20px;
`;