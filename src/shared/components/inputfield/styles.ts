import { Field } from "formik";
import styled from "styled-components";
import { colors, screenSizes } from "../../styles/theme";

export const Label = styled.label`
  font-family: Medium;
  font-size: 18px;
  color: ${colors.white};
  margin-bottom: 7px;
  @media only screen and (max-width: ${screenSizes.mediaS}px) {
    font-size: 14px;
  }
`;
export const ModalInputWrapper = styled.div`
  height: 120px;
  width: 100%;
  @media only screen and (max-width: ${screenSizes.mediaS}px) {
    height: 90px;
  }
`;

export const InputField = styled(Field)`
  display: block;
  width: 90%;
  height: 56px;
  background: ${colors.inputField};
  border: none;
  font-family: Medium;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 28px;
  color: ${colors.white};
  font-size: 18px;
  line-height: 26.44px;
  padding: 0px 27px;
  outline: none;
  margin-top: 5px;
  -moz-appearance: textfield;
  ::placeholder {
    color: ${colors.white};
    opacity: 0.7;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media only screen and (max-width: ${screenSizes.mediaS}px) {
    font-size: 14px;
    border-radius: 6px;
    height: 40px;
    width: 83%;
  }
`;
export const InputField1 = styled(InputField)`
  border-radius: 8px;
  width: 90%;
  ::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
  @media only screen and (max-width: ${screenSizes.mediaS}px) {
    width: 83%;
  }
`;

export const LoanExtReqInputWrapper = styled(ModalInputWrapper)`
  margin-top: 20px;
`;