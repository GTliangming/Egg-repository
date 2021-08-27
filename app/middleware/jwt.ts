import { Context } from 'egg';
const JwtCheckout = (secret: string) => {
  return async (ctx: Context, next: any) => {
    const token = ctx.request.header.authorization as string; // 拿到toke
    console.log('token---->', token);
    if (token !== 'null' && token) {
      try {
        const formatToken = token.split(' ')[1];
        // 解密 token
        ctx.app.jwt.verify(formatToken, secret);
        await next();
      } catch (error) {
        console.log(error);
        if (error.name === 'TokenExpiredError') {
          console.log('Token过期！');
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

export default JwtCheckout;
