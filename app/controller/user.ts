import { Controller } from 'egg';
import { LogInfo } from '../../utils/log';
// import { decodeMd5, md5 } from '../../utils/md5';
export default class UserController extends Controller {
  // 注册
  public async Register() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    // 定义请求参数类型
    const createRule = {
      password: { type: 'string', required: true, allowEmpty: false },
      username: { type: 'string', required: true, allowEmpty: false },
    };
    // try {
    // 校验
    ctx.validate(createRule);
    // const result = await ctx.service.user.doRegister(username, password);
    const result = await ctx.model.User.create({
      name: 'Jack',
      age: 18,
      username,
      password,
      created_time: new Date(),
      updated_time: new Date(),
    });
    // const result = await ctx.model.User.insert({
    //   name: 'Jack',
    //   age: 18,
    // });
    // const result = await ctx.model.User.findByPk(1);
    ctx.body = { message: '注册成功', code: 200, data: result };
    // } catch (err) {
    //   ctx.body = { success: false };
    //   ctx.body = { message: '注册失败！参数缺失', code: 401, data: err.errors };
    //   return;
    // }
  }

  // jwt
  // 登录
  public async Login() {
    const { ctx, app } = this;
    const { userid } = ctx.request.body;
    LogInfo('userid', userid);
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
