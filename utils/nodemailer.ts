/*  邮箱验证码实现 */

import { createTransport } from 'nodemailer';
import { createSixNum } from './common';
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


// 邮件内容

export interface mailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

// 发送邮件
export const sendMail = async (email: string) => {
  const defalutOptions = {
    from: 'lmzs124083@163.com',
    to: email,
    subject: '测试邮件',
    html: `你的验证码为${createSixNum()}`,
  } as mailOptions;

  try {
    const result = await transporter.sendMail(defalutOptions);
    if (result) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};
