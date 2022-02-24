import { useState, useEffect } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { NoEthereumProviderError } from "@web3-react/injected-connector";
import { injected, wcConnector } from "../../../../utils/connector";
import iconbar from "../../../../assets/images/iconbar.svg";
import logo from "../../../../assets/images/logo.svg";
import avataricon from "../../../../assets/images/avataricon.svg";
import settinglogo from "../../../../assets/images/settinglogo.svg";
import sidenavclose from "../../../../assets/images/sidenavclose.svg";
import * as Styles from "./styles";
import * as SharedStyles from "../../../../shared/styles/styled";
import {
  WalletConnectConnector,
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
} from "@web3-react/walletconnect-connector";
import { W3Operations } from "../../../../utils/constant";
import Wallet from "../../../../shared/components/walletconnect";
import useLocalStorage from "../../../../utils/hooks";
import { getTruncatedAddress } from "../../../../utils/hooks";
import RightSidebar from "../rightsidebar";
import LeftSidebar from "../leftsidebar";
const Navbar = () => {
  const { active, activate, account, error, connector } = useWeb3React();
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [rightsidebar, setRightSidebar] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [latestOp, setLatestOp] = useLocalStorage("address", "");
  const [latestConnector] = useLocalStorage("latest_connector", "");

  const getErrorMessage = () => {
    if (error instanceof NoEthereumProviderError) {
      alert(
        "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile."
      );
    } else if (error instanceof UnsupportedChainIdError) {
      console.log("You're connected to an unsupported network.");
    } else if (error instanceof UserRejectedRequestErrorWalletConnect) {
      const walletConnector = connector as WalletConnectConnector;
      walletConnector.walletConnectProvider = null;
      console.log("UserRejectedRequestErrorWalletConnect.");
      setLatestOp(W3Operations.Disconnect);
    } else {
      console.log("Provider!");
    }
  };
  useEffect(() => {
    getErrorMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    if (latestOp === "connect" && latestConnector === "injected") {
      injected
        .isAuthorized()
        .then((isAuthorized) => {
          if (isAuthorized && !active && !error) {
            activate(injected);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (latestOp === "connect" && latestConnector === "walletconnect") {
      activate(wcConnector);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const RightSideBar = () => {
    setRightSidebar(!rightsidebar);
    setSidebar(false);
  };
  return (
    <>
      {modalOpen && <Wallet show={modalOpen} toggleModal={setModalOpen} />}
      <Styles.NavbarWrapper>
        <Styles.IconWrapper>
          <Styles.IconBar src={iconbar} alt="iconbar" onClick={showSidebar} />
          <Styles.LogoImage src={logo} alt="logo" />
        </Styles.IconWrapper>
        <Styles.SidebarNavMain sidebar={sidebar}>
          <Styles.SidebarNav sidebar={sidebar}>
            <LeftSidebar RightSideBar={RightSideBar} setSidebar={setSidebar} />
            <Styles.SideWrap1>
              <Styles.SideWrap1ChildContainer>
                <Styles.SideWrap1SubChildContainer>
                  <Styles.SidenavCloseLogo
                    src={sidenavclose}
                    onClick={showSidebar}
                    alt="sidenavclose"
                  />
                </Styles.SideWrap1SubChildContainer>
              </Styles.SideWrap1ChildContainer>
            </Styles.SideWrap1>
          </Styles.SidebarNav>
        </Styles.SidebarNavMain>
        <Styles.StyledLink to="/">
          <Styles.LogoWrapper>
            <Styles.LogoImage src={logo} alt="logo" />
            <Styles.LogoText>Logo</Styles.LogoText>
          </Styles.LogoWrapper>
        </Styles.StyledLink>

        <Styles.NavTabs>
          <Styles.NavTab>
            <Styles.StyledLink to="dashboard">Dashboard</Styles.StyledLink>
          </Styles.NavTab>
          <Styles.NavTab>
            <Styles.StyledLink to="pool">Pool</Styles.StyledLink>
          </Styles.NavTab>
          <Styles.NavTab>
            <Styles.StyledLink to="lenders">Lenders</Styles.StyledLink>
          </Styles.NavTab>
          <Styles.NavTab>
            <Styles.StyledLink to="borrow">Borrow</Styles.StyledLink>
          </Styles.NavTab>
          <Styles.NavTab>
            <Styles.StyledLink to="stake">Stake</Styles.StyledLink>
          </Styles.NavTab>
          <Styles.NavTab>
            <Styles.StyledLink to="liquidity">Bond</Styles.StyledLink>
          </Styles.NavTab>
          <Styles.NavTab>
            <Styles.StyledLink to="claim-rewards">
              Claim Reward
            </Styles.StyledLink>
          </Styles.NavTab>
        </Styles.NavTabs>
        {active ? (
          <Styles.WalletMainAddressWrapper>
            <Styles.WalletMainAddressSubContainer>
              <SharedStyles.SideNavImageAvatar src={avataricon} alt="avatar" />
              <SharedStyles.SideNavAddressText>
                {getTruncatedAddress(account)}
              </SharedStyles.SideNavAddressText>
            </Styles.WalletMainAddressSubContainer>
            <Styles.WalletAddressSettingLogoWrap>
              <SharedStyles.SideNavSetLogo
                onClick={RightSideBar}
                src={settinglogo}
                alt="settinglogo"
              />
            </Styles.WalletAddressSettingLogoWrap>
          </Styles.WalletMainAddressWrapper>
        ) : (
          <Styles.NavButton onClick={() => setModalOpen(true)}>
            Connect Wallet
          </Styles.NavButton>
        )}

        <Styles.RightSidebar rightsidebar={rightsidebar}>
          <Styles.RightNavSubDiv rightsidebar={rightsidebar}>
            <RightSidebar
              RightSideBar={RightSideBar}
              setRightSidebar={setRightSidebar}
            />
          </Styles.RightNavSubDiv>
        </Styles.RightSidebar>

        <Styles.RightSidebarRes rightsidebar={rightsidebar}>
          <Styles.RightNavSubDivRes rightsidebar={rightsidebar}>
            <RightSidebar
              RightSideBar={RightSideBar}
              setRightSidebar={setRightSidebar}
            />
          </Styles.RightNavSubDivRes>
        </Styles.RightSidebarRes>
      </Styles.NavbarWrapper>
    </>
  );
};

export default Navbar;
