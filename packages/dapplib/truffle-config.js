require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth oval unique harvest forget equal giggle'; 
let testAccounts = [
"0x4f34cf773d70c199181c8b283979a4dbe0b6a4aec96cbfe89b0850e0572f9077",
"0x43c5e2a6ee71a401bb23c8aa70d02683a2f1e23fff9bfea0278292a5a505d9bd",
"0xc5efaec800781bc31a23544e0e068f869a418042a7c0a0c1267c2e88b09501f8",
"0x0b36f5f69328f41d7bd24985000acb631e9f804e3b5374a27700be71a4988e96",
"0x3978eaf03953d46dc3743c57abff5352b22ee6e2930e3a323eb2be4dc0c1c247",
"0x4b38af8985017b577c8f15b7fc7b623463c1d593cc2dc0690513a11f65164cd2",
"0x2a8ee5c04d9867f0a525c556bf0db8a505011d8f9131ec09feaefff0aea6d881",
"0xe077ccd070973a1a312a74be976cf1b9136f6fa53d479798e2a44dc54c4698a6",
"0x6761e9b050a0885ce53af0a635223e286b39a07b4a8c430f4181c2f761e2ed08",
"0x8713e1d6f7408e53a2f7cd22219db1b1cf56700382c258baf5bbb7cbbc4f19c3"
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


