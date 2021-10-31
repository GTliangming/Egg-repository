import { Service } from 'egg';
import { FileStream } from '../../typings/app';
import { markedToHtml } from '../../utils/marked';


/**
 * Article Service
 */
export default class Article extends Service {

  /**
   * sayHi to you
   * @param stream - 文件流
   */


  public async getStreamInfo(stream: FileStream, actricle_author: string): Promise<{
    isupload: boolean, actricle_id: string
  }> {
    try {
      let mdStr = '';
      const result: string = await new Promise((resolve, reject) => {
        stream.on('data', chunk => {
          mdStr += chunk;
        });
        stream.on('end', () => {
          resolve(mdStr);
        });
        stream.on('error', error => {
          console.log(error);
          reject(error);
        });
      });
      const htmlStr = markedToHtml(result);
      if (!htmlStr || htmlStr === '') {
        return { isupload: false, actricle_id: '' };
      }
      const actricleResult = await this.ctx.model.Actricle.create({
        actricle_text: htmlStr,
        actricle_author,
      });
      return { isupload: true, actricle_id: actricleResult.dataValues.actricle_id };
    } catch (error) {
      return { isupload: false, actricle_id: '' };
    }
  }
}
