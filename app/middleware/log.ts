import { Context } from 'egg';
import { LogInfo } from '../../utils/log';

const getClientIp = (req: any) => {
  return (
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
  );
};


const showLog = () => {
  return async (ctx: Context, next: any) => {
    LogInfo(`[${new Date()}] - [${getClientIp(ctx.req)}] - ${ctx.req.url}`);
    await next();
  };
};

export default showLog;
