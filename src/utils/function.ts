import * as CryptoJS from 'crypto-js';
import numeral from 'numeral';
import Decimal from 'decimal.js';

export const hideEndString = (
  text: string = '',
  type: string,
  numberStart = 5
) => {
  let rawString = '';
  let changeString = '';
  let characterReplace = '*';
  if (type === 'email') {
    rawString = text.split('@')[0];
  }
  if (type === 'refUrl') {
    rawString = text.split('=')[0];
  }

  if (type === 'phone') {
    changeString = text.substr(6, 4);
  } else if (type === 'middle') {
    changeString = text.substr(3, 4);
  } else if (type === 'id') {
    changeString = text.substr(3, 18);
  } else if (type === 'refUrl') {
    changeString = text.substr(15, rawString.length - 15);
  } else {
    changeString = text.substr(rawString.length - 5, 5);
  }

  if (type === 'refUrl') {
    characterReplace = '.';
  }

  return text.replace(changeString, characterReplace.repeat(numberStart));
};

export function formatCurrency(
  number: number,
  decimals = 4,
  isShorty = false,
  isWithoutComma = false
) {
  const tail = new Array(decimals).fill('0').join('');

  const num = new Decimal(Number(number));
  const numFixed = num.toFixed(decimals, Decimal.ROUND_DOWN);
  if (String(num) === 'NaN') return numFixed;

  const numFormat = numeral(Number(numFixed));

  if (isNaN(Number(numFixed)) || num.isNaN())
    return numeral(0).format(`0,0.${tail}`);

  if (isShorty) return numFormat.format(`0,0.[${tail}]`);

  if (isWithoutComma) {
    return numFormat.format(`0.${tail}`);
  }

  return numFormat.format(`0,0.${tail}`);
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(emailRegex)) return true;

  return false;
};

export const validatePhoneNumber = (phone: string): boolean => {
  var phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

  if (phoneRegex.test(phone)) return true;

  return false;
};

export const formatPhone = (phoneCode: number, phone: string) => {
  const formatPhone = phone.replace(/^0+/, '');

  return `+${phoneCode}${formatPhone}`;
};

export const encryptedPassword = (password: string) => {
  return CryptoJS.AES.encrypt(
    password,
    process.env.NEXT_PUBLIC_PASSPHRASE_PASS
  ).toString();
};

export const convertNumberDecimal = (
  number: number,
  maxDecimal: number
): number => {
  const text = number.toString();
  if (text.includes('.')) {
    const rootNumber = text.split('.')[0];
    const decimalNumber = text.split('.')[1];

    if (decimalNumber.length <= maxDecimal) {
      return number;
    }
    return Number(rootNumber + '.' + decimalNumber.slice(0, maxDecimal));
  }

  return number;
};

export const getFiatSymbol = (fiatName: string) => {
  switch (fiatName) {
    case 'VND':
      return '₫';
    case 'USD':
      return '$';
    case 'CNY':
      return '￥';
    case 'EUR':
      return '€';
    default:
      return '';
  }
};

export const getTokenUrl = (lowercaseSymbol: string) => {
  switch (lowercaseSymbol) {
    case 'gal':
      return 'https://etherscan.io/token/images/projectgalaxy_32.png';
    case 'us2':
      return '/img/us2.svg';

    default:
      return `https://static.coincap.io/assets/icons/${lowercaseSymbol}@2x.png`;
  }
};

export const getTokenName = (tokenName: string) => {
  if (tokenName === 'US2') return 'US²';
  return tokenName;
};

export const isValidDecimal = (number: number, maxDecimal: number): Boolean => {
  const text = number.toString();
  if (text.includes('.')) {
    const numberDecimal = text.split('.')[1].length;
    return numberDecimal <= maxDecimal;
  }

  return true;
};
