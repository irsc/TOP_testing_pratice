const reverseString = require('./reverseString');

test('single word string', ()=>{
    expect(reverseString("Paris")).toBe("siraP");
});

test('Multiple word string', ()=>{
    expect(reverseString("Paris is amazing")).toBe("gnizama si siraP");
});
