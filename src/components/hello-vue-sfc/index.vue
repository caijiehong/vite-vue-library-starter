<template>
  <div>{{ content }}</div>
  <HelloItem :item="{ id: 1, name: 'vue-sfc' }" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { showMsg } from '@/utils'
import HelloItem from '@/components/hello-item/index.vue'

defineOptions({
  name: 'hello-vue-sfc',
})

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const content = computed(() => `vue-sfc: ${showMsg(props.msg)}`)
</script>
