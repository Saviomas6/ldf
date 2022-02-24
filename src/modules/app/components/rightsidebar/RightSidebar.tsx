import { useState, useEffect } from "react";
import { WalletModalClose } from "../../../../shared/styles/styled";
import close from "../../../../assets/images/close.svg";
import tokenwalleticon from "../../../../assets/images/tokenwalleticon.svg";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { injected, wcConnector } from "../../../../utils/connector";
import useLocalStorage from "../../../../utils/hooks";
import { W3Operations } from "../../../../utils/constant";
import { useWeb3React } from "@web3-react/core";
import { ConnectorEvent } from "@web3-react/types";
import * as Styles from "./styles";
import WalletChange from "../modal/walletchange";

interface Iprops {
  RightSideBar: any;
  setRightSidebar(value: boolean): void;
}
const RightSidebar = ({ RightSideBar, setRightSidebar }: Iprops) => {
  // eslint-disable-next-line
  const [latestOp, setLatestOp] = useLocalStorage("address", "");
  const [openmodal, setOpenModal] = useState<boolean>(false);
  const { connector, deactivate } = useWeb3React();
  const WalletDeactivate = () => {
    try {
      if (connector === wcConnector) {
        console.log("wcconnect");
        deactivate();
        connector.deactivate();
        setLatestOp(W3Operations.Disconnect);
        setRightSidebar(false);
      }
      if (connector === injected) {
        deactivate();
        console.log("metamask");
        setLatestOp(W3Operations.Disconnect);
        setRightSidebar(false);
      }
      if (connector instanceof WalletConnectConnector) {
        const walletConnector = connector as WalletConnectConnector;
        walletConnector.walletConnectProvider = null;
        console.log("instanceof WalletConnectConnector.");
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  const handleDeactivate = () => {
    if (connector instanceof WalletConnectConnector) {
      const walletConnector = connector as WalletConnectConnector;
      walletConnector.walletConnectProvider = null;
      setLatestOp(W3Operations.Disconnect);
      setOpenModal(false);
      console.log("instance");
    }
  };
  useEffect((): (() => void) => {
    if (connector) {
      connector.on(ConnectorEvent.Deactivate, handleDeactivate);
    }

    return () => {
      if (connector) {
        connector.off(ConnectorEvent.Deactivate, handleDeactivate);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connector]);
  const ChangeWalletToogle = () => {
    setOpenModal(true);
    setRightSidebar(false);
  };
  return (
    <>
      {openmodal && <WalletChange setOpenModal={setOpenModal} />}
      <Styles.RightSideMainContainer>
        <Styles.RightSideNavFirstContainer>
          <Styles.RightSideNavFirstSub1Container>
            <Styles.RightSideNavFirstSub1Child1Container>
              My Wallet
            </Styles.RightSideNavFirstSub1Child1Container>
            <Styles.RightSideNavFirstSub1Child2Container
              onClick={ChangeWalletToogle}
            >
              Change
            </Styles.RightSideNavFirstSub1Child2Container>
          </Styles.RightSideNavFirstSub1Container>
          <Styles.RightSideNavFirstSub2Container>
            $11450000.00
          </Styles.RightSideNavFirstSub2Container>

          <WalletModalClose onClick={RightSideBar} src={close} alt="close" />
        </Styles.RightSideNavFirstContainer>
        <Styles.RightSideNavSecondContainer>
          <Styles.RightSideNavSecondSub1Container>
            <Styles.RightSideNavSecondSub1Child1Container>
              <Styles.RightSideNavTokenImage
                src={tokenwalleticon}
                alt="tokenicon"
              />
              <Styles.RightSideNavTokenName>
                LDFsdsdsds
              </Styles.RightSideNavTokenName>
            </Styles.RightSideNavSecondSub1Child1Container>
            <Styles.RightSideNavSecondSub1Child2Container>
              <Styles.RightSideNavTokenAmmountText1>
                10.00
              </Styles.RightSideNavTokenAmmountText1>
              <Styles.RightSideNavTokenAmmountText2>
                $100.00
              </Styles.RightSideNavTokenAmmountText2>
            </Styles.RightSideNavSecondSub1Child2Container>
          </Styles.RightSideNavSecondSub1Container>
          <Styles.RightSideNavSecondSub1Container>
            <Styles.RightSideNavSecondSub1Child1Container>
              <Styles.RightSideNavTokenImage
                src={tokenwalleticon}
                alt="tokenicon"
              />
              <Styles.RightSideNavTokenName>NLDF</Styles.RightSideNavTokenName>
            </Styles.RightSideNavSecondSub1Child1Container>
            <Styles.RightSideNavSecondSub1Child2Container>
              <Styles.RightSideNavTokenAmmountText1>
                10.00
              </Styles.RightSideNavTokenAmmountText1>
              <Styles.RightSideNavTokenAmmountText2>
                $100.00
              </Styles.RightSideNavTokenAmmountText2>
            </Styles.RightSideNavSecondSub1Child2Container>
          </Styles.RightSideNavSecondSub1Container>
          <Styles.RightSideNavSecondSub1Container>
            <Styles.RightSideNavSecondSub1Child1Container>
              <Styles.RightSideNavTokenImage
                src={tokenwalleticon}
                alt="tokenicon"
              />
              <Styles.RightSideNavTokenName>SLDF</Styles.RightSideNavTokenName>
            </Styles.RightSideNavSecondSub1Child1Container>
            <Styles.RightSideNavSecondSub1Child2Container>
              <Styles.RightSideNavTokenAmmountText1>
                10.00
              </Styles.RightSideNavTokenAmmountText1>
              <Styles.RightSideNavTokenAmmountText2>
                $100.00
              </Styles.RightSideNavTokenAmmountText2>
            </Styles.RightSideNavSecondSub1Child2Container>
          </Styles.RightSideNavSecondSub1Container>
        </Styles.RightSideNavSecondContainer>
        <Styles.RightSideNavHorizontalRow />
        <Styles.RightSideNavThirdContainer>
          <Styles.RightSideNavThirdSub1Child>
            Buy On Uniswap
          </Styles.RightSideNavThirdSub1Child>
          <Styles.RightSideNavThirdSub2Child
            onClick={() => {
              window.open("https://app.uniswap.org/#/swap", "_blank");
              setRightSidebar(false);
            }}
          >
            BUY
          </Styles.RightSideNavThirdSub2Child>
        </Styles.RightSideNavThirdContainer>
        <Styles.SideNavDisconnectButtonWrapper>
          <Styles.SideNavDisconnectButton onClick={WalletDeactivate}>
            Disconnect
          </Styles.SideNavDisconnectButton>
        </Styles.SideNavDisconnectButtonWrapper>
      </Styles.RightSideMainContainer>
    </>
  );
};

export default RightSidebar;
