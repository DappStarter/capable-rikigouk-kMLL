require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note situate coin harvest derive tail stuff'; 
let testAccounts = [
"0x6cee3b9edb5823d2aae5e2900bfc8c26ef0e1abff4d1c57495a8fd7b8e03d07e",
"0x5aff14962983f16d9f539c7f6b37e9c90d9d0294427ba1c20dca9aa4ab75e623",
"0xe25647aa65c734504aa843c6e3e5859b8c0542cb880de3e6e77f6938f400a5f7",
"0xe381ef3b361e9417150d0bd322965e174294dfadadd152a34f4495b048561d56",
"0x37f8ebfd49627b1d8c95a018cab0e954acd86d5a8f6794d656c36ca80358e228",
"0x38d304d883ee62b39455fc06008bbfed6bc38e4dd0bc98aa2d60a145bcb04af5",
"0xd05465069028c51b060efcef436e814f647448090d60e8ba64e9c6d2531fc084",
"0xd9d6b4e6bdafea7c41502f5c5c0203b0ed4d052665a21ba473afe7c8c8945f69",
"0x07aae697f8363ee84e4cc26e97a2cd9201ad7430ad54f4503886e5b89739c861",
"0x888525048cd9423c89d52b02d855031f2905fd294e814e76772da3ec17a0cd26"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


