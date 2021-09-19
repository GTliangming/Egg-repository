import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;
  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1629789199483_2090';
  config.session = {
    // 设置session cookis里面的key
    key: 'SESSION_KEY',
    // 设置过期时间
    maxAge: 24 * 3600 * 1000,
    httpOnly: true,
    // 设置是否加密
    encrypt: true,
    // 设置每次刷新页面的时候session是否都会被延期
    renew: true,
  };
  config.jwt = {
    secret: 'egg-test',
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['*'], // 配置白名单
  };
  config.cors = {
    // origin: '*', // 访问白名单
    credentials: true, // 允许 Cookie 跨域跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  config.validate = { convert: true };
  // add your egg config in here
  config.middleware = ['log'];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '123.56.31.193',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'lmzs124083',
      // 数据库名
      database: 'egg',
      debugger: true,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
