<template>
  <AuthenticatedTemplate>
    <template v-slot:title>
      <div class="flex flex-row items-center">
        <img class="h-10 w-10 rounded-full" :src="coinData?.image"/> 
        <div class="pr-2">
          <span class="pr-1">{{ coinData.name }}</span>
          <span style="font-size: 16px;" class="font-normal text-gray-500">{{ coinData.symbol.toUpperCase() }}</span>
        </div>
        <div>
          <span style="font-size: 22px;">{{ coinData?.usd && formatCurrency({value: coinData?.usd, minimumFractionDigits: coinData?.usd > 0.01 ? 2 : 5}) }}</span>
          <span 
            style="font-size: 14px;"
            :class="[
              'pl-2',
              `${coinData.usd_24h_change}`.includes('-') ? 'text-red-500' : 'text-green-700'
            ]"
          >
            {{ coinData.usd_24h_change && formatNumber({value: coinData.usd_24h_change, minimumFractionDigits: 2}) }}%
          </span>
        </div>
      </div>
    </template>

    <div class="w-full bg-white rounded-xl p-5 mb-5">
      <div class="flex flex-row wrap">
        <VueDatePicker v-model="date" :max-date="new Date()" range :clearable="false" />
        <button 
          class="px-2 py-2 rounded border hover:bg-gray-100 hover:border-gray-400"
          @click="redoGetData++"
        >
          <ArrowPathIcon class="block h-4 w-4" />
        </button>
      </div>

      <Chart :options="chartOptions" :series="pricesChartData"/>
      
      <div class="flex justify-between wrap">
        <div> 
          <span class="pr-2">Market Cap</span>
          <span class="font-bold">{{ formatCurrency({value: coinData.usd_market_cap }) }}</span>
        </div>
        <div>
          <span class="pr-2">24 Hour Trading Vol</span>
          <span class="font-bold">{{ formatCurrency({value: coinData.usd_24h_vol }) }}</span>
        </div>
      </div>

    </div>
  </AuthenticatedTemplate>
</template>

<script setup>
  import { computed, onMounted, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  import { ArrowPathIcon } from '@heroicons/vue/24/outline'
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'

  import AuthenticatedTemplate from '@/templates/AuthenticatedTemplate.vue';
  import { supportedCurrencies } from '@/helpers/constants/currencies';
  import { useCryptocurrenciesStore } from '@/stores/cryptocurrencies'
  import { formatCurrency } from '@/helpers/formatters/currency'
  import { formatNumber } from '@/helpers/formatters/number'
  import Chart from '@/components/Chart/Chart.vue';

  const router = useRouter()
  const route = useRoute()

  const store = useCryptocurrenciesStore()

  const redoGetData = ref(0)
  const date = ref();
  const endDate = new Date();
  const startDate = new Date(new Date().setDate(endDate.getDate() - 7));
  date.value = [startDate, endDate];

  const fetchCoinHistoricalPrice = (date1, date2) => {
    store.getCoinHistoricalChartData(route.params?.id, {from: Math.floor(date1?.getTime() / 1000), to: Math.floor(date2?.getTime() / 1000)})
    store.getBaseCoinsData()
  }

  watch(date, (newDate) => {
    fetchCoinHistoricalPrice(newDate[0], newDate[1])
  })

  watch(redoGetData, () => {
    fetchCoinHistoricalPrice(date.value[0], date.value[1])
  })
  
  const coinData = computed(() => {
    return store.cryptocurrencies[route.params.id]
  })

  const pricesChartData = computed(() => {
    return [{ name: 'Value', data: coinData.value?.chartData?.prices ?? [] }]
  })

  const chartOptions = computed(() => ({
    chartName: coinData.value?.name,
    tooltip: {
      y: {
        formatter: (value) => formatCurrency({ value, minimumFractionDigits: value > 0.01 ? 2 : 5 })
      },
      x: {
        formatter: (value) => 
      new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric',  hour: 'numeric', minute: 'numeric', second: 'numeric', }).format(new Date(value))
      }
    },
    yaxis: {
      labelsFormatter: (value) => formatCurrency({ value, minimumFractionDigits: 0, notation: 'compact' , compactDisplay: 'short' }),
    }
  }))

  onMounted(() => {
    if (!supportedCurrencies.includes(route.params?.id)) {
      alert(`Not supported cryptocurrency. ${route.params?.id}`)
      router.push({name: 'cryptoList'})
    } else {
      fetchCoinHistoricalPrice(date.value[0], date.value[1])
    }
  })
</script>