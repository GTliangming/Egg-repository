import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  cors: {
    enable: false,
    package: 'egg-cors',
  },
  mongoose: {
    enable: false,
    package: 'egg-mongoose',
  },

};
export default plugin;
