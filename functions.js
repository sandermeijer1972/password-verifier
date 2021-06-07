const isNotNull = (password) => password !== null;

const hasRightLength = (password) => password.length <= 8;

const hasUpperCaseCharacter = (password) => /[A-Z]/.test(password);

const hasLowerCaseCharacter = (password) => /[a-z]/.test(password);

const hasDigit = (password) => /[0-9]/.test(password);

const minimumConditionsReached = (conditions) => {
  // conditions is an array of booleans
  trueConditions = conditions.filter(bool => bool);
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = (password) => {
  const conditions = [
      isNotNull(password),
      hasRightLength(password),
      hasUpperCaseCharacter(password),
      hasLowerCaseCharacter(password),
      hasDigit(password)
  ];
  const result =
      minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

  return result;
};

module.exports = {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
    verifyPassword,
};
