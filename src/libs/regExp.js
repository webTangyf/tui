export let regExp = {
  numshare: /^\d*(\.\d{0,2})?$/,
  number: /^\d+$/,
  idcard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  phone: /^1[3|4|5|8|7|9][0-9]\d{4,8}$/,
  psd: /^[0-9a-z]{6,8}$/i,
  account: /^[0-9x]{11,18}$/i,
  chinese: /[\u4E00-\u9FA5]/,
  html: /<("[^"]*"|'[^']*'|[^'">])*>/,
  email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
}
