// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportArticle from '../../../app/service/article';
import ExportCommon from '../../../app/service/common';
import ExportTaro from '../../../app/service/taro';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    article: AutoInstanceType<typeof ExportArticle>;
    common: AutoInstanceType<typeof ExportCommon>;
    taro: AutoInstanceType<typeof ExportTaro>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
