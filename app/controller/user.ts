import { Controller } from 'egg';
// import { decodeMd5, md5 } from '../../utils/md5';
const consola = require('consola');
export default class UserController extends Controller {
  // 注册
  public async Register() {
    const ctx = this.ctx;
    ctx.body = { message: '注册成功！', code: 1 };
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
