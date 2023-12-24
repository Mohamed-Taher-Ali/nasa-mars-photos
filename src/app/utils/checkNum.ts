export const checkNum = (num: any, defaultVal: number = 0) =>
  isNaN(num) ? defaultVal : +num;
