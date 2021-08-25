import { Application } from 'egg';
import { connectMongo } from '../mongodb';
export default (app: Application) => {
  const { controller, router, env } = app;
  connectMongo(env);
  router.get('/', controller.home.index);
  router.get('/user', controller.home.getUsers);
  router.post('/user', controller.home.addUser);
  router.put('/user', controller.home.updateUser);
  router.delete('/user', controller.home.deleteUser);
};
