// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportEgg from '../../../app/model/egg';

declare module 'egg' {
  interface IModel {
    Egg: ReturnType<typeof ExportEgg>;
  }
}
