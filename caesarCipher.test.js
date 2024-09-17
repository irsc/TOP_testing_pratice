const caesarCipher = require('./caesarCipher');


test('ciphers xyz shifted 3 places', () => {
    expect(caesarCipher("xyz",3)).toBe("abc");
});

test('test case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe("KhOOr");
});

test('test punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!");
});
 

