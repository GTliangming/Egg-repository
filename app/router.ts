import { Application } from 'egg';
export default (app: Application) => {
  const { controller, router, middleware } = app;
  const _jwt = middleware.jwt(app.config.jwt.secret);
  // const _Session = middleware.session();
  /* 工具路由 */

  // 发送验证码
  router.post('/api/common/sendEmail', controller.common.sendEmail);
  // 生成头像
  router.get('/api/common/getIcon', controller.common.getIcon);

  router.get('/api/common/test', controller.common.Test);
  /* 用户相关 */

  // 注册
  router.post('/api/user/register', controller.user.Register);

  // 后台用户登录
  router.post('/api/user/admin-login', controller.user.AdminLogin);

  // 登录
  router.post('/api/user/login', controller.user.Login);
  // 获取用户信息
  router.post('/api/user/getUserInfo', _jwt, controller.user.GetUserInfo);
  // 更新用户信息
  router.post('/api/user/updateUserInfo', _jwt, controller.user.UpdateUserInfo);
};
