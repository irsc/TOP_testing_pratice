const capitalize = require('./capitalize');

test('single word string', ()=>{
    expect(capitalize("roma")).toBe("Roma");
});

test('Multiple word string', ()=>{
    expect(capitalize("roma is beautiful")).toBe("Roma is beautiful");
});

