<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { RouterView } from 'vue-router'
  import { useCryptocurrenciesStore } from './stores/cryptocurrencies';

  const store = useCryptocurrenciesStore()

  onMounted(() => {
    store.getBaseCoinsData()
  })
</script>