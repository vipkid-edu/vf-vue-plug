module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transform: {
    "^.+\\.js$": 'babel-jest',
    "^.+\\.vue$": 'vue-jest'
  },
  testEnvironmentOptions: {
    resources: 'usable',
    runScripts: "dangerously"
  },
  setupFiles: [
    'jest-canvas-mock'
  ]
}
