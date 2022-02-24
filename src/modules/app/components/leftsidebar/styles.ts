import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../../shared/styles/theme";
export const SidebarWrap = styled.div`
  width: 67%;
  background-color: ${colors.sidenavwrap};
`;
export const SideNavFirstContainer = styled.div`
  background-color: ${colors.sidenavfc};
  height: 74px;
  display: flex;
  align-items: center;
`;
export const SideNavFirstChild1Container = styled.div`
  width: 72%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SideNavFirstChild2Container = styled.div`
  width: 21%;
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const SidenavTab = styled.div`
  height: 57px;
  display: flex;
  align-items: center;
  :hover {
    background-image: linear-gradient(
      to right,
      #8106dc,
      #6825d8,
      #4f32d2,
      #3239ca,
      #003ec1
    );
  }
`;
export const SideNavTabText = styled.span`
  font-family: 14px;
  font-family: Medium;
  cursor: pointer;
`;
export const SideNavSubTab = styled.div`
  margin-left: 15px;
`;

export const SideNavStyleLink = styled(Link)`
   color: ${colors.white};
   text-decoration: none;
`;
export const SideNavLogo = styled.img`
  height: 11px;
  width: 11px;
  margin-right: 7px;
`;
