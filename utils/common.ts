
// 时间 格式化成 2018-12-12 12:12:00
export const timestampToTime = (timestamp: string) => {
  const date = new Date(timestamp);
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  const D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
  const h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
  const m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
};
// 生成六位随机验证码
export const createSixNum = () => {
  let codeNum = '';
  const arr = [1, 2, 3, 4, 5, 6];
  // eslint-disable-next-line no-return-assign
  arr.forEach(() => codeNum += Math.floor(Math.random() * 10));
  return codeNum;
};

// 生成不重复的ID 用作用户ID 10位
// 当前时间戳后五位+五位随机数
export const UUID = () => {
  const randomStr = Math.random().toString().substr(2, 5);
  const dateStr = new Date().getTime().toString();
  return Number(dateStr.substr(8, 5) + randomStr);
};
