// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
export * from 'egg';
export as namespace Egg;
declare module 'egg' {
    interface mysql {
        get(tableName: String, find: {}): Promise<Any>

        query(sql: String, values: Any[]): Promise<Any>
        select(sql: String, values?: Any[]): Promise<Any>
    }
    interface Application {
        mysql: mysql;
    }
}