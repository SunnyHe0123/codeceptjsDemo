const { I } = inject();
// Add in your custom step files

Given('I input codeceptjs', () => {
  I.amOnPage("https://baidu.com/");
  I.fillField("wd", "codeceptjs");
});


When('I click baidu', () => {
  I.click("百度一下");
});

Then('I should see codeceptjs', () => {
  I.see("CodeceptJS")
});
