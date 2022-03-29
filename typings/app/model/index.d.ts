// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportActricle from '../../../app/model/Actricle';
import ExportUser from '../../../app/model/User';
import ExportFolderName from '../../../app/model/folderName';
import ExportFolderNameImg from '../../../app/model/folderNameImg';

declare module 'egg' {
  interface IModel {
    Actricle: ReturnType<typeof ExportActricle>;
    User: ReturnType<typeof ExportUser>;
    FolderName: ReturnType<typeof ExportFolderName>;
    FolderNameImg: ReturnType<typeof ExportFolderNameImg>;
  }
}
