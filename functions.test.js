const {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
  } = require("./functions.js");


  //Not null

test('no input is not accepted', () => {
    expect(isNotNull(null)).toBe(false);    
});

test('input is accepted', () => {
    expect(isNotNull("henkie1")).toBe(true);
});
    

//Right Length

test('henkie1234 has not the right length', () => {
    expect(hasRightLength("henkie1234")).toBe(false);
});

test('henkie1 has the right length', () => {
    expect(hasRightLength("henkie1")).toBe(true);
});


//UpperCase Character

test('henkie1 has no uppercase character', () => {
    expect(hasUpperCaseCharacter("henkie1")).toBe(false);
});

test('Henkie1 has uppercase character', () => {
    expect(hasUpperCaseCharacter("Henkie1")).toBe(true);
});


//LowerCase Character

test('HENKIE1 has no lowercase character', () => {
    expect(hasLowerCaseCharacter("HENKIE1")).toBe(false);
});

test('Henkie1 has lowercase character', () => {
    expect(hasLowerCaseCharacter("Henkie1")).toBe(true);
});


//Number

test('Henkie has no number', () => {
    expect(hasDigit("Henkie")).toBe(false);
});

test('Henkie1 has a number', () => {
    expect(hasDigit("Henkie1")).toBe(true);
});
