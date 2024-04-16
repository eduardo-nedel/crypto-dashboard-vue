import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import {
  getCoinDataById,
  getCoinPriceByIds,
  getCoinHistoricalChartDataWithinTimeRangeById
} from '@/services/apis/coingeckoApi/coingeckoAxios'
import { supportedCurrencies } from '@/helpers/constants/currencies'

export const useCryptocurrenciesStore = defineStore('cryptocurrencies', () => {
  const cryptocurrencies = ref({})

  const allCurrencies = computed(() =>
    Object.keys(cryptocurrencies.value).map((key) => cryptocurrencies.value[key])
  )

  const getCoinsPrices = async () => {
    try {
      const { data: prices } = await getCoinPriceByIds(supportedCurrencies)

      Object.keys(cryptocurrencies.value).forEach((key) => {
        cryptocurrencies.value[key] = {
          ...cryptocurrencies.value[key],
          ...prices[key]
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  const getBaseCoinsData = async () => {
    try {
      const baseCoinsData = await Promise.all(
        supportedCurrencies.map(async (id) => await getCoinDataById(id))
      )

      baseCoinsData.forEach(({ data }) => {
        cryptocurrencies.value[data.id] = {
          ...cryptocurrencies.value[data.id],
          ...{
            id: data.id,
            image: data.image.small,
            last_updated: data.last_updated,
            name: data.name,
            symbol: data.symbol
          }
        }
      })

      await getCoinsPrices()
    } catch (error) {
      console.error(error)
    }
  }

  const getCoinHistoricalChartData = async (id, props) => {
    try {
      const { data: data } = await getCoinHistoricalChartDataWithinTimeRangeById(id, props)

      cryptocurrencies.value[id] = {
        ...cryptocurrencies.value[id],
        chartData: data
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    cryptocurrencies,
    allCurrencies,
    getBaseCoinsData,
    getCoinsPrices,
    getCoinHistoricalChartData
  }
})
