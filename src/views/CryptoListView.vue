<template>
  <AuthenticatedTemplate>
    <template v-slot:title>
      Cryptocurrencies
    </template>
    <div class="bg-white rounded-xl p-5 mb-5">
      
      <table class="table-auto min-w-full text-right">
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Volume(24h)</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="crypto in store.allCurrencies" 
            v-bind:key="crypto.symbol"
            class="border-b border-neutral-200 pb-5 cursor-pointer hover:bg-gray-100" 
            style="height: 50px;" 
            @click="router.push({ name: 'cryptoDetails', params: {id: crypto.id} })"
          >
            <td class="w-auto">
              <div class="flex flex-1 flex-row text-left items-center">
                <img class="h-5 w-5 rounded-full" :src="crypto?.image"/> 
                <span class="text-1xl font-bold text-gray-900 pr-1 pl-1">{{ crypto?.name }}</span>
                <span class="text-1xl text-gray-400">{{ crypto?.symbol?.toUpperCase() }}</span>
              </div>
            </td>
            <td class="w-auto">
              <span class="text-1xl font-bold text-gray-900">{{ crypto?.usd && formatCurrency({value: crypto?.usd, minimumFractionDigits: crypto?.usd > 0.01 ? 2 : 5}) }}</span>
            </td>
            <td class="w-auto">
              <span class="text-1xl font-bold text-gray-900">{{ crypto?.usd_market_cap && formatCurrency({value: crypto?.usd_market_cap, maximumFractionDigits: 0}) }}</span>
            </td>
            <td class="w-auto">
              <span class="text-1xl font-bold text-gray-900">{{ crypto?.usd_24h_vol && formatCurrency({value: crypto?.usd_24h_vol, maximumFractionDigits: 0}) }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </AuthenticatedTemplate>
</template>

<script setup>
  import { onMounted, onUnmounted, ref } from 'vue';

  import AuthenticatedTemplate from '@/templates/AuthenticatedTemplate.vue';
  import { useCryptocurrenciesStore } from '@/stores/cryptocurrencies'
  import { formatCurrency } from '@/helpers/formatters/currency'
  import router from '@/router';

  const store = useCryptocurrenciesStore()

  const interval = ref([])

  onMounted(() => {
    interval.value = setInterval(store.getBaseCoinsData(), 60*1000)
  })

  onUnmounted(() => {
    clearInterval(interval.value)
  })
</script>