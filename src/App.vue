<script setup lang="ts">
import { showMsg, HelloVueSfc, HelloVueTsx } from './'
import { ref } from 'vue'

const msg = ref(showMsg('Hello Vue 3 + TypeScript + Vite'))
</script>

<template>
  <main>
    <div>hello</div>
    <div>{{ msg }}</div>
    <HelloVueSfc msg="this from demo/app.vue" />
    <HelloVueTsx msg="this from demo/app.vue" />
  </main>
</template>
