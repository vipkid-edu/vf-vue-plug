# vf-vue-plug
vf 引擎 vue 插件，帮助你快速使用 vf

[![Build Status](https://travis-ci.com/vipkid-edu/vf-vue-plug.svg?branch=master)](https://travis-ci.com/vipkid-edu/vf-vue-plug)
[![Build Status](https://circleci.com/gh/vipkid-edu/vf-vue-plug.svg?style=shield)](https://circleci.com/gh/vipkid-edu/vf-vue-plug.svg?style=shield)

## 安装

```shell
npm install @vf.js/vue
```
  
## 使用

```javascript
import vfComponent from "@vf.js/vue"

export default {
  components: {
    vf: vfComponent
  }
}
```

```html
<template>
  <div>
    <!-- more config detail please check https://vipkid-edu.github.io/vf-docs/handbook/option.html -->
    <vf :src="Your JSON data" :width="800"  @ready="..." @message="..."></vf>
  </div>
</template>
```

## 组件事件
**vfCreated**
当 VF 创建成功后触发的事件，会传入一个 `vf` 对象，可以通过 `@vfCreated="handleCreated"` 监听获取

**vfCreateErr**
当 VF 创建失败后触发当事件, 会传入一个 `errorMessage`, 可以通过 `@vfCreateErr` 监听获取

  
