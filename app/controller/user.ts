import { Controller } from 'egg';
// import { decodeMd5, md5 } from '../../utils/md5';
const consola = require('consola');
export default class UserController extends Controller {
  // 注册
  public async Register() {
    const ctx = this.ctx;
    ctx.body = { message: '注册成功！', code: 1 };
  }

  // // 登录
  // public async Login() {
  //   const { ctx, app } = this;
  //   const { username, password } = ctx.request.body;
  //   // 生成 token 加盐
  //   const token = app.jwt.sign({
  //     id: 1,
  //     username,
  //     exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // token 有效期为 24 小时
  //     // exp: Math.floor(Date.now() / 1000) + 10, // 测试 --- token 有效期为 10秒
  //   }, app.config.jwt.secret);
  //   const newPWd = md5(password);
  //   const result = decodeMd5(newPWd);
  //   consola.info(2222, username, password);
  //   ctx.body = { message: '登录成功2！', code: 1, data: { token, newPWd, result } };

  // }

  // // 获取用户信息
  // public async GetUserInfo() {
  //   const ctx = this.ctx;
  //   ctx.body = { message: '获取成功', code: 1 };
  // }

  // cookie
  public async SetAuth() {
    this.ctx.cookies.set('auth', 'test', {
      maxAge: 24 * 3600 * 1000, // 过期时间  1天
      httpOnly: true,
      signed: true, // 对cookie进行签名，防止被修改
      encrypt: true, // 对cookie进行加密， 如果加密，则在获取的时候需要对cookie进行解密
    });
    this.ctx.body = { message: '设置cookie成功', code: 200 };
  }
  public async Auth() {
    // cookie
    const cookie = this.ctx.cookies.get('auth', { encrypt: true });
    this.ctx.body = { message: `刚才设置的cookie是: ${cookie}`, code: 200 };
  }
  public async ClearAuth() {
    // cookie
    this.ctx.cookies.set('auth', null);
    this.ctx.body = { message: 'cookie清除成功', code: 200 };
  }


  // session
  // cookie
  public async setSession() {
    this.ctx.session.auth = 'test';
    this.ctx.body = { message: '设置session成功', code: 200 };
  }
  public async getSession() {
    // cookie
    consola.log(this.ctx.session);
    const session = this.ctx.session.auth;
    this.ctx.body = { message: `刚才设置的session是: ${session}`, code: 200 };
  }


  // jwt
  // 登录
  public async Login() {
    const { ctx, app } = this;
    const { userid } = ctx.request.body;
    consola.log('userid', userid);
    // 生成 token
    const token = app.jwt.sign({
      userid,
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // token 有效期为 24 小时
      // exp: Math.floor(Date.now() / 1000) + 10, // 测试 --- token 有效期为 10秒
    }, app.config.jwt.secret);
    ctx.body = { message: '登录成功！', code: 1, data: { token } };
  }

  // 获取用户信息
  public async GetUserInfo() {
    const ctx = this.ctx;
    ctx.body = { message: `获取成功,登录的用户的用户ID为：${ctx.decode.userid}`, code: 1 };
  }


}
