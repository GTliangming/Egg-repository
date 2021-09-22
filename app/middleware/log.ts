import { Context } from 'egg';
import { LogInfo } from '../../utils/log';


const showLog = () => {
  return async (ctx: Context, next: any) => {
    LogInfo(`[${new Date()}] - [${ctx.ip}] - ${ctx.req.url}`);
    await next();
  };
};

export default showLog;
