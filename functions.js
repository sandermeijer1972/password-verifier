const isNotNull = (password) => password !== null;

const hasRightLength = (password) => password.length <= 8;

const hasUpperCaseCharacter = (password) => /[A-Z]/.test(password);

const hasLowerCaseCharacter = (password) => /[a-z]/.test(password);

const hasDigit = (password) => /[0-9]/.test(password);

module.exports = {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
  };
