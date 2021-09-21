// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportCommon from '../../../app/service/common';
import ExportSql from '../../../app/service/sql';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    common: AutoInstanceType<typeof ExportCommon>;
    sql: AutoInstanceType<typeof ExportSql>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
