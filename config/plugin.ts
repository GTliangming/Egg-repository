import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  sequelize: {
    enable: false,
    package: 'egg-sequelize',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
};
export default plugin;
