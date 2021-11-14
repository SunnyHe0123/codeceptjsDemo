Feature('');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://www.baidu.com');
    pause({ func: () => console.log('hello'), func2: () => console.log("======") });
    I.amOnPage('https://tieba.baidu.com');
});
