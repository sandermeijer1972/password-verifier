const {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
  } = require("./functions.js");


  //Not null

test('no input is not accepted', () => {
    expect(isNotNull(null)).toBeFalsy();    
});

test('input is accepted', () => {
    expect(isNotNull("henkie1")).toBeTruthy();
});
    

//Right Length

test('henkie1234 has not the right length', () => {
    expect(hasRightLength("henkie1234")).toBeFalsy();
});

test('henkie1 has the right length', () => {
    expect(hasRightLength("henkie1")).toBeTruthy();
});


//UpperCase Character

test('henkie1 has no uppercase character', () => {
    expect(hasUpperCaseCharacter("henkie1")).toBeFalsy();
});

test('Henkie1 has uppercase character', () => {
    expect(hasUpperCaseCharacter("Henkie1")).toBeTruthy();
});


//LowerCase Character

test('HENKIE1 has no lowercase character', () => {
    expect(hasLowerCaseCharacter("HENKIE1")).toBeFalsy();
});

test('Henkie1 has lowercase character', () => {
    expect(hasLowerCaseCharacter("Henkie1")).toBeTruthy();
});


//Number

test('Henkie has no number', () => {
    expect(hasDigit("Henkie")).toBeFalsy();
});

test('Henkie1 has a number', () => {
    expect(hasDigit("Henkie1")).toBeTruthy();
});
