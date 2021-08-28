import { Controller } from 'egg';
export default class CommonController extends Controller {

  public async sendEmail() {
    const { ctx } = this;
    const { email } = ctx.request.body;
    if (!email) {
      ctx.body = {
        code: 400,
        msg: '参数错误',
      };
    }
    try {
      const result = await ctx.service.common.sendEmail(email);
      if (result) {
        ctx.body = {
          code: 200,
          msg: '验证码发送成功！请在邮箱中查看',
        };
      }
      ctx.body = {
        code: 500,
        msg: '系统错误',
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '系统错误',
      };
    }
  }
}
