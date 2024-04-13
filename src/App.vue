<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div>
      <HelloWorld msg="You did it!" />

    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>