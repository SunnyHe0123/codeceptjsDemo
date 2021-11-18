const { I } = inject();

module.exports = {
  fields: {
    email: 'Username or email address',
    password: 'Password'
  },
  submitButton: "Sign in",

  // insert your locators and methods here

  sendForm(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
  },

  testPageObject() {
    console.log("=====test==page==object===");
  }
}
