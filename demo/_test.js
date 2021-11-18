Feature('Test');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://www.baidu.com');
    // pause({ func: () => console.log('hello'), func2: () => console.log("======") });
    // I.amOnPage('https://tieba.baidu.com');
    I.test();
});

Scenario.skip('test github', ({ I }) => {
    // I.amOnPage('https://www.github.com');
    I.test();
});

Scenario.skip('test hello', ({ I }) => {
    I.say("hello");
    I.test();
});
