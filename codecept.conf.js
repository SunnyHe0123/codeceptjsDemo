exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900'
    },
    MyHelper: {
      require: "./myhelper_helper.js"
    }
  },
  include: {
    I: './steps_file.js',
    myPageObjectPage: './pages/MyPageObject.js',
    myFragmentFragment: './fragments/MyFragment.js',
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    allure: {
      enabled: true,
      output_dir: "./allure-results"
    }
  },
  tests: 'demo/*_test.js',
  name: 'codeceptjs'
}