import { Context } from 'egg';
const consola = require('consola');
const JwtCheck = (secret: string) => {
  return async (ctx: Context, next: any) => {
    const token = ctx.request.header.authorization as string; // 拿到toke
    consola.info('token---->', token);
    if (token !== 'null' && token) {
      try {
        const formatToken = token.split(' ')[1];
        // 解密 token
        ctx.app.jwt.verify(formatToken, secret);
        await next();
      } catch (error) {
        consola.error(error);
        if (error.name === 'TokenExpiredError') {
          consola.info('Token过期！');
          ctx.body = {
            msg: 'token已过期，请重新登录',
            code: 401,
          };
          return;
        }
        ctx.body = {
          msg: 'token已失效，请重新登录',
          code: 401,
        };
        return;
      }
    } else {
      ctx.status = 200;
      ctx.body = {
        code: 401,
        msg: 'token不存在',
      };
      return;
    }
  };
};

export default JwtCheck;
