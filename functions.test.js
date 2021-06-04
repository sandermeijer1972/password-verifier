const isNotNull = require('./functions.js');

test('check if password is not null', () => {
    expect(isNotNull(null)).toBe(false);    
});

test('check if password is not null, happy path', () => {
    expect(isNotNull("a")).toBe(true);
});

const hasRightLength = require('./functions.js');
    
test('check if password is not too long', () => {
    expect(hasRightLength("abcdefghi")).toBe(false);
});

test('check if password is not too long, happy path', () => {
    expect(hasRightLength("abc")).toBe(true);
});
