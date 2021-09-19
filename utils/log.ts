const logSymbols = require('log-symbols');
const chalk = require('chalk');
const log = console.log;

export const LogInfo = (...str) => {
  log(logSymbols.info, chalk.blue(...str));
};
export const LogSuccess = (...str) => {
  log(logSymbols.info, chalk.blue(...str));
};
export const LogWarn = (...str) => {
  log(logSymbols.info, chalk.blue(...str));
};
export const LogErr = (...str) => {
  log(logSymbols.info, chalk.blue(...str));
};
