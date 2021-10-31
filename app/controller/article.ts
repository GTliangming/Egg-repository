/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from 'egg';
const marked = require('marked');
marked.setOptions({ // marked 设置
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});
export default class ArticleController extends Controller {
  // 注册
  public async UploadFile() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const result = await ctx.service.article.getStreamInfo(stream, ctx.decode.id);
    if (result.isupload) {
      ctx.body = { code: 200, message: '上传成功', actricle_id: result.actricle_id };
      return;
    }
    ctx.body = { code: 401, message: '上传失败' };

    // const filename = new Date().getTime() + '~' + stream.filename; // stream对象也包含了文件名，大小等基本信息
    // // 创建文件写入路径
    // const target = path.join('./', `uploadfile/${filename}`);
    // const result = await new Promise((resolve, reject) => {
    //   // 创建文件写入流
    //   const remoteFileStrem = fs.createWriteStream(target);
    //   // 以管道方式写入流
    //   stream.pipe(remoteFileStrem);
    //   let errFlag;
    //   // 监听error事件
    //   remoteFileStrem.on('error', err => {
    //     errFlag = true;
    //     // 停止写入
    //     sendToWormhole(stream);
    //     remoteFileStrem.destroy();
    //     console.log(err);
    //     reject(err);
    //   });
    //   // 监听写入完成事件
    //   remoteFileStrem.on('finish', () => {
    //     if (errFlag) return;
    //     resolve({ filename, name: stream.fields.name });
    //   });
    // });
  }

}
