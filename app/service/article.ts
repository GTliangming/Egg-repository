import { Service } from 'egg';
import { FileStream } from '../../typings/app';
/**
 * Test Service
 */
export default class Article extends Service {

  /**
   * sayHi to you
   * @param stream - 文件流
   */


  public async getStreamInfo(stream: FileStream) {
    let mdStr = '';
    let errFlag = false;
    stream.on('data', chunk => {
      mdStr += chunk;
    });
    stream.on('end', () => {
      // return { streamStr: mdStr, errFlag };
    });
    stream.on('error', error => {
      errFlag = true;
      console.log(error);
    });
    setTimeout(() => {
      return { streamStr: mdStr, errFlag };
    }, 500);
  }
}
