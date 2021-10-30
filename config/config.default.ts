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
    domainWhiteList: ['http://localhost:8080'], // 配置白名单
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

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.sequelize = {
    dialect: 'mysql', // 表示是mysql数据库
    host: '123.56.31.193',
    port: 3306,
    database: 'blog',
    username: 'root',
    password: 'lmzs1111',
    timezone: '+08:00', // 表示为东八区的时间,
  };

  config.multipart = {
    // mode: 'file',
    mode: 'stream',
    cleanSchedule: {
      // run tmpdir clean job on every day 04:30 am
      cron: '0 30 4 * * *',
    },
    fileSize: '50mb', //    文件大小限制-string, 错误：400 Bad request
    whitelist: ['.md'],
  };


  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
