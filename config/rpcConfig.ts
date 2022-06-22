// For Ethereum, use the Infura endpoints
export default function rpcConfig(infuraKey?: string) {
  return process.env.NODE_ENV === 'production'
    ?  `https://mainnet.infura.io/v3/${infuraKey}`  //'https://polygon-rpc.com'
    :  `https://rinkeby.infura.io/v3/${infuraKey}`   //'https://rpc-mumbai.matic.today'; 
}
