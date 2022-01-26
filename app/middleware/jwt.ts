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
      } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
          LogErr('Token过期！');
          ctx.throw(401, 'invalid token');
        }
      }
    } else {
      ctx.throw(401, 'no token detected in http header "Authorization"');
    }
  };
};

export default JwtCheck;
