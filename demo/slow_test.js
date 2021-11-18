Feature('Slow Test');

Scenario('test slow', { retries: 2 }, ({ I }) => {
    I.amOnPage('https://www.baidu.com');
    I.say("====111=======");
    I.see("百度一下");
});