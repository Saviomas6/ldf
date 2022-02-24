import styled from "styled-components";
import { colors, screenSizes } from "../../styles/theme";
export const ButtonWrapper = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${screenSizes.mediaS}px) {
    height: 90px;
    align-items: flex-start;
  }
`;

export const Button = styled.button`
  border: none;
  background: linear-gradient(
    82.97deg,
    #003ec1 2.53%,
    #0052ff 48.71%,
    #8106dc 86.76%,
    #c77aff 97.53%
  );
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  font-family: Bold;
  text-align: center;
  border-radius: 32px;
  color: ${colors.white};
  cursor: pointer;
  padding: 20px 75px;
  font-size: 21px;
  @media only screen and (max-width: ${screenSizes.mediaS}px) {
    width: 100%;
    padding: 15px 15px;
    font-size: 16px;
  }
`;
export const LoanExtensionButWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashBoardButton = styled.button`
  width: 81px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #685c8d;
  font-size: 14px;
  line-height: 16.41px;
  text-align: center;
  font-family: Regular;
  color: ${colors.white};
  background-color: ${colors.cetaceanBlue};
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.mourningBlue};
  }
`;
export const DPSecondButton = styled.button`
  width: 121px;
  height: 32px;
  text-align: center;
  border-radius: 16px;
  background-color: ${colors.mourningBlue};
  color: ${colors.white};
  cursor: pointer;
  border: none;
  font-size: 14px;
  font-family: Regular;
`;
