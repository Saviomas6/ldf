import styled from "styled-components";
import { colors, screenSizes } from "../../styles/theme";

export const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;
`;
export const TableRow = styled.tr`
  background-color: ${colors.cetaceanBlue};
  color: ${colors.white};
`;

export const TableHeader1 = styled.th`
  border-bottom: 1px solid ${colors.black};
  font-family: Regular;
  @media only screen and (max-width:${screenSizes.mediaXL}px) {   
    :nth-child(n+4) {
      display: none;
    }
    font-size: 14px;
    padding: 13px 0px;
  background-color: ${colors.tableresheader};
    :nth-child(1),:nth-child(3) {
    width: 100px;

}
    }
    @media only screen and (min-width:${screenSizes.mediaXL}px) {   
      padding: 15px 0px;
  background-color: ${colors.cetaceanBlue};
      font-size: 16px;
      :nth-child(n){
      display: table-cell;
}
    }
`;

export const TableData = styled.td`
    border-bottom: 1px solid ${colors.black};
  text-align: center;
  font-family: Regular;
  @media only screen and (max-width:${screenSizes.mediaXL}px) {   
    :nth-child(n+4) {
      display: none;
    }
    font-size: 12px;
  padding: 13px 0px;
  background-color: ${colors.tableresdata};
  :nth-child(1),:nth-child(3) {
width: 100px;
}
    }
    @media only screen and (min-width:${screenSizes.mediaXL}px) {   
      padding: 15px 0px;
      font-size: 16px;
  background-color: ${colors.cetaceanBlue};
      :nth-child(n){
      display: table-cell;
}
:nth-child(1) {
width: 160px;
}
  :last-of-type {
   width: 100px;
}
    }
`;


export const TableHeaderWrapper = styled.div`
  height: 78px;
  background-color: ${colors.tableheadercol};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 21px;
  @media only screen and (max-width:${screenSizes.mediaXL}px) {   
      display: none;
    }
    @media only screen and (min-width:${screenSizes.mediaXL}px) {   
      display: flex;
    }
`;

export const Wrapper = styled.div`
width: 94%;
border: 1px solid ${colors.tableborder};
`;
export const MainWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 15px;
`;

interface SideProps {
    dashboardtext?: boolean;
  }
  export const TableHeaderText = styled.div<SideProps>`
    font-size: ${({ dashboardtext }) => (dashboardtext ? "21px" : "18px")};
    font-family: Bold;
    color: ${colors.white};
    margin-left: 10px;
  `;
  export const DashboardHeaderOption1 = styled.div`
    font-size:16px;
    font-family: Bold;
    color: ${colors.white};
    text-align: right;
  `;
  export const DashboardHeaderOption2 = styled.div`
    font-size: 24px;
    font-family: Bold;
    color: ${colors.white};
  `;

export const ExtendedTableRow = styled.tr`
@media only screen and (min-width: ${screenSizes.mediaXL}px) {
display: none;
}
`;