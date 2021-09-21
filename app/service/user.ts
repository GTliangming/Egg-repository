/* eslint-disable jsdoc/check-param-names */

import { Service } from 'egg';
import { LogInfo } from '../../utils/log';
import { Op } from 'sequelize';

export interface parameterType {
  username?: string;
  password?: string;
  email?: string;
  tel?: number;
  user_type?: number;
  user_id?: number;
}
export default class UserService extends Service {


  /**
     *  注册
     * @param parameter - 注册参数
     */
  public async doRegister(parameter: parameterType): Promise<{
    date: any; created: any;
  }> {
    const [user, created] = await this.ctx.model.User.findOrCreate({
      where: {
        [Op.or]: [
          { username: parameter.username },
          { email: parameter.email },
        ],
      },
      defaults: {
        username: parameter.username,
        password: parameter.password,
        email: parameter.email,
        user_id: parameter.user_id,
      },
    });
    LogInfo(user, created);
    if (created) {
      return { date: user, created };
    }
    return { date: null, created };
  }
  /**
     *  登录
     * @param parameter - 登录参数
     */
  public async doLogin(parameter: parameterType): Promise<{
    date?: any; created?: any; isHave?: boolean
  }> {
    const user = await this.ctx.model.User.findOne({
      where: {
        [Op.or]: [
          { username: parameter.username },
          { email: parameter.email },
        ],
      },
    });

    if (user === null) {
      return { date: null, isHave: false };
    }
    return { date: user, isHave: true };
  }
  /**
     *  根据userID 获取用户信息
     * @param parameter - 查询参数
     */
  public async getUserInfo(parameter: parameterType): Promise<{
    date?: any; created?: any; isHave?: boolean
  }> {
    const user = await this.ctx.model.User.findByPk(parameter.user_id);
    console.log(222, user);
    return { date: user, isHave: true };
  }
}
