import { Context } from 'egg';
import { LogErr } from '../../utils/log';
const JwtCheck = (secret: string) => {
  return async (ctx: Context, next: any) => {
    const token = ctx.request.header.authorization as string; // 拿到token
    let decode = '';
    if (token !== 'null' && token) {
      try {
        const formatToken = token.split(' ')[1];
        // 解密 token
        decode = ctx.app.jwt.verify(formatToken, secret);
        ctx.decode = decode;
        await next();
      } catch (error) {
        if (error.name === 'TokenExpiredError') {
          LogErr('Token过期！');
          ctx.body = {
            msg: 'token已过期，请重新登录',
            code: 401,
          };
          return;
        }
      }
    } else {
      ctx.body = {
        code: 401,
        msg: 'token不存在',
      };
      return;
    }
  };
};

export default JwtCheck;
