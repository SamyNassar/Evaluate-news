const Validate = require('../src/client/js/ValidateURL');


test('https://www.google.com/ return true', () => {
    expect(Validate.ValidateURL("https://www.google.com/")).toBeTruthy();
})



test('Google return false', () => {
    expect(Validate.ValidateURL("google")).toBeFalsy();
})


test('Empty string return false', () => {
    expect(Validate.ValidateURL("")).toBeFalsy();
})