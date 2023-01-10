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
  test('can subtract two positive numbers', () => {
  expected = 5;
  actual = subtract(10, 5);
  expect(actual).toBe(expected);

  });

  test('can subtract two negative numbers', () => {
    expected = 1;
    actual = subtract(-7, -8);
    expect(actual).toBe(expected);

  });

  test('can subtract zero from positive number', () => {
    expected = 5;
    actual = subtract(5, 0);
    expect(actual).toBe(expected);

  });

  test('can subtract positive number from zero', () => {
    expected = -9;
    actual = subtract(0, 9);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test('can multiply two positive numbers', () => {
    expected = 25;
    actual = multiply(5, 5);
    expect(actual).toBe(expected);
  });


  test('can multiply two negative numbers', () => {
    expected = 36;
    actual = multiply(-6, -6);
    expect(actual).toBe(expected);
  });


  test('can multiply one positive and one negative number', () => {
    expected = -56;
    actual = multiply(7, -8);
    expect(actual).toBe(expected);
  });

  test('can multiply a positive number by 0', () => {
    expected = 0;
    actual = multiply(7, 0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {
  test('can divide two positive numbers', () => {
    expected = 12;
    actual = divide(48, 4);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () =>{
    expected = 7;
    actual = divide(-35, -5);
    expect(actual).toBe(expected);
  });

  test('can divide a negative number by a positive number', () => {
    expected = -6;
    actual = divide(-42, 7);
    expect(actual).toBe(expected);
  });
  test('can divide a positive number by a negative number', () => {
    expected = -3;
    actual = divide(24, -8);
    expect(actual).toBe(expected);
  });
});

// describe('modulus', () => {

// });

// describe('even', () => {

// });

// describe('odd', () => {

// });
