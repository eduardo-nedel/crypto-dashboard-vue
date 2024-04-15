import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useCryptocurrenciesStore = defineStore('cryptocurrencies', () => {
  const cryptocurrencies = {
    bitcoin: {
      id: 'bitcoin',
      symbol: 'btc',
      name: 'Bitcoin',
      description: {
        en: 'Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the \u003ca href="https://www.coingecko.com/en?hashing_algorithm=SHA-256"\u003eSHA-256\u003c/a\u003e hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as \u003ca href="https://www.coingecko.com/en/coins/litecoin"\u003eLitecoin\u003c/a\u003e, \u003ca href="https://www.coingecko.com/en/coins/peercoin"\u003ePeercoin\u003c/a\u003e, \u003ca href="https://www.coingecko.com/en/coins/primecoin"\u003ePrimecoin\u003c/a\u003e, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by \u003ca href="https://www.coingecko.com/en/coins/ethereum"\u003eEthereum\u003c/a\u003e which led to the development of other amazing projects such as \u003ca href="https://www.coingecko.com/en/coins/eos"\u003eEOS\u003c/a\u003e, \u003ca href="https://www.coingecko.com/en/coins/tron"\u003eTron\u003c/a\u003e, and even crypto-collectibles such as \u003ca href="https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos"\u003eCryptoKitties\u003c/a\u003e.'
      },
      image: {
        thumb: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1696501400',
        small: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400',
        large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'
      },
      genesis_date: '2009-01-03',
      last_updated: '2024-04-15T01:12:57.854Z',
      usd: 65444.1564077509,
      usd_market_cap: 1291305332767.4954,
      usd_24h_vol: 50134528227.8087,
      usd_24h_change: 1.237848676694321,
      last_updated_at: 1713137703
    },
    cosmos: {
      id: 'cosmos',
      symbol: 'atom',
      name: 'cosmos',
      image: {
        thumb: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1696501400',
        small: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400',
        large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'
      },
      usd: 8.414551598594338,
      usd_market_cap: 3297119359.368327,
      usd_24h_vol: 510045093.158894,
      usd_24h_change: 3.706216600831578,
      last_updated_at: 1713137697
    },
    dacxi: {
      id: 'dacxi',
      symbol: 'dacxi',
      name: 'dacxi',
      image: {
        thumb: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1696501400',
        small: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400',
        large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'
      },
      usd: 0.0014942477699057155,
      usd_market_cap: 13428714.37998563,
      usd_24h_vol: 21930.220898928554,
      usd_24h_change: -77.08866225808197,
      last_updated_at: 1713137650
    },
    ethereum: {
      id: 'ethereum',
      symbol: 'eth',
      name: 'ethereum',
      image: {
        thumb: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1696501400',
        small: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400',
        large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'
      },
      usd: 3155.6184565772737,
      usd_market_cap: 380129180897.70135,
      usd_24h_vol: 26429960540.581455,
      usd_24h_change: 3.866142333047118,
      last_updated_at: 1713137717
    }
  }

  const allCrypto = computed(() =>
    Object.keys(cryptocurrencies).map((key) => cryptocurrencies[key])
  )

  return { cryptocurrencies, allCrypto }
})
