import { Service } from 'egg';
import { sendMail } from '../../utils/nodemailer';
export default class Common extends Service {

  public async sendEmail(email: string) {
    try {
      const result = await sendMail(email);
      return result;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
