import { Application } from 'egg';
export default (app: Application) => {
  const { controller, router, middleware } = app;
  const _jwt = middleware.jwt(app.config.jwt.secret);
  const _Cookie = middleware.cookie('auth');
  // const _Session = middleware.session();
  /* 工具路由 */

  // 发送验证码
  router.post('/api/common/sendEmail', controller.common.sendEmail);
  // 生成头像
  router.get('/api/common/getIcon', controller.common.getIcon);


  /* 用户相关 */

  // 注册
  router.post('/api/user/register', controller.user.Register);
  // 登录
  router.post('/api/user/login', controller.user.Login);
  // 获取用户信息
  router.post('/api/user/getUserInfo', _jwt, controller.user.GetUserInfo);


  // 授权验证
  // cookie校验
  router.get('/api/user/setauth', controller.user.SetAuth);
  router.get('/api/user/auth', _Cookie, controller.user.Auth);
  router.get('/api/user/clearauth', _Cookie, controller.user.ClearAuth);


  // session校验
  router.get('/api/user/setsession', controller.user.setSession);
  router.get('/api/user/session', controller.user.getSession);
};
