import { Application } from 'egg';
export default (app: Application) => {
  const { controller, router, middleware } = app;
  const _jwt = middleware.jwt(app.config.jwt.secret);

  /* 工具路由 */

  // 发送验证码
  router.post('/api/common/sendEmail', controller.common.sendEmail);


  /* 用户相关 */

  // 注册
  router.post('/api/user/register', controller.user.Register);
  // 登录
  router.post('/api/user/login', controller.user.Login);
  // 获取用户信息
  router.post('/api/user/getUserInfo', _jwt, controller.user.GetUserInfo);

};
