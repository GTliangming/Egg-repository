// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportActricle from '../../../app/model/Actricle';
import ExportTaro from '../../../app/model/Taro';
import ExportUser from '../../../app/model/User';

declare module 'egg' {
  interface IModel {
    Actricle: ReturnType<typeof ExportActricle>;
    Taro: ReturnType<typeof ExportTaro>;
    User: ReturnType<typeof ExportUser>;
  }
}
