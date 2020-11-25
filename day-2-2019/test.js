const assert = require('assert');
const intcode = require('./one');

// Day Two - Part One Tests 
describe('Part One Intcode ', () => {
  it('should return 2,0,0,0,99 when input is 1,0,0,0,99', () => {
    let input = `1,0,0,0,99`;
    assert.deepStrictEqual(intcode(input), [2,0,0,0,99]);
  });
});

describe('Part One Intcode', () => {
  it('should return 2,3,0,6,99 when input is 2,3,0,3,99', () => {
    let input = `2,3,0,3,99`;
    assert.deepStrictEqual(intcode(input), [2,3,0,6,99]);
  });
});

describe('Part One Intcode', () => {
  it('should return 2,4,4,5,99,9801 when input is 2,4,4,5,99,0', () => {
    let input = `2,4,4,5,99,0`;
    assert.deepStrictEqual(intcode(input), [2,4,4,5,99,9801]);
  });
});