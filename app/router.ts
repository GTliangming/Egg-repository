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
  router.get('/api/common/time', controller.common.Time);

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


  /* 文章相关 */
  // 文章上传
  router.post('/api/article/upload-file', _jwt, controller.article.UploadFile);

  /* 用户文章相关 */
  router.post('/api/userArticle/upload', _jwt, controller.userArticle.Upload);


  /* 用于香芋味影评的 */
  router.post('/api/taro/additem', controller.taro.ADD);
  router.post('/api/taro/updateitem', controller.taro.Update);
  router.get('/api/taro/getItem', controller.taro.GetItem);
  router.get('/api/taro/getList', controller.taro.GetList);

  /* 用于微信小程序登录验证 */
  router.post('/api/wechat/auth', controller.wechat.Auth);
  router.post('/api/wechat/login', controller.wechat.Login);
};
