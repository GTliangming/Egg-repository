import { Controller } from 'egg';
export default class TaroController extends Controller {

  public async Test() {
    const { ctx } = this;
    await ctx.render('index.html', { title: '测试页面' });
  }
  public async ADD() {
    const { ctx } = this;
    const { title, content } = ctx.request.body;
    // 定义请求参数类型
    const createRule = {
      title: { type: 'string', required: true },
      content: { type: 'string', required: true },
    };
    try {
      // 校验
      ctx.validate(createRule);
    } catch (err: any) {
      ctx.body = { message: '添加失败,电影名或内容缺失', code: 401, data: err.errors };
      return;
    }
    const result = await ctx.service.taro.addItem({ title, content });
    if (result.created) {
      ctx.body = { message: '添加成功', code: 200, data: result.date };
      return;
    }
    ctx.body = { message: '该条已存在', code: 402 };
  }
  public async Update() {
    const { ctx } = this;
    const { id, content } = ctx.request.body;
    // 定义请求参数类型
    if (!content || content === '') {
      ctx.body = { message: '不能添加空白内容哦', code: 402 };
      return;
    }
    const result = await ctx.service.taro.updateItem({ taro_id: id, content });
    if (result) {
      ctx.body = { message: '更新成功', code: 200 };
      return;
    }
    ctx.body = { message: '更新失败请重试', code: 402 };
  }
  public async GetList() {
    const { ctx } = this;
    const result = await ctx.service.taro.getList();
    if (result.result) {
      ctx.body = { message: '获取成功', code: 200, data: result.data };
      return;
    }
    ctx.body = { message: '获取失败', code: 402 };
  }
  public async GetItem() {
    const { ctx } = this;
    const { id } = ctx.request.query;
    const result = await ctx.service.taro.getItem({ taro_id: id });
    if (result.result) {
      ctx.body = { message: '获取成功', code: 200, data: result.data };
      return;
    }
    ctx.body = { message: '获取失败', code: 402 };
  }
}

