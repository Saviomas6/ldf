import styled from "styled-components";
import { colors, screenSizes } from "../../styles/theme";
export const ErrorWrapper = styled.div`
  color: ${colors.error};
  font-family: Bold;
  font-size: 16px;
  margin-top: 5px;
  text-align: center;
  @media only screen and (max-width: ${screenSizes.mediaS}px) {   
    font-family: Bold;
  font-size: 12px;
  margin-top: 2px;
}
`;
