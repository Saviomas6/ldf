import styled from "styled-components";
import { colors, screenSizes } from "../../../../../shared/styles/theme";

export const LoanExtInput = styled.textarea`
  height: 178px;
display: block;
width: 90%;
background: ${colors.inputField};
border:${colors.inputField};
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius:6px;
color: ${colors.white};
font-size: 18px;
line-height: 26.44px;
padding: 10px 27px;
outline: none;
resize: none;
margin-top: 6px;
font-family: Regular;
::placeholder{
color: #ffffff;
 opacity: 0.7;

}
::focus{
    outline: none;
  }
  @media only screen and (max-width: ${screenSizes.mediaS}px) {
    width: 80%;
    height: 130px;
    font-size: 14px;
  }
`;
