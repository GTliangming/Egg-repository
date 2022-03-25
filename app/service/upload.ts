import { Service } from 'egg';
import { accessKey, secretKey, bucket } from '../../config';

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
}
