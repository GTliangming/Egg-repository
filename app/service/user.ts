import { Service } from 'egg';
// import { LogInfo } from '../../utils/log';
/**
 * Test Service
 */
export default class UserService extends Service {

  /**
     * sayHi to you
     * @param name - your name
     */
  // public async doRegister(username: string, password: string) {
  //   console.log(33333, username, password);
  //   // 执行注册事务
  //   // const result = await this.ctx.service.sql.getOne('user', { username, password });
  //   // const result = await this.app.mysql.insert('user', { username: '111', password: '222' }).then(res => console.log(4444, res));
  //   // const result = await this.app.mysql.query('select id from user where username=?', [username]);
  //   // const result = await this.app.mysql.insert('user', { title: 'Hello World' });
  //   LogInfo(result);
  //   return { username, password, result };
  // }
}
