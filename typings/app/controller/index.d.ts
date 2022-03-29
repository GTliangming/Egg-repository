// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/controller/article';
import ExportCommon from '../../../app/controller/common';
import ExportUpload from '../../../app/controller/upload';
import ExportUser from '../../../app/controller/user';
import ExportUserArticle from '../../../app/controller/userArticle';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    common: ExportCommon;
    upload: ExportUpload;
    user: ExportUser;
    userArticle: ExportUserArticle;
  }
}
