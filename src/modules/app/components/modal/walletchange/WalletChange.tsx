import * as SharedStyles from "../../../../../shared/styles/styled";
import close from "../../../../../assets/images/close.svg";
import Walleticon from "../../../../../assets/images/walleticon.svg";
import metaicon from "../../../../../assets/images/metaicon.svg";
import copyaddress from "../../../../../assets/images/copyaddress.svg";
import * as Styles from "./styles";
import { getNetwork } from "../../../../../utils/constant";
import { useWeb3React } from "@web3-react/core";
import { getTruncatedAddress } from "../../../../../utils/hooks";
interface Iprops {
  setOpenModal(value: boolean): void;
}
const WalletChange = ({ setOpenModal }: Iprops) => {
  const { chainId, account, active } = useWeb3React();
  const ViewExplorer = () => {
    window.open(
      `https://${getNetwork(chainId)}etherscan.io/address/${account}`,
      "_blank"
    );
  };
  const CopyClipboard = () => {
    navigator.clipboard.writeText(`${account}`);
  };
  return (
    <div>
      {active ? (
        <SharedStyles.CustomModal>
          <SharedStyles.WalletModalContainer>
            <SharedStyles.WalletHeadingContainer>
              <SharedStyles.WalletHeadingWrapper>
                <SharedStyles.WalletHeading>Account</SharedStyles.WalletHeading>
                <SharedStyles.WalletModalClose
                  onClick={() => setOpenModal(false)}
                  src={close}
                  alt="close"
                />
                <Styles.WalletAccountAddressWrap>
                  <Styles.WalletAccountAddressSubChild1>
                    {getTruncatedAddress(account)}
                  </Styles.WalletAccountAddressSubChild1>
                  <div style={{ cursor: "pointer" }} onClick={CopyClipboard}>
                    <img src={copyaddress} alt="copy" />
                  </div>
                </Styles.WalletAccountAddressWrap>
              </SharedStyles.WalletHeadingWrapper>
            </SharedStyles.WalletHeadingContainer>
            <SharedStyles.WalletHorizontalRow />
            <Styles.WalletTextContainer>
              <span>Change Wallet</span>
            </Styles.WalletTextContainer>
            <SharedStyles.WalletModalContentWrapper>
              <SharedStyles.WalletModalContent>
                <SharedStyles.WalletContent1>
                  <SharedStyles.WalletContent1Child>
                    <Styles.WalletContent1ChildSub>
                      <SharedStyles.WalletContentIcon
                        src={metaicon}
                        alt="metaicon"
                      />
                      <SharedStyles.WalletContentText>
                        Metamask
                      </SharedStyles.WalletContentText>
                    </Styles.WalletContent1ChildSub>

                    <Styles.WalletAddressChange>
                      <Styles.WalletAddressChangeSub>
                        Change
                      </Styles.WalletAddressChangeSub>
                    </Styles.WalletAddressChange>
                  </SharedStyles.WalletContent1Child>
                </SharedStyles.WalletContent1>
                <SharedStyles.WalletContent1>
                  <SharedStyles.WalletContent1Child>
                    <SharedStyles.WalletContentIcon
                      src={Walleticon}
                      alt="metaicon"
                    />
                    <SharedStyles.WalletContentText>
                      Wallet Connect
                    </SharedStyles.WalletContentText>
                    <Styles.WalletAddressChange>
                      <Styles.WalletAddressChangeSub>
                        Change
                      </Styles.WalletAddressChangeSub>
                    </Styles.WalletAddressChange>
                  </SharedStyles.WalletContent1Child>
                </SharedStyles.WalletContent1>
              </SharedStyles.WalletModalContent>
            </SharedStyles.WalletModalContentWrapper>
            <Styles.WalletChangeAddressFooter>
              <Styles.WalletChangeAddressFooterText onClick={ViewExplorer}>
                View on Explorer
              </Styles.WalletChangeAddressFooterText>
            </Styles.WalletChangeAddressFooter>
          </SharedStyles.WalletModalContainer>
        </SharedStyles.CustomModal>
      ) : null}
    </div>
  );
};

export default WalletChange;
