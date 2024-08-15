import { computed, defineComponent } from 'vue'
import { showMsg } from '@/utils'
import HelloItem from '../hello-item/index.vue'

export default defineComponent({
  name: 'hello-vue-tsx',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const content = computed(() => `vue-tsx: ${showMsg(props.msg)}`)

    return () => (
      <>
        <div>{content.value}</div>
        <HelloItem item={{ id: 2, name: 'vue-tsx' }} />
      </>
    )
  },
})
