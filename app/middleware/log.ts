import { Context } from 'egg';
const consola = require('consola');

const getClientIp = (req: any) => {
  return (
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
  );
}


const showLog = () => {
  return async (ctx: Context, next: any) => {
    consola.info(333)
    consola.info(`${new Date()}-[${getClientIp(ctx.req)}]-${ctx.req.url}`);
    await next();
  };
};

export default showLog;
