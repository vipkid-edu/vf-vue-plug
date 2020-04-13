<template>
    <main ref="vfContainer"></main>
</template>

<script>
  const EVENT = {
    ready: 'ready',
    error: 'error',
    message: 'message',
    dispose: 'dispose',
    sceneCreate: 'sceneCreate'
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
      engineVersion: {
        type: String,
        default: '0.1.0'
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
      initEngine(option = {}) {
        //错误计数
        let errorLoadCount = 0;
        function createVF() {
          const vf = new VF(option);

          //详细的接口，可搜索：IVFEngine -> EngineAPI
          vf.onReady = option.onReady
          vf.onError = option.onError
          vf.onMessage = option.onMessage
          vf.onDispose = option.onDispose
          vf.onSceneCreate = option.onSceneCreate
        }
        function loadScript(index){
          var cdn = option.vfvars.cdns.default;
          var s = document.createElement('script');
          s.async = false;
          s.src = cdn[index] + '/vf/engine/vf-engine-v' + option.engineVersion + '/vf.js?v=' + option.fixVersion;
          s.addEventListener('load', loadComplete, false);
          s.addEventListener('error', loadError, false);
          document.body.appendChild(s);
        }
        function loadComplete() {
          removeEvent(this);
          createVF();
        }
        function loadError() {
          removeEvent(this);
          if(errorLoadCount>3){
            throw ' [LOG VF] vf.js load error';
            return;
          }
          loadScript(1);
          errorLoadCount++;
        }
        function removeEvent(thisObj){
          thisObj.parentNode.removeChild(thisObj);
          thisObj.removeEventListener('load', loadComplete, false);
          thisObj.removeEventListener('error', loadError, false);
        }
        loadScript(0);
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
      this.initEngine({
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
        engineVersion: this.engineVersion,
        logAdvancedTrace: this.logAdvancedTrace,

        onReady: this.onVFReady,
        onError: this.onVFError,
        onMessage: this.onVFMessage,
        onDispose: this.onVFDispose,
        onSceneCreate: this.onVFSceneCreate,

        vfvars: {
          cdns: {
            default:[
              'https://s.vipkidstatic.com/',
              'https://s.vipkidresource.com/',
            ],
            image:[
              'https://img.vipkidstatic.com/',
              'https://img.vipkidresource.com/',
            ],
            media:[
              'https://media.vipkidstatic.com/',
              'https://media.vipkidresource.com/',
            ],
            wx:[
              'https://wx.vipkidstatic.com/',
              'https://wx.vipkidresource.com/',
            ],
          }
        },
      });
    }
  }
</script>
