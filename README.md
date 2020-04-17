# vf-vue-plug
vf 引擎 vue 插件，帮助你快速使用 vf

[![Build Status](https://travis-ci.com/vipkid-edu/vf-vue-plug.svg?branch=master)](https://travis-ci.com/vipkid-edu/vf-vue-plug)
[![Build Status](https://circleci.com/gh/vipkid-edu/vf-vue-plug.svg?style=shield)](https://circleci.com/gh/vipkid-edu/vf-vue-plug.svg?style=shield)

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

  
