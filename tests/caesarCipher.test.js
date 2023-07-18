const caesarCipher = require('../code/caesarCipher');

it("Caesar Cipher", ()=> {
    expect(caesarCipher('abcd', 1)).toBe('bcde');
});