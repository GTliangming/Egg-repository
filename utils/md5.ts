import * as crypto from 'crypto';


export const MD5_SUFFIX = 'www.lmwebs.top*#**';

// 密码加密
export const md5 = (pwd: string) => {
  const cipher = crypto.createCipher('aes192', MD5_SUFFIX);
  let crypted = cipher.update(pwd, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};
// 密码解密
export const decodeMd5 = (md5Pwd: string) => {
  const decipher = crypto.createDecipher('aes192', MD5_SUFFIX);
  let decrypted = decipher.update(md5Pwd, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};
