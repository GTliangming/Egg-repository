// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/controller/article';
import ExportCommon from '../../../app/controller/common';
import ExportTaro from '../../../app/controller/taro';
import ExportUser from '../../../app/controller/user';
import ExportUserArticle from '../../../app/controller/userArticle';
import ExportWechat from '../../../app/controller/wechat';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    common: ExportCommon;
    taro: ExportTaro;
    user: ExportUser;
    userArticle: ExportUserArticle;
    wechat: ExportWechat;
  }
}
