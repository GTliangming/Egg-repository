import { Service } from 'egg';
import { accessKey, secretKey, bucket } from '../../config';
import { Op } from 'sequelize';
const qiniu = require('qiniu');
// 需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = accessKey;
qiniu.conf.SECRET_KEY = secretKey;
export default class Upload extends Service {
  public async getQiniuToken() {
    const options = {
      scope: bucket,
      expires: 3600 * 24,
    };
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    if (uploadToken) {
      return uploadToken;
    }
    return null;

  }
  public async SaveImg(parameter: { hash: string, src: string, folderid: number }): Promise<{
    date: any; message: string;
  }> {
    try {
      const [result, created] = await this.ctx.model.FolderNameImg.findOrCreate({
        where: {
          [Op.or]: [
            { src: parameter.src },
            { hash: parameter.hash },
          ],
        },
        defaults: {
          hash: parameter.hash, src: parameter.src, folderid: parameter.folderid,
        },
      });
      if (created) {
        return { date: { id: result.dataValues.id, src: result.dataValues.src, folderid: result.dataValues.folderid }, message: '创建成功' };
      }
      return { date: false, message: '该图片已存在！' };
    } catch (error) {
      return { date: false, message: 'service err' };
    }
  }

  public async SaveFolder(foldername: string): Promise<{
    date: any; message: string;
  }> {
    try {
      const [result, created] = await this.ctx.model.FolderName.findOrCreate({
        where: {
          [Op.or]: [
            { foldername },
          ],
        },
        defaults: {
          foldername,
        },
      });
      if (created) {
        return { date: { id: result.dataValues.id, foldername: result.dataValues.foldername }, message: '创建成功' };
      }
      return { date: false, message: '该文件夹已存在！请在该文件夹下上传！' };
    } catch (error) {
      return { date: false, message: 'service err' };
    }
  }
  public async getAllFolderList() {
    try {
      const result = await this.ctx.model.FolderName.findAll({
      });
      return result;
    } catch (error) {
      return [];
    }
  }
  public async getAllList(id: number) {
    try {
      const result = await this.ctx.model.FolderNameImg.findAll({
        where: {
          folderid: id,
        },
      });
      return result;
    } catch (error) {
      return [];
    }
  }
}
