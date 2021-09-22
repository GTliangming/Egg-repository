import { Controller } from 'egg';
import { v4 as uuidv4 } from 'uuid';
// import { decodeMd5, md5 } from '../../utils/md5';
export default class UserController extends Controller {
  // 注册
  public async Register() {
    const { ctx, app } = this;
    const { username, password, email, tel } = ctx.request.body;
    // 定义请求参数类型
    const createRule = {
      password: { type: 'string', required: true, allowEmpty: false },
      username: { type: 'string', required: true, allowEmpty: false },
    };
    try {
      // 校验
      ctx.validate(createRule);
    } catch (err) {
      ctx.body = { success: false };
      ctx.body = { message: '注册失败！参数缺失', code: 401, data: err.errors };
      return;
    }
    const user_auto_id = uuidv4();
    const result = await ctx.service.user.doRegister({ username, password, email, user_id: user_auto_id, tel });
    if (result.created) {
      const token = app.jwt.sign({
        id: user_auto_id,
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // token 有效期为 24 小时
      }, app.config.jwt.secret);
      ctx.body = { message: '注册成功', code: 200, token };
      return;
    }
    ctx.body = { message: '该邮箱或用户名已存在注册用户', code: 402 };
  }


  // jwt
  // 登录
  public async Login() {
    const { ctx, app } = this;
    const { username, password, email } = ctx.request.body;
    // 定义请求参数类型
    const createRule1 = {
      password: { type: 'string', required: true, allowEmpty: false },
      username: { type: 'string', required: true, allowEmpty: false },
    };
    const createRule2 = {
      password: { type: 'string', required: true, allowEmpty: false },
      email: { type: 'string', required: true, allowEmpty: false },
    };
    try {
      // 校验
      ctx.validate(email ? createRule2 : createRule1);
    } catch (err) {
      ctx.body = { success: false };
      ctx.body = { message: '登录失败！参数缺失', code: 401, data: err.errors };
      return;
    }
    const result = await ctx.service.user.doLogin({ username, password, email });
    if (result.created) {
      const token = app.jwt.sign({
        id: result.date.id,
        exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // token 有效期为 24 小时
      }, app.config.jwt.secret);
      ctx.body = { message: '登录成功', code: 200, token };
      return;
    }
    ctx.body = { message: '该邮箱或用户名未注册', code: 402 };
  }

  // 获取用户信息
  public async GetUserInfo() {
    const ctx = this.ctx;
    const result = await ctx.service.user.getUserInfo({ user_id: ctx.decode.id });
    if (result.isHave) {
      ctx.body = { message: `获取成功,登录的用户的用户ID为：${ctx.decode.id}`, code: 200, data: result };
      return;
    }
    ctx.body = { message: '获取失败', code: 402 };
  }
  // 更新用户信息
  public async UpdateUserInfo() {
    const ctx = this.ctx;
    const { username, password, email, tel } = ctx.request.body;
    const result = await ctx.service.user.updateUserInfo({ user_id: ctx.decode.id, username, password, email, tel });
    if (result) {
      ctx.body = { message: '更新成功', code: 200 };
      return;
    }
    ctx.body = { message: '更新失败', code: 402 };
  }
}
