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
        tel: parameter.tel,
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
          { username: parameter.username, password: parameter.password },
          { email: parameter.email, password: parameter.password },
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
    date?: any; isHave?: boolean
  }> {
    try {
      const user = await this.ctx.model.User.findOne({
        where: {
          user_id: parameter.user_id,
        },
      });
      return { date: user, isHave: true };
    } catch (error) {
      return { date: null, isHave: false };
    }
  }
  /**
   *  根据userID  更新用户信息(密码、邮箱、电话但不包含用户类型)
   * @param parameter - 查询参数
   */
  public async updateUserInfo(parameter: parameterType): Promise<boolean> {
    try {
      const user = await this.ctx.model.User.findOne({
        where: {
          user_id: parameter.user_id,
        },
      });
      await user.update({ ...parameter });
      return true;
    } catch (error) {
      return false;
    }
  }
}
