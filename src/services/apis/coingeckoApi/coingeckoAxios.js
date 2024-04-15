import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/',
  headers: {
    'x-cg-demo-api-key': 'CG-bXAsyzuPd72181Lphnxp5sGa'
  }
})

const getCoinDataById = async (id, params) =>
  await api.get(`coins/${id}`, {
    params: {
      localization: false,
      tickers: false,
      market_data: false,
      community_data: false,
      developer_data: false,
      sparkline: false,
      ...params
    }
  })

const getCoinPriceByIds = async (ids, params) =>
  await api.get(`simple/price`, {
    params: {
      ids: ids.join(','),
      vs_currencies: 'usd',
      include_market_cap: true,
      include_24hr_vol: true,
      include_24hr_change: true,
      include_last_updated_at: true,
      precision: 'full',
      ...params
    }
  })

const getCoinHistoricalChartDataWithinTimeRangeById = async (id, params) =>
  await api.get(`coins/${id}/market_chart/range`, {
    params: {
      vs_currency: 'usd',
      from: 1711929600,
      to: 1712275200,
      ...params
    }
  })

export { getCoinDataById, getCoinPriceByIds, getCoinHistoricalChartDataWithinTimeRangeById }

export default api
