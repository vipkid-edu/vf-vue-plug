import { mount } from "@vue/test-utils"
import component from '../src/index.vue'
import JSON from '../dev/index.json'

test('测试组件消息', async () => {
  const target = mount(component, {
    propsData: {
      src: JSON,
      debug: false
    }
  })

  await new Promise((resolve => {
    clearInterval(timer)
    const timer = setInterval(() => {
      if (target.emitted().ready && target.emitted().ready.length > 0) {
        clearInterval(timer)
        resolve()
      }
    }, 100)
  }))

  expect(target.emitted().ready).toBeTruthy()
})
