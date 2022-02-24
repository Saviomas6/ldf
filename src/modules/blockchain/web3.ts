import Web3 from "web3"

let web3: any;
declare let window: any;

if (typeof window !== "undefined" && window.web3 !== "undefined") {
  web3 = new Web3(window.ethereum);
//   window.ethereum.enable();
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  );
  web3 = new Web3(provider);
  
}
export default web3;