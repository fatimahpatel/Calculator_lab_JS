const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 500000;
    actual = sum (268905, 231095);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -11;
    actual = sum(-5, -6);
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    expected = 5;
    actual = sum(0, 5);
    expect(actual).toBe(expected);
    
  });

});

describe('subtract', () => {
  test('can subtract two numbers', () => {
  expected = 5;
  actual = subtract(10, 5);
  expect(actual).toBe(expected);

  })

});

// describe('multiply', () => {

// });

// describe('divide', () => {

// });

// describe('modulus', () => {

// });

// describe('even', () => {

// });

// describe('odd', () => {

// });
