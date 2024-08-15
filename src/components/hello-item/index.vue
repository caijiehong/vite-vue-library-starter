<template>
  <div>{{ content }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'hello-item',
})

const props = defineProps({
  // 定义一个 item 属性, 拥有 id: number, name: string 类型
  item: {
    type: Object as () => { id: number; name: string },
    required: true,
  },
})

const content = computed(() => `id: ${props.item.id}, name: ${props.item.name}`)
</script>
