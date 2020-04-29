<template>
    <div class="test-page">
        <vf :src="vfjson"></vf>
    </div>
</template>

<script>
  import vf from '../src/index'
  import vfjson from './index.json'
  export default {
    name: "app",
    components: {vf},
    data() {
      return {
        vfjson
      }
    }
  }
</script>
