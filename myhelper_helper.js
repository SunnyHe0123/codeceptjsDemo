const Helper = require('@codeceptjs/helper');

class MyHelper extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

  doAwesomeThings() {
    console.log('Hello from MyHelpr');
  }
}

module.exports = MyHelper;
