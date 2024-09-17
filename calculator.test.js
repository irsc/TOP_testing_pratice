const calculator = require('./calculator');

describe('add', () => {
  test('adds 0 and 0', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });
  test('adds 2 and 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
  test('adds positive numbers', () => {
    expect(calculator.add(2, 6)).toBe(8);
  });
  test('adds negative numbers', () => {
    expect(calculator.add(-2, -3)).toBe(-5);
  });

});

describe('subtract', () => {
  test('subtracts numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });
  test('subtracts numbers yields to less than zero', () => {
    expect(calculator.subtract(2, 5)).toBe(-3);
  });
});


describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });
  test('multiplies by zero', () => {
    expect(calculator.multiply(0, 4)).toBe(0);
  });

});

