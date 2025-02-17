const MAX_LENGTH = {
  cardNumber: 4,
  expirationDate: 2,
  userName: 20,
  cvcNumber: 3,
  password: 2,
} as const;

const REG_EXP = {
  cardNumber: {
    valid: /^\d+$/,
    invalid: /[^\d+$]/g,
  },
  month: {
    valid: /^\d+$/,
    invalid: /[^\d+$]/g,
  },
  year: {
    valid: /^\d+$/,
    invalid: /[^\d+$]/g,
  },
  userName: {
    valid: /^[a-zA-Z\s]+$/,
    invalid: /[^a-zA-Z\s]+/,
  },
  cvcNumber: {
    valid: /^\d+$/,
    invalid: /[^\d+$]/g,
  },
  password: {
    valid: /^\d+$/,
    invalid: /[^\d+$]/g,
  },
} as const;

const CONDITION = {
  MAX_LENGTH,
  REG_EXP,
  hiddenCardNumber: '*',
  lastNameAndFirstName: (value: string) => value.split(' ').length === 2,
  splitSlash: '/',
  showVisa: (first: string) => first[0] === '4',
  showMasterCard: (first: string) =>
    first[0] === '5' && ['1', '2', '3', '4', '5'].includes(first[1]),
} as const;

export default CONDITION;
