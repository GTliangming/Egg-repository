import { Controller } from 'egg';
import { decodeMd5, md5 } from '../../utils/md5';
const consola = require('consola');
export default class UserController extends Controller {
  // 注册
  public async Register() {
    const ctx = this.ctx;
    ctx.body = { message: '注册成功！', code: 1 };
  }

  // 登录
  public async Login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    // 生成 token 加盐
    const token = app.jwt.sign({
      id: 1,
      username,
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // token 有效期为 24 小时
      // exp: Math.floor(Date.now() / 1000) + 10, // 测试 --- token 有效期为 10秒
    }, app.config.jwt.secret);
    const newPWd = md5(password);
    const result = decodeMd5(newPWd);
    consola.info(2222, username, password);
    ctx.body = { message: '登录成功2！', code: 1, data: { token, newPWd, result } };

  }

  // 获取用户信息
  public async GetUserInfo() {
    const ctx = this.ctx;
    ctx.body = { message: '获取成功', code: 1 };
  }


  // public async index() {
  //   const ctx = this.ctx;

  //   ctx.body = await ctx.service.user.sayHi('egg');
  // }

  // public async getUser() {
  //   const ctx = this.ctx;

  //   const users = await UserModel.findOne();

  //   ctx.body = users;
  // }

  // public async getUsers() {
  //   const ctx = this.ctx;

  //   const users = await UserModel.find();

  //   ctx.body = users;
  // }

  // public async addUser() {
  //   const ctx = this.ctx;

  //   // 模拟前端传递过来的数据（方便测试）
  //   const user = new UserModel();
  //   user.userName = 'add 2 user';
  //   user.userNo = 2323;

  //   const res = await UserModel.insertMany(user);

  //   ctx.body = res;
  // }

  // public async updateUser() {
  //   const ctx = this.ctx;

  //   const user = new UserModel();
  //   user.userNo = 99;

  //   const res = await UserModel.findOneAndUpdate({ userNo: user.userNo }, { userName: 'i am from update' }, { new: true });

  //   ctx.body = res;
  // }

  // public async deleteUser() {
  //   const ctx = this.ctx;

  //   const user = new UserModel();
  //   user.userNo = 99;

  //   const res = await UserModel.findOneAndRemove({ userNo: user.userNo });

  //   ctx.body = res;
  // }

  // public async testInstanceFunction() {
  //   const ctx = this.ctx;

  //   const user = await ctx.service.user.testUserInstanceServiceMethods();

  //   ctx.body = user;
  // }

  // public async testStaticMethods() {
  //   const ctx = this.ctx;

  //   const user = await ctx.service.user.testUserStaticServiceMethods();

  //   ctx.body = user;
  // }

}
