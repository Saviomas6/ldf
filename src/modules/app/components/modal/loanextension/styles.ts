import styled from "styled-components";
import { screenSizes } from "../../../../../shared/styles/theme";
export const DateLogo = styled.img`
    height: 35.03px;
    width: 33.05px;
    position: absolute;
    top: 166px;
    right: 35px;
    @media only screen and (max-width: ${screenSizes.mediaS}px) {
        top: 137px;
    right: 36px;
    height: 27.03px;
    width: 27.05px;
  }
`;