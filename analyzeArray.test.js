const analyzeArray = require('./analyzeArray');

let object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
 };
test('analyze the array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual(object);
});

let object2 = {
    average: 0,
    min: -1,
    max: 1,
    length: 8
 };
test('analyze the array', () => {
    expect(analyzeArray([1,0,1,0,-1,0,-1,0])).toStrictEqual(object2);
});