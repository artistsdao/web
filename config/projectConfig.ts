const projectConfig = {
  nftName: 'CryptocultureNFT',

  nftSymbol: 'Cryptoculture',

  maxSupply: 36000,

  maxMintAmountPerTxn: 12,

  mintCost: process.env.NODE_ENV === 'production' ? 0.42 : 0.42,

  networkName:
    process.env.NODE_ENV === 'production'
      ? 'Ethereum Mainnet'  // 'Polygon Mainnet' 
      : 'Ropsten Testnet' ,  // 'Mumbai Testnet', 

      chainName: 'ETH', //'MATIC', 

  chainId: process.env.NODE_ENV === 'production' ? 1 : 3,  //Ethereum (1), Rinkeby (4)

  siteDomain: 'www.artistsdao.com',

  siteUrl:
    process.env.NODE_ENV === 'production'
      ? `https://www.artistsdao.com`
      : 'http://localhost:3000',

  twitterUsername: '@artistsdao',

  twitterUrl: 'https://twitter.com/ArtistsDAO',

  discordUrl: 'https://discord.gg/5mTCYy8ZmH',

  redditUrl: 'https://www.reddit.com/r/antiwork/',
  mediumUrl: 'https://discord.gg/your_discord_invite_code',
  looksrareUrl: 'https://discord.gg/your_discord_invite_code',

  openseaCollectionUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://opensea.io/collection/your_opensea_collection_name'
      : 'https://testnets.opensea.io/collection/your_opensea_collection_name',

  contractAddress:
    process.env.NODE_ENV === 'production'
      ? '0x6ff11f69321343a0e30fe857b01da44548a9fb9c'
      : '0x6ff11f69321343a0e30fe857b01da44548a9fb9c',

  scanUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://etherscan.io/address/0x6ff11f69321343a0e30fe857b01da44548a9fb9c'
      : 'https://ropsten.etherscan.io/0x6ff11f69321343a0e30fe857b01da44548a9fb9c'
      // 'https://polygonscan.com/address/your_polygon_contract_address'
      // 'https://mumbai.polygonscan.com/address/your_mumbai_contract_address',
};

export default projectConfig;
