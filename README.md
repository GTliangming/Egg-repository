# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

### 目录结构
egg-project
├── package.json
├── app(项目开发目录)
|   ├── router.js (用于配置 URL 路由规则)
│   ├── controller (解析前端的请求,并分配不同的业务逻辑处理方法)
│   |   └── home.js
│   ├── service (用于编写业务逻辑层)
│   |   └── user.js
│   ├── middleware (用于编写中间件)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (用于放置静态资源)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (用于框架的扩展)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── utils (用于编写工具方法)
├── config (用于编写配置文件)
|   ├── plugin.js(用于配置需要加载的插件)
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test (用于单元测试)
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
### 部分插件

1、处理跨域 `npm i egg-cors --save-dev`
2、连接mongodb `npm install egg-mongoose --save`
3、命令行打印每户 `npm i consola`
4、token加密解密 `npm i egg-jwt --save `
5、命令行美化 `npm i chalk  log-symbols`




生成头像的

`https://api.multiavatar.com/${name}.svg`
https://github.com/multiavatar/Multiavatar