import styled from "styled-components";
import { colors } from "../../../../../shared/styles/theme";
export const WalletAccountAddressWrap = styled.div`
  display: flex;
  height: 50px;
  width: 97%;
  align-items: center;
  justify-content: space-between;
`;
export const WalletAccountAddressSubChild1 = styled.div`
  font-family: Bold;
  font-size: 18px;
  color: ${colors.white};
`;
export const WalletTextContainer = styled.div`
  font-family: Regular;
  font-size: 12px;
  color: ${colors.white};
  margin-top: 15px;
  margin-left: 15px;
`;
export const WalletAddressChange = styled.div`

position: absolute;
top: 17px;
right: 17px;
border: 1px solid ${colors.deepskyblue};
border-radius: 25px;
box-shadow:0px 0px 4px ${colors.white};
`;

export const WalletAddressChangeSub = styled.div`
color: ${colors.cyan};
padding: 2px 7px;
font-family: Regular;
font-size: 12px;
`;

export const WalletContent1ChildSub = styled.div`
display: flex;
align-items: center;
`;
export const WalletChangeAddressFooter = styled.div`
  background-color: ${colors.mourningBlue};
  margin-top: 25px;
  height: 60px;
  border-radius: 0px 0px 20px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WalletChangeAddressFooterText = styled.div`
  cursor: pointer;
  font-family: Regular;
  font-size: 16px;
  color: ${colors.white};
`;

