import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });
export const wcConnector = new WalletConnectConnector({
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
});
