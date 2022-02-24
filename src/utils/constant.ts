export interface Networks{
    Mainnet:number
    Ropsten: number
	Rinkeby: number
	Goerli: number
	Kovan: number
}

export const networks:Networks = {
	Mainnet: 1,
	Ropsten: 3,
	Rinkeby: 4,
	Goerli: 5,
	Kovan: 42,
};

export const getNetwork = (chainId: number|undefined) => {
  switch (chainId) {
    case networks.Mainnet:
      return "";
    case networks.Ropsten:
      return "ropsten.";
    case networks.Rinkeby:
      return "rinkeby.";
    case networks.Goerli:
      return "goerli.";
    case networks.Kovan:
      return "kovan.";
    default:
      return `unknown network ${chainId}`;
  }
};

 interface ConnectorName{
    Injected: string
    WalletConnect: string  
}
 
 interface W3Operation{
    Connect: string
    Disconnect: string  
}

 
export const ConnectorNames:ConnectorName = {
    Injected: "injected",
    WalletConnect: "walletconnect",
  };
  
export const W3Operations:W3Operation = {
    Connect: "connect",
    Disconnect: "disconnect",
  };


