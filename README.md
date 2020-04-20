# vf-vue
VF 引擎 Vue 组件，帮助你快速使用 VF

[![Build Status](https://travis-ci.com/vipkid-edu/vf-vue.svg?branch=master)](https://travis-ci.com/vipkid-edu/vf-vue)
[![Build Status](https://circleci.com/gh/vipkid-edu/vf-vue.svg?style=shield)](https://circleci.com/gh/vipkid-edu/vf-vue.svg?style=shield)
<img src="https://img.shields.io/github/issues/vipkid-edu/vf-vue">
<img src="https://img.shields.io/github/license/vipkid-edu/vf-vue">

## 安装

```shell
npm install @vf.js/vue-plug
```
  
## Use

```javascript
import vfPlug from "@vf.js/vue-plug"

export default {
  components: {
    vf: vfPlug
  }
}
```

```html
<template>
  <div>
    <!-- more config detail please check https://vipkid-edu.github.io/vf-docs/handbook/option.html -->
    <vf :src="Your JSON data" :width="800" :height="600" @ready="Your event handle" @message="..." @error="..." @dispose="..."></vf>
  </div>
</template
```

  
