
import { Controller } from 'egg';

class UploadController extends Controller {
  public async getFolderList() {
    const { ctx } = this;
    const result = await ctx.service.upload.getAllFolderList();
    ctx.body = {
      code: 200,
      result,
    };
  }
  public async getList() {
    const { ctx } = this;
    const { id } = ctx.request.query;
    const result = await ctx.service.upload.getAllList(Number(id));
    ctx.body = {
      code: 200,
      result,
    };
  }
  public async SaveImg() {
    const { ctx } = this;
    const { hash, src, folderid } = ctx.request.body;
    const result = await ctx.service.upload.SaveImg({ hash, src, folderid });
    if (result.date) {
      ctx.body = {
        code: 200,
        result: result.date,
      };
      return;
    }
    ctx.body = {
      code: 400,
      message: result.message,
    };
  }
  public async SaveFolder() {
    const { ctx } = this;
    const { foldername } = ctx.request.body;
    const result = await ctx.service.upload.SaveFolder(foldername);
    if (result.date) {
      ctx.body = {
        code: 200,
        result: result.date,
      };
      return;
    }
    ctx.body = {
      code: 400,
      message: result.message,
    };
  }
  /* 获取七牛云的Token */
  public async Qiniu() {
    const { ctx } = this;
    const token = await ctx.service.upload.getQiniuToken();
    if (token) {
      ctx.body = {
        code: 200,
        message: 'success',
        token,
      };
      return;
    }
    ctx.body = {
      code: 400,
      message: 'error',
    };
  }
}
export default UploadController;
