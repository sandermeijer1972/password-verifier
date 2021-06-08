const {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
    verifyPassword,
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


//Minimum Conditions

test('Minimum conditions all false', () => {
    expect(minimumConditionsReached([false, false, false, false, false])).toBe(false);
});

test('Minimum conditions only 1 true', () => {
    expect(minimumConditionsReached([false, true, false, false, false])).toBe(false);
});

test('Minimum conditions only 2 true', () => {
    expect(minimumConditionsReached([true, true, false, false, false])).toBe(false);
});

test('Minimum conditions only 2 others true', () => {
    expect(minimumConditionsReached([false, false, true, false, true])).toBe(false);
});

test('Minimum conditions 3 times true', () => {
    expect(minimumConditionsReached([true, true, true, false, false])).toBe(false);
});

test('Minimum conditions 3 other true', () => {
    expect(minimumConditionsReached([false, true, false, true, true])).toBe(false);
});

test('Mimimum conditions only 1 false', () => {
    expect(minimumConditionsReached([true, true, true, true, false])).toBe(false);
});

test('Minimum conditions all true', () => {
    expect(minimumConditionsReached([true, true, true, true, true])).toBe(true);
});


//Password verifier

test('Henk123 is a good password', () => {
    expect(verifyPassword("Henk123")).toBe(true);
});

test('HENK123 is not a good password', () => {
    expect(verifyPassword("HENK123")).toBe(false);
});

test('h is not a good password', () => {
    expect(verifyPassword("h")).toBe(false);
});

test('Henk33$ is a good password', () => {
    expect(verifyPassword("Henk33$")).toBe(true);
});

test('empty-string is not a good password', () => {
    expect(verifyPassword("")).toBe(false);
});

