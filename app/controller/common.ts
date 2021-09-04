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
  public async getIcon() {
    const { key } = this.ctx.request.query;
    const iconName = key ? key : Math.random().toString(36).substr(3);
    const result = await this.ctx.curl('https://api.multiavatar.com/' + JSON.stringify(iconName));
    const img = new Buffer(result.data).toString();
    this.ctx.body = {
      code: 200,
      msg: 'hhh',
      date: {
        img,
        url: `https://api.multiavatar.com/${iconName}.png`,
      },
    };
  }
}
