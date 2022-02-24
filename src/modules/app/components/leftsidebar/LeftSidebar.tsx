import sidenavlogo from "../../../../assets/images/sidenavlogo.svg";
import avataricon from "../../../../assets/images/avataricon.svg";
import { getTruncatedAddress } from "../../../../utils/hooks";
import * as Styles from "./styles";
import * as SharedStyles from "../../../../shared/styles/styled";
import { useWeb3React } from "@web3-react/core";
import settinglogo from "../../../../assets/images/settinglogo.svg";
import { useNavigate } from "react-router-dom";
const LeftSidebar = ({ RightSideBar, setSidebar }: any) => {
  const navigate = useNavigate();
  const { active, account } = useWeb3React();
  return (
    <Styles.SidebarWrap>
      {active ? (
        <Styles.SideNavFirstContainer>
          <Styles.SideNavFirstChild1Container>
            <SharedStyles.SideNavImageAvatar src={avataricon} alt="avatar" />
            <SharedStyles.SideNavAddressText>
              {getTruncatedAddress(account)}
            </SharedStyles.SideNavAddressText>
          </Styles.SideNavFirstChild1Container>
          <Styles.SideNavFirstChild2Container>
            <SharedStyles.SideNavSetLogo
              onClick={RightSideBar}
              src={settinglogo}
              alt="settinglogo"
            />
          </Styles.SideNavFirstChild2Container>
        </Styles.SideNavFirstContainer>
      ) : (
        <Styles.SideNavFirstContainer></Styles.SideNavFirstContainer>
      )}
      <div>
        <Styles.SidenavTab>
          <Styles.SideNavSubTab>
            <Styles.SideNavLogo src={sidenavlogo} alt="sidenavlogo" />
            <Styles.SideNavTabText
              onClick={() => {
                setSidebar(false);
                navigate("/dashboard");
              }}
            >
              Dashboard
            </Styles.SideNavTabText>
          </Styles.SideNavSubTab>
        </Styles.SidenavTab>
        <Styles.SidenavTab>
          <Styles.SideNavSubTab>
            <Styles.SideNavLogo src={sidenavlogo} alt="sidenavlogo" />
            <Styles.SideNavTabText
              onClick={() => {
                setSidebar(false);
                navigate("/pool");
              }}
            >
              Pool
            </Styles.SideNavTabText>
          </Styles.SideNavSubTab>
        </Styles.SidenavTab>
        <Styles.SidenavTab>
          <Styles.SideNavSubTab>
            <Styles.SideNavLogo src={sidenavlogo} alt="sidenavlogo" />
            <Styles.SideNavTabText
              onClick={() => {
                setSidebar(false);
                navigate("/lenders");
              }}
            >
              Lenders
            </Styles.SideNavTabText>
          </Styles.SideNavSubTab>
        </Styles.SidenavTab>
        <Styles.SidenavTab>
          <Styles.SideNavSubTab>
            <Styles.SideNavLogo src={sidenavlogo} alt="sidenavlogo" />
            <Styles.SideNavTabText
              onClick={() => {
                setSidebar(false);
                navigate("/borrow");
              }}
            >
              Borrow
            </Styles.SideNavTabText>
          </Styles.SideNavSubTab>
        </Styles.SidenavTab>
        <Styles.SidenavTab>
          <Styles.SideNavSubTab>
            <Styles.SideNavLogo src={sidenavlogo} alt="sidenavlogo" />
            <Styles.SideNavTabText
              onClick={() => {
                setSidebar(false);
                navigate("/stake");
              }}
            >
              Stake
            </Styles.SideNavTabText>
          </Styles.SideNavSubTab>
        </Styles.SidenavTab>
        <Styles.SidenavTab>
          <Styles.SideNavSubTab>
            <Styles.SideNavLogo src={sidenavlogo} alt="sidenavlogo" />
            <Styles.SideNavTabText
              onClick={() => {
                setSidebar(false);
                navigate("/liquidity");
              }}
            >
              Bond
            </Styles.SideNavTabText>
          </Styles.SideNavSubTab>
        </Styles.SidenavTab>
        <Styles.SidenavTab>
          <Styles.SideNavSubTab>
            <Styles.SideNavLogo src={sidenavlogo} alt="sidenavlogo" />
            <Styles.SideNavTabText
              onClick={() => {
                setSidebar(false);
                navigate("/claim-rewards");
              }}
            >
              Claim Rewards
            </Styles.SideNavTabText>
          </Styles.SideNavSubTab>
        </Styles.SidenavTab>
      </div>
    </Styles.SidebarWrap>
  );
};

export default LeftSidebar;
