import { Context } from 'egg';
const consola = require('consola');
const JwtCookie = (secret: string) => {
  return async (ctx: Context, next: any) => {
    const cookies = ctx.cookies.get(secret, {
      encrypt: true,
    }) as string; // 拿到cookie
    consola.info('cookie---->', cookies);
    if (cookies) {
      await next();
    } else {
      ctx.body = {
        code: 401,
        msg: 'cookie不存在',
      };
      return;
    }
  };
};

export default JwtCookie;
