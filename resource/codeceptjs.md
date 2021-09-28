## **tests**Codeceptjs

### 一、简介

CodeceptJS 是一个现代的端到端测试框架，具有特殊的 BDD（Behavior Driven Development， 行为驱动开发） 风格的语法。测试被编写为用户在站点上的操作的线性场景。

### 二、特点

1、**从用户角度编写**

codeceptjs提供的API具有[declarative testing](https://link.jianshu.com?t=https://support.saucelabs.com/hc/en-us/articles/115009283587-Imperative-v-Declarative-Testing)的特点，从用户行为的角度抽象出了许多与浏览器的交互动作，测试代码非常易读易懂。codeceptjs提供的API由于其易读性也可以当成DSL来使用，这些DSL隐藏了后端webdriver服务的复杂性，可以让使用者更加专注到测试场景的编写中

2、**所有的交互动作来自于对象`I`**

对象`I`的方法都被描述为用户访问网站可能产生的行为，易读易写易维护。

3、**对多个后端API兼容**

codeceptjs支持多个webdriver实现 i.e. webdriverio, protractor and phantomjs, 我们可以很简单在他们之间切换。这些不同的webdriver实现在codeceptjs里面叫做*Helper*，正是下面这些Helper给对象`I`提供了actions

- [Webdriverio](https://link.jianshu.com/?t=http://webdriver.io/)
- [Protractor](https://link.jianshu.com/?t=http://www.protractortest.org/)
- [Phantomjs](https://link.jianshu.com/?t=http://phantomjs.org/)
- [Nigntmare](https://link.jianshu.com/?t=http://www.nightmarejs.org/)
- [Appium](https://link.jianshu.com/?t=http://appium.io/)
- [Selenium Webdriver](https://link.jianshu.com/?t=https://www.npmjs.com/package/selenium-webdriver)

### 三、架构

CodeceptJS 通过执行命令到help程序。根据启用的help程序，测试将以不同的方式执行。如果需要跨浏览器支持，您应该选择基于 Selenium 的 WebDriver 或 TestCafé。如果您对速度感兴趣 - 应该使用基于 Chrome 的 Puppeteer。

下面是 CodeceptJS 架构图：

![architecture](C:\Users\Administrator\Desktop\codeceptjs\architecture.svg)

所有help共享相同的 API，因此很容易将测试从一个后端迁移到另一个后端。

但是，由于后端的差异及其限制，不能保证它们彼此兼容。

例如，您不能在 WebDriver 或 Protractor 中设置请求标头，但可以在 Puppeteer 或 Nightmare 中设置。

### 四、安装

1.通过安装程序创建一个新项目create-codeceptjs （https://github.com/codeceptjs/create-codeceptjs）

是最简单的开始方式.

第一步：先切换淘宝镜像

```shell
npm config set registry https://registry.npm.taobao.org
```

第二步、安装 CodeceptJS + Puppeteer 到当前目录

```shell
npx create-codeceptjs . --puppeteer
```

第三步：初始化Codeceptjs

```shell
npx codeceptjs init
```



![image1](C:\Users\Administrator\Desktop\codeceptjs\image1.png)

![image2](C:\Users\Administrator\Desktop\codeceptjs\image2.png)

2.标准安装

第一步：创建一个文件夹，并进行初始化

```shell
npm init -y
```

第二步：安装Codeceptjs

```shell
npm install codeceptjs puppeteer --save-dev
```

第三步：初始化Codeceptjs

```shell
npx codeceptjs init
```

第四步：运行codeceptjs

```
npm run codeceptjs
```

![image3](C:\Users\Administrator\Desktop\codeceptjs\image3.png)

### 五、编写测试

1）hello world.

```js
Feature('CodeceptJS demo');

Scenario('check Welcome page on site', ({ I }) => {
  I.amOnPage('/');
  I.see('Welcome');
});
```

2.运行测试

要启动测试使用的`run`命令，以执行测试[多个浏览器](https://codecept.io/advanced/#multiple-browsers-execution)或[多个线程](https://codecept.io/advanced/#parallel-execution)使用的`run-multiple`命令

3.详细程度

要查看运行测试的分步输出，请添加`--steps`标志：

```shell
npx codeceptjs run --steps
```

要查看更详细的输出，请添加`--debug`标志：

```
npx codeceptjs run --debug
```

要查看非常详细的输出信息，请使用以下`--verbose`标志：

```
npx codeceptjs run --verbose
```

4.筛选

如果您提供此类文件的相对路径，则可以执行单个测试文件

```shell
npx codeceptjs run github_test.js

# or

npx codeceptjs run admin/login_test.js
```

要按名称过滤测试，请使用`--grep`参数，它将执行名称与正则表达式模式匹配的所有测试。

要运行包含`slow`单词的所有测试：

```shell
npx codeceptjs run --grep "slow"
```

5.并行运行?

从 CodeceptJS 2.3 开始，您可以使用 NodeJS 工作线程并行运行测试。此功能需要 NodeJS >= 11.6。使用`run-workers`带有工人（线程）数量的命令来拆分测试。

```
npx codeceptjs run-workers 3
```

### 六、配置

CodeceptJS配置在**codecept.conf.js**文件中设置。

执行 `npx codeceptjs init`应该保存在测试根目录中。在配置文件中，可以启用和配置`helper`和插件，并设置引导和拆卸脚本

完整配置参考（https://codecept.io/configuration/）

以下是可用选项及其默认值:

| option      | 默认值           | 描述                                                         |
| ----------- | ---------------- | ------------------------------------------------------------ |
| tests       | "./*_test.js"    | 模式定位测试。允许输入[glob模式](https://github.com/isaacs/node-glob)，可以是单个文件测试，也可以是一组测试 |
| grep        |                  | 按名称过滤测试                                               |
| include     | {}               | 要在DI容器中注册并包含在测试中的actor和page object。         |
| timeout     | 1000             | 测试默认的timeout时间                                        |
| output      | "./output"       | 存储失败截图的目录                                           |
| helpers     | {}               | 启用的helper列表                                             |
| mocha       | {}               | https://codecept.io/reports/#xml                             |
| multiple    | {}               | [Multiple Execution](https://codecept.io/parallel#multiple-browsers-execution) |
| bootstrap   | "./bootstrap.js" |                                                              |
| teardown    |                  |                                                              |
| noGlobals   | false            | 禁止注册全局变量，如Actor`, `Helper`, `pause`, `within`, `DataTable |
| hooks       |                  | 包括插入到执行工作流中的自定义侦听器                         |
| translation |                  | 区域设置用于打印步骤输出，以及在源代码中使用。               |
| require     | []               | 在codecept开始之前需要的模块名称数组。https://codecept.io/configuration/#require |

## Puppeteer

puppeteer help 配置： https://codecept.io/helpers/Puppeteer/#configuration

Extends Helper

| name                  | description                                                  |
| --------------------- | ------------------------------------------------------------ |
| url                   | 待测试网站的base url                                         |
| basicAuth             | 传递给base url的基本身份验证                                 |
| show                  | 显示调试谷歌Chrome窗口。                                     |
| restart               | 在测试之间重新启动浏览器                                     |
| disableScreenshots    | 失败时不要保存截图                                           |
| fullPageScreenshots   | 对失败进行完整的页面截图                                     |
| uniqueScreenshotNames | 选项，以防止屏幕截图覆盖，比如有不同套件中的相同名称的场景   |
| keepBrowserState      | 当restart设置为false时，在测试之间保持浏览器状态             |
| keepCookies           | 当restart设置为false时，在测试之间保持cookie                 |
| waitForAction         | 在点击、双击或按下键后等待多长时间，以毫秒为单位。默认为100ms |
| waitForNavigation     | 何时考虑导航成功。可能的选项:load,domcontentloaded, networkidle0, networkidle2,参见[Puppeteer AP](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagewaitfornavigationoptions)I。数组值也可以接受。 |
| pressKeyDelay         | 在ms中按键之间的延迟。在fillField/appendField中调用Puppeteers时使用 |
| getPageTimeout        | 选项设置最大导航时间(以毫秒为单位)。如果timeout设置为0，那么timeout将被禁用 |
| waitForTimeout        | 默认等待*超时毫秒。默认值:1000。                             |
| windowSize            | 默认的窗口大小。默认设置尺寸为640x480                        |
| userAgent             | user-agent string.                                           |
| manualStart           | 不要在测试前启动浏览器，在helper中使用this.helpers["Puppeteer"]. _startbrowser()手动启动浏览器。 |
| browser               | 可以在使用[puppeteer-firefox](https://codecept.io/helpers/Puppeteer-firefox)时更改为firefox(打开新窗口)。 |
| chrome                | 传递额外的[puppeteer运行选项](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#puppeteerlaunchoptions) |



```js
exports.config = {
  helpers: {
    // enabled helpers with their configs
  },
  plugins: {
    // list of used plugins
  },
  include: {
    // current actor and page objects
  }
}
```

同一个项目可以有多个配置文件，在这种情况下，您可以指定一个`-c`在运行时使用的配置文件。

```shell
npx codeceptjs run -c codecept.ci.conf.js
```

调整 WebDriver、Puppeteer 等助手的配置可能很困难，因为它需要对这些技术的工作原理有很好的了解。使用[`@codeceptjs/configure` ](https://github.com/codeceptjs/configure)带有常见配置配方的包。

例如，您可以设置窗口大小或切换无头模式，无论实际使用哪个助手。

```js
const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure');

// run headless when CI environment variable set
setHeadlessWhen(process.env.CI);
// set window size for any helper: Puppeteer, WebDriver, TestCafe
setWindowSize(1600, 1200);

exports.config = {
  // ...
}
```

查看更多配置（https://github.com/codeceptjs/configure）

### 七、调试

CodeceptJS 允许在保持浏览器打开的同时即时编写和调试测试。通过使用交互式 shell，您可以随时停止执行并输入任何 CodeceptJS 命令。

打开页面调用`pause()`后开始与页面交互

```js
I.amOnPage('/');
pause();
```

失败时暂停

```shell
npx codeceptjs run -p pauseOnFail
```

失败截图

默认情况下，CodeceptJS 保存失败测试的屏幕截图。这可以在[screenshotOnFail 插件中](https://codecept.io/plugins/#screenshotonfail)配置

### 八、重试

您可以通过启用[retryFailedStep Plugin](https://codecept.io/plugins/#retryfailedstep)来自动重试失败的步骤。

重试步骤

除非您使用 retryFailedStep 插件，否则您可以手动控制项目中的重试。

如果您有一个经常失败的步骤，您可以重试执行这一步。`retry()`在操作之前使用该函数要求 CodeceptJS 在失败时重试：

```js
I.retry().see('Welcome');
```

如果您想多次重试一个步骤，请将次数作为参数

```js
I.retry(3).see('Welcome');

// retry action 3 times waiting for 0.1 second before next try
I.retry({ retries: 3, minTimeout: 100 }).see('Hello');

// retry action 3 times waiting no more than 3 seconds for last retry
I.retry({ retries: 3, maxTimeout: 3000 }).see('Hello');

// retry 2 times if error with message 'Node not visible' happens
I.retry({
  retries: 2,
  when: err => err.message === 'Node not visible'
}).seeElement('#user');
```

将函数传递给`when`选项以仅在错误与预期匹配时重试

重试场景

```
Scenario('Really complex', ({ I }) => {
  // test goes here
}).retry(2);

// alternative
Scenario('Really complex', { retries: 2 },({ I }) => {});
```

此场景将在失败时重新启动两次。与重试步骤不同，`when`场景级别不支持重试条件

重试功能

要为文件中的所有场景设置此选项，请添加`retry`到功能：

```js
Feature('Complex JS Stuff').retry(3);
```

此功能中的每个场景都将重新运行 3 次。您可以通过将`retries`选项传递给场景来为特定场景设置例外

### 九、Before

常见的准备步骤，如打开网页或登录用户，可以放在`Before`或`Background`钩子中：

```js
Feature('CodeceptJS Demonstration');

Before(({ I }) => { // or Background
  I.amOnPage('/documentation');
});

Scenario('test some forms', ({ I }) => {
  I.click('Create User');
  I.see('User is valid');
  I.dontSeeInCurrentUrl('/documentation');
});

Scenario('test title', ({ I }) => {
  I.seeInTitle('Example application');
});
```

与`Before`您可以用来`After`为每个场景运行拆卸相同

BeforeSuite

所有测试之前运行复杂的设置并且必须在之后拆除它

>注意：
>
>可以使用`BeforeSuite`和`AfterSuite`函数。 `BeforeSuite`和AfterSuite`都可以访问该`I`对象，但`BeforeSuite/AfterSuite`不能访问浏览器，因为此时它没有运行。您可以使用它们来执行将设置您的环境的处理程序。`BeforeSuite/AfterSuite`仅适用于它在其中声明的文件（因此您可以为文件声明不同的设置）

