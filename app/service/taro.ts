import { Service } from 'egg';
import { Op } from 'sequelize';
export default class Taro extends Service {

  /**
  *  添加记录
  * @param parameter - 参数
  */
  public async addItem(parameter: { title: string, content: string }): Promise<{
    date: any; created: any;
  }> {
    console.log(2222, parameter);
    const [taro, created] = await this.ctx.model.Taro.findOrCreate({
      where: {
        [Op.or]: [
          { moivecontent: parameter.content },
        ],
      },
      defaults: {
        moivename: parameter.title,
        moivecontent: parameter.content,
      },
    });
    if (created) {
      return { date: taro, created };
    }
    return { date: null, created };
  }

  /**
    *  修改记录
    * @param parameter - 参数
    */
  public async updateItem(parameter: { taro_id: string, content: string }): Promise<boolean> {
    const taro = await this.ctx.model.Taro.findOne({
      where: {
        taro_id: parameter.taro_id,
      },
    });
    if (taro) {
      const result = await this.ctx.model.Taro.update({ moivecontent: parameter.content }, {
        where: {
          taro_id: parameter.taro_id,
        },
      });
      return !!result;
    }
    return false;
  }


  /**
      *  查询记录
      */
  public async getList(): Promise<{ data?: any, result: boolean }> {
    try {
      const taro = await this.ctx.model.Taro.findAll({});
      return { result: true, data: taro };
    } catch (error) {
      return { result: false };
    }
  }
}
