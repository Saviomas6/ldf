import styled from "styled-components";
import { colors } from "../../shared/styles/theme";

export const Container = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  height: 80vh;
  justify-content: center;
font-family: Thin;
`;
export const LiquidityExtendedContainer = styled.div`
height: 100px;
background-color: ${colors.tableresbackg};
padding: 10px;
`;
export const LiquidityExtendedSub1 = styled.div`
text-align: start;
`;

export const LiquidityExtendedSub1Text1 = styled.div`
font-family: Regular;
font-size: 12px;
color: ${colors.tablerestext};
line-height: 20px;
`;

export const LiquidityExtendedSub1Text2 = styled.div`
font-family: Bold;
font-size: 12px;
color: ${colors.white};
`;

export const LiquidityExtendedSub2 = styled.div`
margin-right: 10px;
margin-top: 20px;
display: flex;
justify-content: end;
li
`;
