
import { Controller } from 'egg';

class UserActricleController extends Controller {
  public async Upload() {
    const { ctx } = this;
    const { actricle_name, actricle_title, actricle_img, actricle_id } = ctx.request.body;
    // 定义请求参数类型
    const createRule = {
      actricle_name: { type: 'string', required: true, allowEmpty: false },
      actricle_title: { type: 'string', required: true, allowEmpty: false },
      actricle_img: { type: 'string', required: false, allowEmpty: true },
      actricle_id: { type: 'number', required: true, allowEmpty: false },
    };
    try {
      // 校验
      ctx.validate(createRule);
    } catch (err) {
      ctx.body = { message: '添加文章失败！参数缺失活', code: 401, data: err.errors };
      return;
    }
    console.log(4444, actricle_name, actricle_title, actricle_img, actricle_id);
    ctx.body = { code: 200, message: '添加成功' };
  }
}
export default UserActricleController;
