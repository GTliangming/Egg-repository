import { Service } from 'egg';
import { LogInfo } from '../../utils/log';
/**
 * Test Service
 */
export default class UserService extends Service {

  /**
     * sayHi to you
     * @param name - your name
     */
  public async doRegister(username: string, password: string) {
    console.log(33333, username, password);
    // const result = await this.app.mysql.query('select * from test', []).then(res => console.log(444, res));
    const result = await this.app.mysql.select('article');
    // const result = await this.app.mysql.sel('users', { id: 1 });
    LogInfo(result);
    return { username, password, result };
  }
}
