import { Application } from 'egg';
import { connectMongo } from '../mongodb';
export default (app: Application) => {
  const { controller, router, env } = app;
  console.log(232, env);
  connectMongo(env);
  router.get('/', controller.home.index);
};
