import close from "../../../assets/images/close.svg";
import metaicon from "../../../assets/images/metaicon.svg";
import walleticon from "../../../assets/images/walleticon.svg";
import { useWeb3React } from "@web3-react/core";
import { ConnectorNames, W3Operations } from "../../../utils/constant";
import { injected, wcConnector } from "../../../utils/connector";
import useLocalStorage from "../../../utils/hooks";
import * as SharedStyles from "../../../shared/styles/styled";
interface Iprops {
  show: boolean;
  toggleModal(value: boolean): void;
}
const Wallet = (props: Iprops) => {
  const { show, toggleModal } = props;
  const web3React = useWeb3React();
  const { activate } = web3React;
  // eslint-disable-next-line
  const [latestOp, setLatestOp] = useLocalStorage("address", "");
  // eslint-disable-next-line
  const [latestConnector, setLatestConnector] = useLocalStorage(
    "latest_connector",
    ""
  );
  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      toggleModal(false);
    }
  };
  const MetaMaskWallet = () => {
    try {
      activate(injected);
      setLatestConnector(ConnectorNames.Injected);
      setLatestOp(W3Operations.Connect);
      toggleModal(false);
    } catch (ex) {
      console.log(ex);
    }
  };

  const WalletConnect = () => {
    try {
      activate(wcConnector);
      setLatestConnector(ConnectorNames.WalletConnect);
      setLatestOp(W3Operations.Connect);
      toggleModal(false);
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <SharedStyles.CustomModal onMouseDown={handleClickOutside}>
      <SharedStyles.WalletModalContainer>
        <SharedStyles.WalletHeadingContainer>
          <SharedStyles.WalletHeadingWrapper>
            <SharedStyles.WalletHeading>
              Connect Wallet
            </SharedStyles.WalletHeading>
            <SharedStyles.WalletModalClose
              src={close}
              alt="walletclose"
              onClick={() => toggleModal(!show)}
            />
          </SharedStyles.WalletHeadingWrapper>
        </SharedStyles.WalletHeadingContainer>
        <SharedStyles.WalletHorizontalRow />
        <SharedStyles.WalletModalContentWrapper>
          <SharedStyles.WalletModalContent>
            <SharedStyles.WalletContent1 onClick={MetaMaskWallet}>
              <SharedStyles.WalletContent1Child>
                <SharedStyles.WalletContentIcon src={metaicon} alt="metaicon" />
                <SharedStyles.WalletContentText>
                  MetaMask
                </SharedStyles.WalletContentText>
              </SharedStyles.WalletContent1Child>
            </SharedStyles.WalletContent1>
            <SharedStyles.WalletContent1 onClick={WalletConnect}>
              <SharedStyles.WalletContent1Child>
                <SharedStyles.WalletContentIcon
                  src={walleticon}
                  alt="walleticon"
                />
                <SharedStyles.WalletContentText>
                  Wallet Connect
                </SharedStyles.WalletContentText>
              </SharedStyles.WalletContent1Child>
            </SharedStyles.WalletContent1>
          </SharedStyles.WalletModalContent>
        </SharedStyles.WalletModalContentWrapper>
      </SharedStyles.WalletModalContainer>
    </SharedStyles.CustomModal>
  );
};

export default Wallet;
