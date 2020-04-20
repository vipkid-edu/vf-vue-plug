<template>
    <main ref="vfContainer"></main>
</template>

<script>
  import { createVF } from '@vf.js/launcher'
  const EVENT = {
    ready: 'ready',
    error: 'error',
    message: 'message',
    dispose: 'dispose',
    sceneCreate: 'sceneCreate',

    //component custom event
    vfCreated: 'vfCreated',
    vfCreateErr: 'vfCreateErr'
  }

  export default {
    name: "vf",
    props: {
      src: {
        type: [String, Object],
      },
      debug: Boolean,
      bgcolor: {
        type: String,
        default: '0xffffff'
      },
      wmode: String,
      width: Number,
      height: Number,
      logAdvancedTrace: Boolean,
      language: String,
      frameRate: Number,
      scaleMode: String,
      play: Boolean,
      id: String,
      loop: Boolean,
      menu: Boolean,
      quality: String,
      align: String,
      vfvars: Object,
      orientation: String,
      maxTouches: Number,
      showFPS: Boolean
    },
    methods: {
      onCreateVFError(errMsg) {
        console.log('create vf fail, please check you network', errMsg)
        this.$emit(EVENT.vfCreateErr, errMsg)
      },
      log(message) {
        if (!this.debug) return

        console.log(`[log]: ${message}`)
      },
      onVFReady() {
        this.log('onVFReady')
        this.$emit(EVENT.ready)
      },
      onVFError(errorMsg) {
        this.log('onVFError')
        this.$emit(EVENT.error, errorMsg)
      },
      onVFMessage(message) {
        this.log('onVFReady')
        this.$emit(EVENT.message, message)
      },
      onVFDispose() {
        this.log('onVFDispose')
        this.$emit(EVENT.dispose)
      },
      onVFSceneCreate() {
        this.log('onVFSceneCreate')
        this.$emit(EVENT.sceneCreate)
      },
    },
    mounted() {
      const config = {
        id: this.id,
        src: this.src,
        play: this.play,
        menu: this.menu,
        debug: this.debug,
        align: this.align,
        wmode: this.wmode,
        width: this.width,
        height: this.height,
        bgcolor: this.bgcolor,
        quality: this.quality,
        showFPS: this.showFPS,
        language: this.language,
        frameRate: this.frameRate,
        scaleMode: this.scaleMode,
        maxTouches: this.maxTouches,
        orientation: this.orientation,
        container: this.$refs.vfContainer,
        logAdvancedTrace: this.logAdvancedTrace,
      }
      createVF(config, player => {
        player.onReady = this.onVFReady
        player.onError = this.onVFError
        player.onDispose = this.onVFDispose
        player.onMessage = this.onVFMessage
        player.onSceneCreate = this.onVFSceneCreate
        this.$emit(EVENT.vfCreated, player)
      }, this.onCreateVFError)
    }
  }
</script>
