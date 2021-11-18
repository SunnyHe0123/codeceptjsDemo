Feature('Test Login');

// Scenario.skip('login github', ({ I }) => {
//     I.amOnPage('https://github.com');

//     within('.js-signup-form', () => {
//         I.fillField('user[login]', 'User');
//         I.fillField('user[email]', 'user@user.com');
//         I.fillField('user[password]', 'user@user.com');
//         I.click('button');
//     });

//     I.see('There were problems creating your account.');
// });

Scenario("login github", ({I, myPageObjectPage, myFragmentFragment}) => {
    I.amOnPage("https://github.com/login");
    myPageObjectPage.sendForm("sunnyhe0123@outlook.com", "xiang19950416li");
    I.see("GitHub");
    myPageObjectPage.testPageObject();
    myFragmentFragment.testFragment();
});

Scenario.todo('Test',  I => {
    /**
     * 1. Click to field
     * 2. Fill field
     *
     * Result:
     * 3. Field contains text
     */
});
    