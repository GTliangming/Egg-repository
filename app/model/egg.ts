
import { Application } from 'egg';
// import { Document, Model, Schema, model } from 'mongoose';

// /**
//     * 定义一个User的Schema
// */
// const UserSchema: Schema = new Schema({

//   userNo: {
//     type: Number,
//     index: true,
//   },

//   userName: String,
// });

// /**
//     * 用户字段接口
// */
// export interface IUser {

//   userNo: number;

//   userName: string;
// }

// /**
//     * 用户Document（实例方法在这写）
// */
// export interface IUserDocument extends IUser, Document {

//   /**
//   * 实例方法接口（名称需要和Schema的方法名一样）
//   */
//   userInstanceTestMethods: () => IUser;
// }

// /**
//     * 静态方法接口
// */
// export interface IUserModel extends Model<IUserDocument> {

//   /**
//     * 静态方法
//     */
//   userStaticTestMethods: () => IUser;
// }

// export const UserModel = model<IUserDocument, IUserModel>('User', UserSchema);


// // userNo 为索引
// // UserSchema.index({ userNo: 1 });

// // UserSchema的实例方法
// UserSchema.methods.userInstanceTestMethods = () => {

//   const user: IUser = new UserModel();
//   user.userName = '我是实例化方法测试';
//   user.userNo = 9527;

//   return user;
// };

// // UserSchema的实例方法
// UserSchema.statics.userStaticTestMethods = () => {

//   const user: IUser = new UserModel();
//   user.userName = '我是静态方法测试';
//   user.userNo = 9528;

//   return user;
// };


// // egg-mongoose注入
// export default (app: Application) => {

//   const mongoose = app.mongoose;
//   mongoose.set('useCreateIndex', true);
//   // 连接数据库
//   mongoose.connect('mongodb://lm:123456@123.56.31.193:27017/egg', {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // auth: {
//     //   user: 'lm',
//     //   password: 'lmzs1111',
//     // },
//   });

//   // 连接错误
//   mongoose.connection.on('error', error => {
//     console.log('数据库连接失败!', error);
//     return;
//   });

//   // 连接成功
//   mongoose.connection.once('open', () => {
//     console.log('数据库连接成功!');
//   });
//   // 这里为了挂载到ctx中，让正常ctx.model.User也能使用
//   return mongoose.model<IUserDocument, IUserModel>('User', UserSchema);
// };
