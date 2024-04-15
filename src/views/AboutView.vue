<template>
  <AuthenticatedTemplate>
    <template v-slot:title>
      About
    </template>
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Crypto Dashboard Vue </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">Just a simple dashboard to check some coins value.</p>
        <p class="mt-4 text-base leading-7 text-gray-600">Made by: <span class="text-base font-semibold text-indigo-600">Eduardo Mueller Nedel</span></p>
        <div class="flex items-center justify-center">
          <a href="https://github.com/eduardo-nedel" target="_blank">
            <img class="h-8 w-8" :src="gitIco" />
          </a>
        </div>

      </div>
    </main>
  </AuthenticatedTemplate>
</template>

<script setup>
  import AuthenticatedTemplate from '@/templates/AuthenticatedTemplate.vue'
  import gitIco from '@/assets/images/github-mark.png'

</script>