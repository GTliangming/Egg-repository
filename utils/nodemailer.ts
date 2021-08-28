/*  邮箱验证码实现 */

import { createTransport } from 'nodemailer';

// 创建一个smtp服务器
const config = {
  host: 'smtp.163.com',
  port: 465,
  auth: {
    user: 'lmzs124083@163.com', // 注册的163邮箱账号
    pass: 'XPHVMFGAGWOXFMTH', // 邮箱的授权码，不是注册时的密码,等你开启的stmp服务自然就会知道了
  },
};


// 创建一个SMTP客户端对象
const transporter = createTransport(config);

// 发送邮件
export const sendMail = async mail => {
  await transporter.sendMail(mail, err => {
    if (err) {
      console.log(err);
      return false;
    }
    console.log('发送成功');
    return true;
  });
};
